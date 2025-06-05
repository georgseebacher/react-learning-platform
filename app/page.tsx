"use client"

import { useState } from "react"
import { ModuleNavigation } from "@/components/module-navigation"
import { ModuleContent } from "@/components/module-content"
import { ProgressBar } from "@/components/progress-bar"
import { UserDashboard } from "@/components/user-dashboard"
import { modules } from "@/data/modules"
import { useDatabaseProgress } from "@/hooks/use-database-progress"

export default function ReactLearningPlatform() {
  const [currentModuleId, setCurrentModuleId] = useState(1)
  const [showDashboard, setShowDashboard] = useState(false)

  const {
    user,
    progress,
    stats,
    isLoading,
    error,
    currentSession,
    updateModuleProgress,
    completeModule,
    saveExerciseSubmission,
    startLearningSession,
    endLearningSession,
    isModuleCompleted,
    isModuleUnlocked,
    getModuleProgress,
  } = useDatabaseProgress()

  const currentModule = modules.find((m) => m.id === currentModuleId)

  const handleModuleComplete = async () => {
    if (!user) return

    try {
      await completeModule(currentModuleId)

      // Auto-navigate to next module if available
      const nextModule = modules.find((m) => m.id === currentModuleId + 1)
      if (nextModule && isModuleUnlocked(nextModule.id)) {
        setCurrentModuleId(nextModule.id)
      }
    } catch (error) {
      console.error("Failed to complete module:", error)
    }
  }

  const handleModuleSelect = async (moduleId: number) => {
    if (isModuleUnlocked(moduleId)) {
      setCurrentModuleId(moduleId)

      // Start learning session
      if (user && !currentSession) {
        await startLearningSession(moduleId)
      }
    }
  }

  const handleExerciseSubmit = async (
    code: string,
    isCorrect: boolean,
    executionTime?: number,
    errorMessage?: string,
  ) => {
    if (!user) return

    await saveExerciseSubmission(currentModuleId, code, isCorrect, executionTime, errorMessage)

    if (isCorrect) {
      await updateModuleProgress(currentModuleId, "in_progress", 1)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Lade Lernfortschritt...</p>
        </div>
      </div>
    )
  }

  if (showDashboard) {
    return <UserDashboard user={user} stats={stats} progress={progress} onClose={() => setShowDashboard(false)} />
  }

  if (!currentModule) return null

  const completedModules = progress.filter((p) => p.status === "completed").length

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-bold text-gray-900">React Lernplattform</h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowDashboard(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Dashboard
              </button>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-6">Lerne React von Grund auf - Schritt für Schritt zum Experten</p>
          <ProgressBar completed={completedModules} total={modules.length} />
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <p>Fehler: {error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Module Navigation */}
          <div className="lg:col-span-1">
            <ModuleNavigation
              modules={modules}
              currentModuleId={currentModuleId}
              completedModules={progress.filter((p) => p.status === "completed").map((p) => p.module_id)}
              onModuleSelect={handleModuleSelect}
              isModuleUnlocked={isModuleUnlocked}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ModuleContent
              module={currentModule}
              isCompleted={isModuleCompleted(currentModuleId)}
              onComplete={handleModuleComplete}
              onExerciseSubmit={handleExerciseSubmit}
              moduleProgress={getModuleProgress(currentModuleId)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
