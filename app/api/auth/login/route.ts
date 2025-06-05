import { type NextRequest, NextResponse } from "next/server"
import { DatabaseService } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    const { username, email } = await request.json()

    if (!username || username.trim().length < 2) {
      return NextResponse.json({ error: "Username must be at least 2 characters long" }, { status: 400 })
    }

    // Create or get user
    const user = DatabaseService.createUser(username.trim(), email)

    // Get user progress
    const progress = DatabaseService.getModuleProgress(user.id)

    // Get user stats
    const stats = DatabaseService.getUserStats(user.id)

    // Update last activity
    DatabaseService.updateUserActivity(user.id)

    return NextResponse.json({
      user,
      progress,
      stats,
      message: "Login successful",
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
