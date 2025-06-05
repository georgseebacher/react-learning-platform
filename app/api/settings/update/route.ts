import { type NextRequest, NextResponse } from "next/server"
import { SimpleStorageService } from "@/lib/simple-storage"

export async function POST(request: NextRequest) {
  try {
    const { userId, key, value } = await request.json()

    if (!userId || !key || value === undefined) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    SimpleStorageService.updateUserSetting(userId, key, value)

    return NextResponse.json({
      success: true,
      message: "Setting updated successfully",
    })
  } catch (error) {
    console.error("Settings update error:", error)
    return NextResponse.json({ error: "Failed to update setting" }, { status: 500 })
  }
}
