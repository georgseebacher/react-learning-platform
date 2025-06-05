"use client"

import { useState } from "react"
import type { Module } from "@/types/module"
import type { ModuleProgress } from "@/lib/database"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodePlayground } from "@/components/code-playground"
import { BookOpen, Code, CheckCircle } from "lucide-react"

interface ModuleContentProps {
  module: Module
  isCompleted: boolean
  onComplete: () => void
  onExerciseSubmit?: (code: string, isCorrect: boolean, executionTime?: number, errorMessage?: string) => void
  moduleProgress?: ModuleProgress | null
}

export function ModuleContent({
  module,
  isCompleted,
  onComplete,
  onExerciseSubmit,
  moduleProgress,
}: ModuleContentProps) {
  const [exerciseCompleted, setExerciseCompleted] = useState(isCompleted)

  const handleExerciseComplete = (code: string, isCorrect: boolean, executionTime?: number, errorMessage?: string) => {
    setExerciseCompleted(true)

    // Rufe die Callback-Funktion auf, falls vorhanden
    if (onExerciseSubmit) {
      onExerciseSubmit(code, isCorrect, executionTime, errorMessage)
    }
  }

  const handleModuleComplete = () => {
    if (exerciseCompleted) {
      onComplete()
    }
  }

  return (
    <div className="space-y-6">
      {/* Module Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Modul {module.id}
            </span>
            <span>{module.title}</span>
            {isCompleted && <CheckCircle className="w-6 h-6 text-green-600" />}
          </CardTitle>
          <p className="text-gray-600">{module.description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>⏱️ {module.estimatedTime}</span>
            <span>📚 {module.difficulty}</span>
            {moduleProgress && (
              <>
                <span>🔄 {moduleProgress.attempts} Versuche</span>
                <span>⭐ {moduleProgress.best_score}% beste Bewertung</span>
              </>
            )}
          </div>
        </CardHeader>
      </Card>

      {/* Module Content Tabs */}
      <Tabs defaultValue="theory" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="theory" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Theorie
          </TabsTrigger>
          <TabsTrigger value="practice" className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            Praxis
          </TabsTrigger>
        </TabsList>

        <TabsContent value="theory" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: module.content.theory }} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practice" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Praktische Übung</h3>
                <p className="text-gray-600 mb-4">{module.content.exercise.description}</p>
              </div>

              <CodePlayground
                initialCode={module.content.exercise.starterCode}
                expectedOutput={module.content.exercise.expectedOutput}
                solution={module.content.exercise.solution}
                onComplete={handleExerciseComplete}
                isCompleted={exerciseCompleted}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Module Completion */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Modul abschließen</h3>
              <p className="text-gray-600">
                {exerciseCompleted
                  ? "Großartig! Du hast die Übung erfolgreich abgeschlossen."
                  : "Schließe zuerst die praktische Übung ab."}
              </p>
            </div>
            <Button
              onClick={handleModuleComplete}
              disabled={!exerciseCompleted || isCompleted}
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              {isCompleted ? "Abgeschlossen" : "Modul abschließen"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
