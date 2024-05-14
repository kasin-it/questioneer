import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"
import { $Enums } from "@prisma/client"

import prisma from "@/lib/db"

export const dynamic = "force-dynamic"

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const query = searchParams.get("query")
        const pageStr = searchParams.get("page")
        const orderBy = searchParams.get("sortBy")
        const rawDifficulty = searchParams.get("difficulty")
        const pageValue = parseInt(pageStr || "1", 10)
        const { userId } = await auth()

        const queryParams: {
            query?: string
            page?: number
            orderBy?: "name" | "difficulty" | "createdAt"
            difficulty?: $Enums.Difficulty
        } = {}

        if (query) queryParams.query = query

        if (!Number.isNaN(pageValue) && pageValue > 0) {
            queryParams.page = pageValue
        }

        if (orderBy && ["name", "difficulty", "createdAt"].includes(orderBy)) {
            queryParams.orderBy = orderBy as "name" | "difficulty" | "createdAt"
        }

        if (
            rawDifficulty &&
            (rawDifficulty === "easy" ||
                rawDifficulty === "medium" ||
                rawDifficulty === "hard")
        ) {
            queryParams.difficulty = rawDifficulty as $Enums.Difficulty
        }

        const questions = await prisma.question.findMany({
            take: 30,
            skip: ((queryParams.page || 1) - 1) * 30, // user should input page > 0, and for the first page there should value of 0
            where: {
                difficulty: queryParams.difficulty,
                name: {
                    contains: queryParams.query,
                },
            },
            orderBy: {
                [queryParams.orderBy || "createdAt"]: "desc",
            },
            include: {
                ConnectionToQuestions: {
                    where: {
                        userId: userId || undefined,
                    },
                },
            },
        })

        return NextResponse.json(questions)
    } catch (error) {
        console.error("[Error]", error)
        return new NextResponse("Bad request", { status: 300 })
    }
}
