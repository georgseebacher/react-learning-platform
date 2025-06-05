import { type NextRequest, NextResponse } from "next/server"
import { SimpleStorageService } from "@/lib/simple-storage"

export async function POST(request: NextRequest) {
  try {
    const { userId, moduleId, score } = await request.json()

    if (!userId || !moduleId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    SimpleStorageService.completeModule(userId, moduleId, score || 100)

    return NextResponse.json({
      success: true,
      message: "Module completed successfully",
    })
  } catch (error) {
    console.error("Module completion error:", error)
    return NextResponse.json({ error: "Failed to complete module" }, { status: 500 })
  }
}
