"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import axios from "axios"

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
    revalidatePath("/" + questionId)
    revalidatePath("/my-profile")

    return true
}

export async function getFeedback(questionId: number, answer: string) {
    const { userId } = auth()

    if (!userId) {
        redirect("/sign-in")
    }

    if (!answer || Number.isNaN(questionId)) {
        console.error("Invalid input: questionId or answer")
        return {
            approved: false,
            feedback: "",
            error: "Invalid questionId or answer",
        }
    }

    try {
        const question = await prisma.question.findFirst({
            where: { id: questionId },
            include: {
                connectionToQuestions: {
                    where: {
                        userId: userId,
                        status: "completed",
                    },
                },
            },
        })

        if (!question) {
            console.error("Question not found")
            return {
                approved: false,
                feedback: "",
                error: "Question not found",
            }
        }

        const input = `Please review my answer to the question "${question.name}" and tell me if I answered it correctly. Your response must start with [APPROVED] or [DISAPPROVED],dont add any interpuction to the tag, followed by short feedback on my answer. Do not describe my answer itself; only provide feedback on what I can improve or what&apos;s wrong with my answer. Answer: "${answer}"`

        const options = {
            url: "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
            data: {
                inputs: input,
                max_tokens: 100,
            },
            headers: {
                Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
            },
        }

        const response = await axios.post(options.url, options.data, {
            headers: options.headers,
        })

        console.log(response)


        let feedbackValue = response.data[0]?.generated_text ?? ""
        const isApproved = !feedbackValue
            .replace(input, "")
            .includes("DISAPPROVED")
        feedbackValue = feedbackValue
            .replace(input, "")
            .replace(/"([^"]*)"/g, "")
            .replace("[APPROVED]", "")
            .replace("[DISAPPROVED]", "")
            .replace("DISAPPROVED", "")
            .trim()

        if (isApproved && question.connectionToQuestions.length === 0) {
            await prisma.connectionToQuestions.create({
                data: {
                    userId: userId,
                    questionId: question.id,
                    status: "completed",
                },
            })
        }

        revalidatePath("/" + questionId)
        revalidatePath("/my-profile")

        return {
            approved: isApproved,
            feedback: feedbackValue,
            error: null,
        }
    } catch (error) {
        console.error("Error getting feedback:", error)
        return {
            approved: false,
            feedback: "",
            error: "Error getting feedback",
        }
    }
}
