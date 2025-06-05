import { NextResponse } from "next/server"
import { SimpleStorageService } from "@/lib/simple-storage"

// Konstanter Default-User
const DEFAULT_USERNAME = "default_user"

export async function POST() {
  try {
    console.log("Initializing default user with simple storage...")

    // Erstelle oder hole den Default-User
    const user = SimpleStorageService.createUser(DEFAULT_USERNAME)
    console.log("User found/created:", user)

    // Hole den Fortschritt des Users
    const progress = SimpleStorageService.getModuleProgress(user.id)
    console.log("Progress loaded:", progress.length, "entries")

    // Hole die Statistiken des Users
    const stats = SimpleStorageService.getUserStats(user.id)
    console.log("Stats loaded:", stats)

    // Aktualisiere die letzte Aktivität
    SimpleStorageService.updateUserActivity(user.id)

    return NextResponse.json({
      user,
      progress,
      stats,
      message: "Default user initialized successfully with simple storage",
    })
  } catch (error) {
    console.error("Default user initialization error:", error)
    return NextResponse.json(
      {
        error: "Failed to initialize default user",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
