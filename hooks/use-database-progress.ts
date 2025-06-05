"use client"

import { useState, useEffect, useCallback } from "react"
import type { User, ModuleProgress, UserStats } from "@/lib/simple-storage"

interface DatabaseProgress {
  user: User | null
  progress: ModuleProgress[]
  stats: UserStats | null
  isLoading: boolean
  error: string | null
}

export function useDatabaseProgress() {
  const [state, setState] = useState<DatabaseProgress>({
    user: null,
    progress: [],
    stats: null,
    isLoading: true,
    error: null,
  })

  const [currentSession, setCurrentSession] = useState<number | null>(null)

  // API Calls mit besserer Fehlerbehandlung
  const apiCall = useCallback(async (endpoint: string, options: RequestInit = {}) => {
    try {
      console.log(`Making API call to: /api/${endpoint}`)

      const response = await fetch(`/api/${endpoint}`, {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      })

      console.log(`API response status: ${response.status}`)

      if (!response.ok) {
        const errorText = await response.text()
        console.error(`API Error Response: ${errorText}`)
        throw new Error(`API Error: ${response.status} - ${errorText}`)
      }

      const data = await response.json()
      console.log(`API response data:`, data)
      return data
    } catch (error) {
      console.error(`API call failed for ${endpoint}:`, error)
      throw error
    }
  }, [])

  // Automatisches Login mit Default-User
  const initializeDefaultUser = useCallback(async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }))

    try {
      console.log("Initializing default user...")
      const userData = await apiCall("auth/default-user", {
        method: "POST",
      })

      console.log("User data received:", userData)

      setState((prev) => ({
        ...prev,
        user: userData.user,
        progress: userData.progress || [],
        stats: userData.stats,
        isLoading: false,
      }))

      return userData.user
    } catch (error) {
      console.error("Failed to initialize default user:", error)
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : "Initialisierung fehlgeschlagen",
        isLoading: false,
      }))
      throw error
    }
  }, [apiCall])

  // Progress Management
  const updateModuleProgress = useCallback(
    async (moduleId: number, status: "in_progress" | "completed", timeSpent = 0) => {
      if (!state.user) return

      try {
        await apiCall("progress/update", {
          method: "POST",
          body: JSON.stringify({
            userId: state.user.id,
            moduleId,
            status,
            timeSpent,
          }),
        })

        // Update local state
        setState((prev) => ({
          ...prev,
          progress: prev.progress.map((p) =>
            p.module_id === moduleId ? { ...p, status, time_spent: p.time_spent + timeSpent } : p,
          ),
        }))

        // Refresh stats
        await refreshUserStats()
      } catch (error) {
        console.error("Failed to update progress:", error)
      }
    },
    [state.user, apiCall],
  )

  const completeModule = useCallback(
    async (moduleId: number, score = 100) => {
      if (!state.user) return

      try {
        await apiCall("progress/complete", {
          method: "POST",
          body: JSON.stringify({
            userId: state.user.id,
            moduleId,
            score,
          }),
        })

        await updateModuleProgress(moduleId, "completed")
      } catch (error) {
        console.error("Failed to complete module:", error)
      }
    },
    [state.user, updateModuleProgress, apiCall],
  )

  // Exercise Submissions
  const saveExerciseSubmission = useCallback(
    async (moduleId: number, code: string, isCorrect: boolean, executionTime?: number, errorMessage?: string) => {
      if (!state.user) return

      try {
        await apiCall("exercises/submit", {
          method: "POST",
          body: JSON.stringify({
            userId: state.user.id,
            moduleId,
            code,
            isCorrect,
            executionTime,
            errorMessage,
          }),
        })
      } catch (error) {
        console.error("Failed to save exercise submission:", error)
      }
    },
    [state.user, apiCall],
  )

  // Learning Sessions
  const startLearningSession = useCallback(
    async (moduleId: number) => {
      if (!state.user) return

      try {
        const result = await apiCall("sessions/start", {
          method: "POST",
          body: JSON.stringify({
            userId: state.user.id,
            moduleId,
          }),
        })

        setCurrentSession(result.sessionId)
        return result.sessionId
      } catch (error) {
        console.error("Failed to start learning session:", error)
      }
    },
    [state.user, apiCall],
  )

  const endLearningSession = useCallback(
    async (activitiesCompleted: number) => {
      if (!currentSession) return

      try {
        await apiCall("sessions/end", {
          method: "POST",
          body: JSON.stringify({
            sessionId: currentSession,
            activitiesCompleted,
          }),
        })

        setCurrentSession(null)
      } catch (error) {
        console.error("Failed to end learning session:", error)
      }
    },
    [currentSession, apiCall],
  )

  // Statistics
  const refreshUserStats = useCallback(async () => {
    if (!state.user) return

    try {
      const stats = await apiCall(`stats/user/${state.user.id}`)
      setState((prev) => ({ ...prev, stats }))
    } catch (error) {
      console.error("Failed to refresh stats:", error)
    }
  }, [state.user, apiCall])

  // Settings
  const updateUserSetting = useCallback(
    async (key: string, value: string) => {
      if (!state.user) return

      try {
        await apiCall("settings/update", {
          method: "POST",
          body: JSON.stringify({
            userId: state.user.id,
            key,
            value,
          }),
        })
      } catch (error) {
        console.error("Failed to update setting:", error)
      }
    },
    [state.user, apiCall],
  )

  // Helper Functions
  const isModuleCompleted = useCallback(
    (moduleId: number): boolean => {
      return state.progress.some((p) => p.module_id === moduleId && p.status === "completed")
    },
    [state.progress],
  )

  const isModuleUnlocked = useCallback(
    (moduleId: number): boolean => {
      if (moduleId === 1) return true
      return isModuleCompleted(moduleId - 1)
    },
    [isModuleCompleted],
  )

  const getModuleProgress = useCallback(
    (moduleId: number): ModuleProgress | null => {
      return state.progress.find((p) => p.module_id === moduleId) || null
    },
    [state.progress],
  )

  // Automatische Initialisierung beim Laden
  useEffect(() => {
    console.log("Component mounted, initializing...")
    initializeDefaultUser().catch(console.error)
  }, [initializeDefaultUser])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (currentSession) {
        endLearningSession(0)
      }
    }
  }, [currentSession, endLearningSession])

  return {
    // State
    user: state.user,
    progress: state.progress,
    stats: state.stats,
    isLoading: state.isLoading,
    error: state.error,
    currentSession,

    // Actions
    updateModuleProgress,
    completeModule,
    saveExerciseSubmission,
    startLearningSession,
    endLearningSession,
    refreshUserStats,
    updateUserSetting,

    // Helpers
    isModuleCompleted,
    isModuleUnlocked,
    getModuleProgress,
  }
}
