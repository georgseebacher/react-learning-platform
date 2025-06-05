import Database from "better-sqlite3"
import path from "path"
import fs from "fs"

// Erstelle Datenbank-Verzeichnis falls es nicht existiert
const dbDir = path.join(process.cwd(), "data")
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true })
}

const dbPath = path.join(dbDir, "learning-progress.db")

// Singleton Pattern für die Datenbank
let db: Database.Database | null = null

function getDatabase() {
  if (!db) {
    try {
      db = new Database(dbPath)

      // WAL-Modus für bessere Performance
      db.pragma("journal_mode = WAL")

      // Tabellen erstellen
      initializeTables()
    } catch (error) {
      console.error("Database initialization error:", error)
      throw error
    }
  }
  return db
}

function initializeTables() {
  const db = getDatabase()

  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      last_active DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS module_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      module_id INTEGER NOT NULL,
      status TEXT CHECK(status IN ('not_started', 'in_progress', 'completed')) DEFAULT 'not_started',
      started_at DATETIME,
      completed_at DATETIME,
      attempts INTEGER DEFAULT 0,
      best_score INTEGER DEFAULT 0,
      time_spent INTEGER DEFAULT 0,
      FOREIGN KEY (user_id) REFERENCES users (id),
      UNIQUE(user_id, module_id)
    );

    CREATE TABLE IF NOT EXISTS exercise_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      module_id INTEGER NOT NULL,
      submitted_code TEXT NOT NULL,
      is_correct BOOLEAN DEFAULT FALSE,
      submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      execution_time INTEGER,
      error_message TEXT,
      FOREIGN KEY (user_id) REFERENCES users (id)
    );

    CREATE TABLE IF NOT EXISTS user_settings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      setting_key TEXT NOT NULL,
      setting_value TEXT NOT NULL,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id),
      UNIQUE(user_id, setting_key)
    );

    CREATE TABLE IF NOT EXISTS learning_sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      module_id INTEGER NOT NULL,
      session_start DATETIME DEFAULT CURRENT_TIMESTAMP,
      session_end DATETIME,
      duration_minutes INTEGER,
      activities_completed INTEGER DEFAULT 0,
      FOREIGN KEY (user_id) REFERENCES users (id)
    );
  `)
}

// Prepared Statements
function getStatements() {
  const db = getDatabase()

  return {
    // User Management
    createUser: db.prepare(`
      INSERT OR IGNORE INTO users (username, email) 
      VALUES (?, ?)
    `),

    getUserByUsername: db.prepare(`
      SELECT * FROM users WHERE username = ?
    `),

    updateUserActivity: db.prepare(`
      UPDATE users SET last_active = CURRENT_TIMESTAMP WHERE id = ?
    `),

    // Module Progress
    getModuleProgress: db.prepare(`
      SELECT * FROM module_progress WHERE user_id = ? ORDER BY module_id
    `),

    upsertModuleProgress: db.prepare(`
      INSERT INTO module_progress (user_id, module_id, status, started_at, attempts, time_spent)
      VALUES (?, ?, ?, CURRENT_TIMESTAMP, 1, ?)
      ON CONFLICT(user_id, module_id) DO UPDATE SET
        status = excluded.status,
        attempts = attempts + 1,
        time_spent = time_spent + excluded.time_spent,
        completed_at = CASE WHEN excluded.status = 'completed' THEN CURRENT_TIMESTAMP ELSE completed_at END
    `),

    completeModule: db.prepare(`
      UPDATE module_progress 
      SET status = 'completed', completed_at = CURRENT_TIMESTAMP, best_score = ?
      WHERE user_id = ? AND module_id = ?
    `),

    // Exercise Submissions
    saveExerciseSubmission: db.prepare(`
      INSERT INTO exercise_submissions (user_id, module_id, submitted_code, is_correct, execution_time, error_message)
      VALUES (?, ?, ?, ?, ?, ?)
    `),

    getExerciseHistory: db.prepare(`
      SELECT * FROM exercise_submissions 
      WHERE user_id = ? AND module_id = ? 
      ORDER BY submitted_at DESC 
      LIMIT 10
    `),

    // User Settings
    getUserSettings: db.prepare(`
      SELECT setting_key, setting_value FROM user_settings WHERE user_id = ?
    `),

    upsertUserSetting: db.prepare(`
      INSERT INTO user_settings (user_id, setting_key, setting_value)
      VALUES (?, ?, ?)
      ON CONFLICT(user_id, setting_key) DO UPDATE SET
        setting_value = excluded.setting_value,
        updated_at = CURRENT_TIMESTAMP
    `),

    // Learning Sessions
    startLearningSession: db.prepare(`
      INSERT INTO learning_sessions (user_id, module_id)
      VALUES (?, ?)
    `),

    getLastInsertRowId: db.prepare(`SELECT last_insert_rowid() as id`),

    endLearningSession: db.prepare(`
      UPDATE learning_sessions 
      SET session_end = CURRENT_TIMESTAMP,
          duration_minutes = (julianday(CURRENT_TIMESTAMP) - julianday(session_start)) * 24 * 60,
          activities_completed = ?
      WHERE id = ?
    `),

    // Statistics
    getUserStats: db.prepare(`
      SELECT 
        COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_modules,
        COUNT(*) as total_modules_started,
        COALESCE(SUM(time_spent), 0) as total_time_spent,
        COALESCE(AVG(best_score), 0) as average_score,
        MAX(completed_at) as last_completion
      FROM module_progress 
      WHERE user_id = ?
    `),

    getModuleStats: db.prepare(`
      SELECT 
        module_id,
        COUNT(*) as total_attempts,
        COUNT(CASE WHEN is_correct = 1 THEN 1 END) as successful_attempts,
        AVG(execution_time) as avg_execution_time
      FROM exercise_submissions 
      WHERE user_id = ? AND module_id = ?
      GROUP BY module_id
    `),
  }
}

export interface User {
  id: number
  username: string
  email?: string
  created_at: string
  last_active: string
}

export interface ModuleProgress {
  id: number
  user_id: number
  module_id: number
  status: "not_started" | "in_progress" | "completed"
  started_at?: string
  completed_at?: string
  attempts: number
  best_score: number
  time_spent: number
}

export interface ExerciseSubmission {
  id: number
  user_id: number
  module_id: number
  submitted_code: string
  is_correct: boolean
  submitted_at: string
  execution_time?: number
  error_message?: string
}

export interface UserStats {
  completed_modules: number
  total_modules_started: number
  total_time_spent: number
  average_score: number
  last_completion?: string
}

// Database Service Class
export class DatabaseService {
  static createUser(username: string, email?: string): User {
    try {
      const statements = getStatements()

      // Versuche User zu erstellen
      statements.createUser.run(username, email || null)

      // Hole den User
      const user = statements.getUserByUsername.get(username) as User
      if (!user) {
        throw new Error("Failed to create or retrieve user")
      }

      return user
    } catch (error) {
      console.error("Error creating user:", error)
      throw error
    }
  }

  static getUserByUsername(username: string): User | null {
    try {
      const statements = getStatements()
      return statements.getUserByUsername.get(username) as User | null
    } catch (error) {
      console.error("Error getting user:", error)
      return null
    }
  }

  static updateUserActivity(userId: number): void {
    try {
      const statements = getStatements()
      statements.updateUserActivity.run(userId)
    } catch (error) {
      console.error("Error updating user activity:", error)
    }
  }

  static getModuleProgress(userId: number): ModuleProgress[] {
    try {
      const statements = getStatements()
      return statements.getModuleProgress.all(userId) as ModuleProgress[]
    } catch (error) {
      console.error("Error getting module progress:", error)
      return []
    }
  }

  static updateModuleProgress(userId: number, moduleId: number, status: string, timeSpent = 0): void {
    try {
      const statements = getStatements()
      statements.upsertModuleProgress.run(userId, moduleId, status, timeSpent)
    } catch (error) {
      console.error("Error updating module progress:", error)
      throw error
    }
  }

  static completeModule(userId: number, moduleId: number, score = 100): void {
    try {
      const statements = getStatements()
      statements.completeModule.run(score, userId, moduleId)
    } catch (error) {
      console.error("Error completing module:", error)
      throw error
    }
  }

  static saveExerciseSubmission(
    userId: number,
    moduleId: number,
    code: string,
    isCorrect: boolean,
    executionTime?: number,
    errorMessage?: string,
  ): void {
    try {
      const statements = getStatements()
      statements.saveExerciseSubmission.run(
        userId,
        moduleId,
        code,
        isCorrect ? 1 : 0,
        executionTime || null,
        errorMessage || null,
      )
    } catch (error) {
      console.error("Error saving exercise submission:", error)
      throw error
    }
  }

  static getExerciseHistory(userId: number, moduleId: number): ExerciseSubmission[] {
    try {
      const statements = getStatements()
      return statements.getExerciseHistory.all(userId, moduleId) as ExerciseSubmission[]
    } catch (error) {
      console.error("Error getting exercise history:", error)
      return []
    }
  }

  static getUserSettings(userId: number): Record<string, string> {
    try {
      const statements = getStatements()
      const settings = statements.getUserSettings.all(userId) as Array<{ setting_key: string; setting_value: string }>
      return settings.reduce(
        (acc, setting) => {
          acc[setting.setting_key] = setting.setting_value
          return acc
        },
        {} as Record<string, string>,
      )
    } catch (error) {
      console.error("Error getting user settings:", error)
      return {}
    }
  }

  static updateUserSetting(userId: number, key: string, value: string): void {
    try {
      const statements = getStatements()
      statements.upsertUserSetting.run(userId, key, value)
    } catch (error) {
      console.error("Error updating user setting:", error)
      throw error
    }
  }

  static startLearningSession(userId: number, moduleId: number): number {
    try {
      const statements = getStatements()
      statements.startLearningSession.run(userId, moduleId)
      const result = statements.getLastInsertRowId.get() as any
      return result.id
    } catch (error) {
      console.error("Error starting learning session:", error)
      throw error
    }
  }

  static endLearningSession(sessionId: number, activitiesCompleted: number): void {
    try {
      const statements = getStatements()
      statements.endLearningSession.run(activitiesCompleted, sessionId)
    } catch (error) {
      console.error("Error ending learning session:", error)
      throw error
    }
  }

  static getUserStats(userId: number): UserStats {
    try {
      const statements = getStatements()
      const stats = statements.getUserStats.get(userId) as UserStats
      return {
        completed_modules: stats?.completed_modules || 0,
        total_modules_started: stats?.total_modules_started || 0,
        total_time_spent: stats?.total_time_spent || 0,
        average_score: stats?.average_score || 0,
        last_completion: stats?.last_completion || undefined,
      }
    } catch (error) {
      console.error("Error getting user stats:", error)
      return {
        completed_modules: 0,
        total_modules_started: 0,
        total_time_spent: 0,
        average_score: 0,
      }
    }
  }

  static getModuleStats(userId: number, moduleId: number) {
    try {
      const statements = getStatements()
      return statements.getModuleStats.get(userId, moduleId)
    } catch (error) {
      console.error("Error getting module stats:", error)
      return null
    }
  }

  // Backup and Restore
  static exportUserData(userId: number): any {
    try {
      const user = this.getUserByUsername("default_user")
      const progress = this.getModuleProgress(userId)
      const settings = this.getUserSettings(userId)
      const stats = this.getUserStats(userId)

      return {
        user,
        progress,
        settings,
        stats,
        exported_at: new Date().toISOString(),
      }
    } catch (error) {
      console.error("Error exporting user data:", error)
      return null
    }
  }

  static close(): void {
    if (db) {
      db.close()
      db = null
    }
  }
}

export default DatabaseService
