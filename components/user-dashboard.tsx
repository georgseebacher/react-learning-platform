"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { User, UserStats, ModuleProgress } from "@/lib/database"
import { modules } from "@/data/modules"
import { Clock, Trophy, Target, BookOpen, ArrowLeft } from "lucide-react"

interface UserDashboardProps {
  user: User | null
  stats: UserStats | null
  progress: ModuleProgress[]
  onClose: () => void
}

export function UserDashboard({ user, stats, progress, onClose }: UserDashboardProps) {
  const completionPercentage = stats ? (stats.completed_modules / modules.length) * 100 : 0

  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${Math.round(minutes)} Min`
    const hours = Math.floor(minutes / 60)
    const mins = Math.round(minutes % 60)
    return `${hours}h ${mins}m`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Dein Lernfortschritt</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zum Lernen
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Module abgeschlossen</CardTitle>
              <Trophy className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.completed_modules || 0}</div>
              <p className="text-xs text-muted-foreground">von {modules.length} Modulen</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lernzeit gesamt</CardTitle>
              <Clock className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats?.total_time_spent ? formatTime(stats.total_time_spent) : "0 Min"}
              </div>
              <p className="text-xs text-muted-foreground">Aktive Lernzeit</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Durchschnittliche Bewertung</CardTitle>
              <Target className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.average_score ? Math.round(stats.average_score) : 0}%</div>
              <p className="text-xs text-muted-foreground">Übungsergebnisse</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Fortschritt</CardTitle>
              <BookOpen className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{Math.round(completionPercentage)}%</div>
              <Progress value={completionPercentage} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Module Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Modul-Fortschritt</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modules.map((module) => {
                  const moduleProgress = progress.find((p) => p.module_id === module.id)
                  const status = moduleProgress?.status || "not_started"
                  const attempts = moduleProgress?.attempts || 0

                  return (
                    <div key={module.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">
                          Modul {module.id}: {module.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {status === "completed" && "✅ Abgeschlossen"}
                          {status === "in_progress" && "🔄 In Bearbeitung"}
                          {status === "not_started" && "⏳ Nicht begonnen"}
                          {attempts > 0 && ` • ${attempts} Versuche`}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">{moduleProgress?.best_score || 0}%</div>
                        {moduleProgress?.time_spent && (
                          <div className="text-xs text-gray-500">{formatTime(moduleProgress.time_spent)}</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* User Info & Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Aktivität & Statistiken</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Recent Completions */}
              {stats?.last_completion && (
                <div>
                  <h4 className="font-medium mb-3">Letzte Erfolge</h4>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800">
                      🎉 Letztes Modul abgeschlossen am {formatDate(stats.last_completion)}
                    </p>
                  </div>
                </div>
              )}

              {/* Learning Streak */}
              <div>
                <h4 className="font-medium mb-3">Lernstatistiken</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{stats?.total_modules_started || 0}</div>
                    <div className="text-xs text-blue-600">Module begonnen</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">{Math.round(completionPercentage)}%</div>
                    <div className="text-xs text-purple-600">Kurs-Fortschritt</div>
                  </div>
                </div>
              </div>

              {/* System Info */}
              <div>
                <h4 className="font-medium mb-3">System-Information</h4>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Dein Fortschritt wird automatisch in einer lokalen SQLite-Datenbank gespeichert.
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    Datenbank-Pfad: <code className="bg-gray-100 px-1 rounded">/data/learning-progress.db</code>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
