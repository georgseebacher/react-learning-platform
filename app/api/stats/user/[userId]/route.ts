import { type NextRequest, NextResponse } from "next/server"
import { SimpleStorageService } from "@/lib/simple-storage"

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const userId = Number.parseInt(params.userId)

    if (!userId || isNaN(userId)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 })
    }

    const stats = SimpleStorageService.getUserStats(userId)

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Stats fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}
