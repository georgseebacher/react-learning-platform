import { type NextRequest, NextResponse } from "next/server"
import { SimpleStorageService } from "@/lib/simple-storage"

export async function POST(request: NextRequest) {
  try {
    const { userId, moduleId, status, timeSpent } = await request.json()

    if (!userId || !moduleId || !status) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    SimpleStorageService.updateModuleProgress(userId, moduleId, status, timeSpent || 0)

    return NextResponse.json({
      success: true,
      message: "Progress updated successfully",
    })
  } catch (error) {
    console.error("Progress update error:", error)
    return NextResponse.json({ error: "Failed to update progress" }, { status: 500 })
  }
}
