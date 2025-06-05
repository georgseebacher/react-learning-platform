import fs from "fs"
import path from "path"

// Einfache JSON-basierte Speicherung als Fallback
const dataDir = path.join(process.cwd(), "data")
const dataFile = path.join(dataDir, "learning-data.json")

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

export interface LearningSession {
  id: number
  user_id: number
  module_id: number
  session_start: string
  session_end?: string
  duration_minutes?: number
  activities_completed: number
}

interface DatabaseData {
  users: User[]
  module_progress: ModuleProgress[]
  exercise_submissions: ExerciseSubmission[]
  learning_sessions: LearningSession[]
  user_settings: Array<{ user_id: number; setting_key: string; setting_value: string }>
  next_ids: {
    user: number
    module_progress: number
    exercise_submission: number
    learning_session: number
  }
}

// Initialisiere leere Datenbank-Struktur
const emptyData: DatabaseData = {
  users: [],
  module_progress: [],
  exercise_submissions: [],
  learning_sessions: [],
  user_settings: [],
  next_ids: {
    user: 1,
    module_progress: 1,
    exercise_submission: 1,
    learning_session: 1,
  },
}

// Stelle sicher, dass das Datenverzeichnis existiert
function ensureDataDir() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Lade Daten aus der JSON-Datei
function loadData(): DatabaseData {
  ensureDataDir()

  if (!fs.existsSync(dataFile)) {
    saveData(emptyData)
    return emptyData
  }

  try {
    const fileContent = fs.readFileSync(dataFile, "utf-8")
    const data = JSON.parse(fileContent) as DatabaseData

    // Stelle sicher, dass alle erforderlichen Felder vorhanden sind
    return {
      ...emptyData,
      ...data,
      next_ids: {
        ...emptyData.next_ids,
        ...data.next_ids,
      },
    }
  } catch (error) {
    console.error("Error loading data, using empty data:", error)
    return emptyData
  }
}

// Speichere Daten in die JSON-Datei
function saveData(data: DatabaseData) {
  ensureDataDir()

  try {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), "utf-8")
  } catch (error) {
    console.error("Error saving data:", error)
    throw error
  }
}

// Database Service Class
export class SimpleStorageService {
  static createUser(username: string, email?: string): User {
    const data = loadData()

    // Prüfe ob User bereits existiert
    let user = data.users.find((u) => u.username === username)

    if (!user) {
      // Erstelle neuen User
      user = {
        id: data.next_ids.user++,
        username,
        email,
        created_at: new Date().toISOString(),
        last_active: new Date().toISOString(),
      }

      data.users.push(user)
      saveData(data)
    } else {
      // Aktualisiere letzte Aktivität
      user.last_active = new Date().toISOString()
      saveData(data)
    }

    return user
  }

  static getUserByUsername(username: string): User | null {
    const data = loadData()
    return data.users.find((u) => u.username === username) || null
  }

  static updateUserActivity(userId: number): void {
    const data = loadData()
    const user = data.users.find((u) => u.id === userId)

    if (user) {
      user.last_active = new Date().toISOString()
      saveData(data)
    }
  }

  static getModuleProgress(userId: number): ModuleProgress[] {
    const data = loadData()
    return data.module_progress.filter((p) => p.user_id === userId).sort((a, b) => a.module_id - b.module_id)
  }

  static updateModuleProgress(userId: number, moduleId: number, status: string, timeSpent = 0): void {
    const data = loadData()
    let progress = data.module_progress.find((p) => p.user_id === userId && p.module_id === moduleId)

    if (!progress) {
      // Erstelle neuen Fortschritt
      progress = {
        id: data.next_ids.module_progress++,
        user_id: userId,
        module_id: moduleId,
        status: status as any,
        started_at: new Date().toISOString(),
        attempts: 1,
        best_score: 0,
        time_spent: timeSpent,
      }
      data.module_progress.push(progress)
    } else {
      // Aktualisiere bestehenden Fortschritt
      progress.status = status as any
      progress.attempts += 1
      progress.time_spent += timeSpent

      if (status === "completed") {
        progress.completed_at = new Date().toISOString()
      }
    }

    saveData(data)
  }

  static completeModule(userId: number, moduleId: number, score = 100): void {
    const data = loadData()
    let progress = data.module_progress.find((p) => p.user_id === userId && p.module_id === moduleId)

    if (!progress) {
      progress = {
        id: data.next_ids.module_progress++,
        user_id: userId,
        module_id: moduleId,
        status: "completed",
        started_at: new Date().toISOString(),
        completed_at: new Date().toISOString(),
        attempts: 1,
        best_score: score,
        time_spent: 0,
      }
      data.module_progress.push(progress)
    } else {
      progress.status = "completed"
      progress.completed_at = new Date().toISOString()
      progress.best_score = Math.max(progress.best_score, score)
    }

    saveData(data)
  }

