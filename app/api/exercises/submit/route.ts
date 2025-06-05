import { type NextRequest, NextResponse } from "next/server"
import { SimpleStorageService } from "@/lib/simple-storage"

export async function POST(request: NextRequest) {
  try {
    const { userId, moduleId, code, isCorrect, executionTime, errorMessage } = await request.json()

    if (!userId || !moduleId || !code) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    SimpleStorageService.saveExerciseSubmission(userId, moduleId, code, isCorrect || false, executionTime, errorMessage)

    return NextResponse.json({
      success: true,
      message: "Exercise submission saved",
    })
  } catch (error) {
    console.error("Exercise submission error:", error)
    return NextResponse.json({ error: "Failed to save exercise submission" }, { status: 500 })
  }
}
