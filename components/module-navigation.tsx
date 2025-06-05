"use client"

import type { Module } from "@/types/module"
import { CheckCircle, Lock, PlayCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModuleNavigationProps {
  modules: Module[]
  currentModuleId: number
  completedModules: number[]
  onModuleSelect: (moduleId: number) => void
  isModuleUnlocked: (moduleId: number) => boolean
}

export function ModuleNavigation({
  modules,
  currentModuleId,
  completedModules,
  onModuleSelect,
  isModuleUnlocked,
}: ModuleNavigationProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Kursmodule</h2>
      <div className="space-y-2">
        {modules.map((module) => {
          const isCompleted = completedModules.includes(module.id)
          const isUnlocked = isModuleUnlocked(module.id)
          const isCurrent = module.id === currentModuleId

          return (
            <button
              key={module.id}
              onClick={() => onModuleSelect(module.id)}
              disabled={!isUnlocked}
              className={cn(
                "w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3",
                isCurrent && "bg-blue-100 border-2 border-blue-300",
                isCompleted && !isCurrent && "bg-green-50 border border-green-200",
                !isUnlocked && "opacity-50 cursor-not-allowed",
                isUnlocked && !isCurrent && !isCompleted && "hover:bg-gray-50 border border-gray-200",
              )}
            >
              <div className="flex-shrink-0">
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : !isUnlocked ? (
                  <Lock className="w-5 h-5 text-gray-400" />
                ) : (
                  <PlayCircle className="w-5 h-5 text-blue-600" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">
                  Modul {module.id}: {module.title}
                </div>
                <div className="text-xs text-gray-500 mt-1">{module.estimatedTime}</div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