  static saveExerciseSubmission(
    userId: number,
    moduleId: number,
    code: string,
    isCorrect: boolean,
    executionTime?: number,
    errorMessage?: string,
  ): void {
    const data = loadData()

    const submission: ExerciseSubmission = {
      id: data.next_ids.exercise_submission++,
      user_id: userId,
      module_id: moduleId,
      submitted_code: code,
      is_correct: isCorrect,
      submitted_at: new Date().toISOString(),
      execution_time: executionTime,
      error_message: errorMessage,
    }

    data.exercise_submissions.push(submission)
    saveData(data)
  }

  static getExerciseHistory(userId: number, moduleId: number): ExerciseSubmission[] {
    const data = loadData()
    return data.exercise_submissions
      .filter((s) => s.user_id === userId && s.module_id === moduleId)
      .sort((a, b) => new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime())
      .slice(0, 10)
  }

  static getUserSettings(userId: number): Record<string, string> {
    const data = loadData()
    const settings = data.user_settings.filter((s) => s.user_id === userId)

    return settings.reduce(
      (acc, setting) => {
        acc[setting.setting_key] = setting.setting_value
        return acc
      },
      {} as Record<string, string>,
    )
  }

  static updateUserSetting(userId: number, key: string, value: string): void {
    const data = loadData()
    const existingSetting = data.user_settings.find((s) => s.user_id === userId && s.setting_key === key)

    if (existingSetting) {
      existingSetting.setting_value = value
    } else {
      data.user_settings.push({
        user_id: userId,
        setting_key: key,
        setting_value: value,
      })
    }

    saveData(data)
  }

  static startLearningSession(userId: number, moduleId: number): number {
    const data = loadData()

    const session: LearningSession = {
      id: data.next_ids.learning_session++,
      user_id: userId,
      module_id: moduleId,
      session_start: new Date().toISOString(),
      activities_completed: 0,
    }

    data.learning_sessions.push(session)
    saveData(data)

    return session.id
  }

  static endLearningSession(sessionId: number, activitiesCompleted: number): void {
    const data = loadData()
    const session = data.learning_sessions.find((s) => s.id === sessionId)

    if (session) {
      session.session_end = new Date().toISOString()
      session.activities_completed = activitiesCompleted

      // Berechne Dauer in Minuten
      const startTime = new Date(session.session_start).getTime()
      const endTime = new Date(session.session_end).getTime()
      session.duration_minutes = Math.round((endTime - startTime) / (1000 * 60))

      saveData(data)
    }
  }

  static getUserStats(userId: number): UserStats {
    const data = loadData()
    const userProgress = data.module_progress.filter((p) => p.user_id === userId)

    const completedModules = userProgress.filter((p) => p.status === "completed").length
    const totalModulesStarted = userProgress.length
    const totalTimeSpent = userProgress.reduce((sum, p) => sum + p.time_spent, 0)
    const averageScore =
      userProgress.length > 0 ? userProgress.reduce((sum, p) => sum + p.best_score, 0) / userProgress.length : 0

    // Finde letzte Completion
    const completedProgress = userProgress.filter((p) => p.status === "completed" && p.completed_at)
    const lastCompletion =
      completedProgress.length > 0
        ? completedProgress.sort((a, b) => new Date(b.completed_at!).getTime() - new Date(a.completed_at!).getTime())[0]
            .completed_at
        : undefined

    return {
      completed_modules: completedModules,
      total_modules_started: totalModulesStarted,
      total_time_spent: totalTimeSpent,
      average_score: averageScore,
      last_completion: lastCompletion,
    }
  }

  static getModuleStats(userId: number, moduleId: number) {
    const data = loadData()
    const submissions = data.exercise_submissions.filter((s) => s.user_id === userId && s.module_id === moduleId)

    if (submissions.length === 0) return null

    const totalAttempts = submissions.length
    const successfulAttempts = submissions.filter((s) => s.is_correct).length
    const avgExecutionTime =
      submissions.filter((s) => s.execution_time).reduce((sum, s) => sum + (s.execution_time || 0), 0) /
      submissions.filter((s) => s.execution_time).length

    return {
      module_id: moduleId,
      total_attempts: totalAttempts,
      successful_attempts: successfulAttempts,
      avg_execution_time: avgExecutionTime || 0,
    }
  }

  static exportUserData(userId: number): any {
    const data = loadData()
    const user = data.users.find((u) => u.id === userId)
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
  }

  static resetAllData(): void {
    saveData(emptyData)
  }

  static getDataFilePath(): string {
    return dataFile
  }
}

export default SimpleStorageService
