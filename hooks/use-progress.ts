"use client"

import { useState, useEffect } from "react"

interface Progress {
  completedModules: number[]
  currentModule: number
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({
    completedModules: [],
    currentModule: 1,
  })

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem("react-learning-progress")
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }
  }, [])

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("react-learning-progress", JSON.stringify(progress))
  }, [progress])

  const updateProgress = (moduleId: number) => {
    setProgress((prev) => ({
      ...prev,
      completedModules: prev.completedModules.includes(moduleId)
        ? prev.completedModules
        : [...prev.completedModules, moduleId],
      currentModule: Math.max(prev.currentModule, moduleId + 1),
    }))
  }

  const isModuleUnlocked = (moduleId: number): boolean => {
    // Module 1 is always unlocked
    if (moduleId === 1) return true

    // Other modules are unlocked if the previous module is completed
    return progress.completedModules.includes(moduleId - 1)
  }

  const resetProgress = () => {
    setProgress({
      completedModules: [],
      currentModule: 1,
    })
    localStorage.removeItem("react-learning-progress")
  }

  return {
    progress,
    updateProgress,
    isModuleUnlocked,
    resetProgress,
  }
}
