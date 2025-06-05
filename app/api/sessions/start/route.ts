import { type NextRequest, NextResponse } from "next/server"
import { SimpleStorageService } from "@/lib/simple-storage"

export async function POST(request: NextRequest) {
  try {
    const { userId, moduleId } = await request.json()

    if (!userId || !moduleId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const sessionId = SimpleStorageService.startLearningSession(userId, moduleId)

    return NextResponse.json({
      sessionId,
      message: "Learning session started",
    })
  } catch (error) {
    console.error("Session start error:", error)
    return NextResponse.json({ error: "Failed to start session" }, { status: 500 })
  }
}
