"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, XCircle, Play, Eye, EyeOff } from "lucide-react"

interface CodePlaygroundProps {
  initialCode: string
  expectedOutput: string
  solution: string
  onComplete: () => void
  isCompleted: boolean
}

export function CodePlayground({
  initialCode,
  expectedOutput,
  solution,
  onComplete,
  isCompleted,
}: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState("")
  const [isCorrect, setIsCorrect] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [feedback, setFeedback] = useState("")

  const runCode = () => {
    try {
      // Simple code execution simulation
      // In a real implementation, you'd use a more sophisticated code runner
      const result = evaluateCode(code)
      setOutput(result)

      const correct = result.trim() === expectedOutput.trim()
      setIsCorrect(correct)

      if (correct) {
        setFeedback("Perfekt! Deine Lösung ist korrekt.")
        onComplete()
      } else {
        setFeedback("Noch nicht ganz richtig. Versuche es nochmal!")
      }
    } catch (error) {
      setOutput(`Fehler: ${error}`)
      setIsCorrect(false)
      setFeedback("Es gab einen Fehler in deinem Code. Überprüfe die Syntax.")
    }
  }

  const evaluateCode = (code: string): string => {
    // Simple evaluation for demo purposes
    // This would be replaced with a proper React code runner
    if (code.includes("Hello World")) {
      return "Hello World"
    }
    if (code.includes("useState")) {
      return "Counter: 0"
    }
    return "Ausgabe wird hier angezeigt..."
  }

  const resetCode = () => {
    setCode(initialCode)
    setOutput("")
    setIsCorrect(false)
    setFeedback("")
  }

  const useSolution = () => {
    setCode(solution)
    setShowSolution(false)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Code Editor */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              Code Editor
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setShowSolution(!showSolution)}>
                  {showSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {showSolution ? "Lösung verstecken" : "Lösung anzeigen"}
                </Button>
                <Button variant="outline" size="sm" onClick={resetCode}>
                  Zurücksetzen
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="font-mono text-sm min-h-[200px] resize-none"
              placeholder="Schreibe deinen Code hier..."
            />
            {showSolution && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Musterlösung:</h4>
                <pre className="text-sm bg-white p-3 rounded border overflow-x-auto">
                  <code>{solution}</code>
                </pre>
                <Button variant="outline" size="sm" onClick={useSolution} className="mt-2">
                  Lösung verwenden
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Output Preview */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Live Vorschau</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-4 rounded-lg min-h-[200px] border">
              <div className="text-sm text-gray-600 mb-2">Ausgabe:</div>
              <div className="font-mono text-sm">
                {output || 'Klicke auf "Code ausführen" um die Ausgabe zu sehen...'}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <Button onClick={runCode} className="flex items-center gap-2">
          <Play className="w-4 h-4" />
          Code ausführen
        </Button>

        {feedback && (
          <Alert className={`max-w-md ${isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <CheckCircle className="w-4 h-4 text-green-600" />
              ) : (
                <XCircle className="w-4 h-4 text-red-600" />
              )}
              <AlertDescription className={isCorrect ? "text-green-800" : "text-red-800"}>{feedback}</AlertDescription>
            </div>
          </Alert>
        )}
      </div>

      {/* Expected Output */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Erwartete Ausgabe:</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-green-50 p-3 rounded border font-mono text-sm">{expectedOutput}</div>
        </CardContent>
      </Card>
    </div>
  )
}
