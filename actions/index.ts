"use server"

import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs/server"

import prisma from "@/lib/db"

export async function toggleFavorite(questionId: number, isFavorite: boolean) {
    const { userId } = await auth()

    if (!questionId || !userId) {
        return new NextResponse("Error", { status: 400 })
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
            return new NextResponse("Error", { status: 500 })
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
            return new NextResponse("Error", { status: 500 })
        }
    }
}
