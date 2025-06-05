import { type NextRequest, NextResponse } from "next/server"
import { SimpleStorageService } from "@/lib/simple-storage"

export async function POST(request: NextRequest) {
  try {
    const { sessionId, activitiesCompleted } = await request.json()

    if (!sessionId) {
      return NextResponse.json({ error: "Missing session ID" }, { status: 400 })
    }

    SimpleStorageService.endLearningSession(sessionId, activitiesCompleted || 0)

    return NextResponse.json({
      success: true,
      message: "Learning session ended",
    })
  } catch (error) {
    console.error("Session end error:", error)
    return NextResponse.json({ error: "Failed to end session" }, { status: 500 })
  }
}
