"use server"

import { auth } from "@clerk/nextjs/server"

import prisma from "@/lib/db"

export async function toggleFavorite(questionId: number, isFavorite: boolean) {
    const { userId } = auth()

    if (!questionId || !userId) {
        return false
    }

    if (isFavorite) {
        try {
            await prisma.connectionToQuestions.deleteMany({
                where: {
                    userId: userId,
                    questionId: questionId,
                    status: "favorite",
                },
            })
        } catch (error) {
            console.log(error)
            return false
        }
    } else {
        try {
            await prisma.connectionToQuestions.create({
                data: {
                    userId,
                    questionId,
                    status: "favorite",
                },
            })
        } catch (error) {
            console.log(error)
            return false
        }
    }

    return true
}

export async function getFeedback(prevState: any, formData: FormData) {
    const { userId } = auth()

    return {
        approved: false,
        feedback: "not good",
    }
}
