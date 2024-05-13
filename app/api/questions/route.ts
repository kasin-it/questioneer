import { $Enums } from "@prisma/client"

import prisma from "@/lib/db"

export const dynamic = "force-dynamic"

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const query = searchParams.get("query")
        const pageStr = searchParams.get("page")
        const sortBy = searchParams.get("sort_by")
        const rawDifficulty = searchParams.get("difficulty")
        const pageValue = parseInt(pageStr || "1", 10)

        const queryParams: {
            query?: string
            page?: number
            sortBy?: "name" | "difficulty" | "created_at"
            difficulty?: $Enums.Difficulty
        } = {}

        if (query) queryParams.query = query

        if (!Number.isNaN(pageValue) && pageValue > 0) {
            queryParams.page = pageValue
        }

        if (sortBy && ["name", "difficulty", "created_at"].includes(sortBy)) {
            queryParams.sortBy = sortBy as "name" | "difficulty" | "created_at"
        }

        if (
            rawDifficulty &&
            (rawDifficulty === "Easy" ||
                rawDifficulty === "Medium" ||
                rawDifficulty === "Hard")
        ) {
            queryParams.difficulty = rawDifficulty as $Enums.Difficulty
        }

        const questions = await prisma.question.findMany({
            take: 30,
            skip: (queryParams.page || 1 - 1) * 30,
            where: {
                difficulty: queryParams.difficulty,
                name: {
                    contains: queryParams.query,
                },
            },
            orderBy: {
                [queryParams.sortBy || "created_at"]: "desc",
            },
        })
    } catch (error) {
        console.error("[Error]", error)
    }
}
