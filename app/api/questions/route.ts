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
        const orderBy = searchParams.get("orderBy")
        const rawDifficulty = searchParams.get("difficulty")
        const tag = searchParams.get("tag")
        const sortDirection = searchParams.get("sortDirection")
        const pageValue = parseInt(pageStr || "1")
        const { userId } = auth()

        const queryParams: {
            query?: string
            page?: number
            tag?: string
            orderBy?: "name" | "difficulty" | "createdAt"
            difficulty?: $Enums.Difficulty
            sortDirection?: "asc" | "desc"
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

        if (tag) {
            queryParams.tag = tag
        }

        if (sortDirection == "true") {
            queryParams.sortDirection = "asc"
        } else if (sortDirection == "false") {
            queryParams.sortDirection = "desc"
        }

        const questions = await prisma.question.findMany({
            take: parseInt(process.env.PAGINATION!),
            skip:
                ((queryParams.page || 1) - 1) *
                parseInt(process.env.PAGINATION!), // user should input page > 0, and for the first page there should value of 0
            where: {
                difficulty: queryParams.difficulty,
                name: {
                    contains: queryParams.query,
                },
                questionTag: {
                    name: tag || undefined,
                },
            },
            orderBy: {
                [queryParams.orderBy || "createdAt"]:
                    queryParams.sortDirection || "desc",
            },
            include: {
                connectionToQuestions: {
                    where: {
                        userId: userId || "0",
                    },
                },
                questionTag: true,
            },
        })

        console.log(questions[1])
        console.log(userId)

        const count = await prisma.question.count({
            take: parseInt(process.env.PAGINATION!),
            skip: (queryParams.page || 1) * parseInt(process.env.PAGINATION!), // counting items in the next page
            where: {
                difficulty: queryParams.difficulty,
                name: {
                    contains: queryParams.query,
                },
                questionTag: {
                    name: tag || undefined,
                },
            },
            orderBy: {
                [queryParams.orderBy || "createdAt"]: "desc",
            },
        })

        return NextResponse.json({ questions, hasMore: count > 0 })
    } catch (error) {
        console.error("[Error]", error)
        return new NextResponse("Bad request", { status: 300 })
    }
}
