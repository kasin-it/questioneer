"use server"

import { redirect } from "next/navigation"
import { auth } from "@clerk/nextjs/server"
import axios from "axios"

import prisma from "@/lib/db"
import { replicate } from "@/lib/replicate"

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

export async function getFeedback(questionId: number, answer: string) {
    const { userId } = auth()

    if (!userId) {
        redirect("/sign-in")
        return {
            approved: false,
            feedback: "",
            error: "User not authenticated",
        }
    }

    if (!answer || Number.isNaN(questionId)) {
        console.error("Invalid input: questionId or answer")
        return {
            approved: false,
            feedback: "",
            error: "Invalid questionId or answer",
        }
    }

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

    const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/text/question_answer",
        headers: {
            authorization: "Bearer " + process.env.EDENAPI,
            "Content-Type": "application/json",
        },
        data: JSON.stringify({
            providers: "openai",
            texts: [
                `Tell me if I answered the question "${question.name}" correctly. At the beginning of the answer, put [APPROVED] or [DISAPPROVED] and then provide me short feedback about my answer. Do not describe my answer itself, only what I can improve or what's wrong with my answer. Answer: "${answer}"`,
            ],
            question: "Is the answer correct?",
            temperature: 0,
            examples_context: "We are in an interview",
            examples: [
                [
                    "Tell me if I answered the question whats event loop? correctly. At the beginning of the answer, put [APPROVED] or [DISAPPROVED] and then provide me short feedback about my answer. Do not describe my answer itself, only what I can improve or what's wrong with my answer. Answer: its a function that converts inteeger to float",
                    "[DISAPPROVED] Event loop is a part of javascript runtime enviroment that listens to call stack, and task queue to manage asynchronous operations",
                ],
            ],
            fallback_providers: "tenstorrent",
        }),
    }

    try {
        const response = await axios.post(options.url, options.data, {
            headers: options.headers,
        })
        let feedbackValue = response.data.openai.answers[0] as string
        console.log(feedbackValue)
        const isApproved = !feedbackValue.includes("[DISAPPROVED]")
        feedbackValue = feedbackValue
            .replace("[APPROVED]", "")
            .replace("[DISAPPROVED]", "")
            .trim()

        if (isApproved && question.connectionToQuestions.length == 0) {
            await prisma.connectionToQuestions.create({
                data: {
                    userId: userId,
                    questionId: question.id,
                    status: "completed",
                },
            })
        }

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

// export async function getFeedback(questionId: number, answer: string) {
//     const { userId } = auth()

//     if (!userId) {
//         redirect("/sign-in")
//     }

//     if (!answer || Number.isNaN(questionId)) {
//         return {
//             approved: true,
//             feedback: "",
//             error: "Request is bad 1",
//         }
//     }

//     const question = await prisma.question.findFirst({
//         where: {
//             id: questionId,
//         },
//     })
//     if (!question) {
//         return {
//             approved: true,
//             feedback: "",
//             error: "Request is bad 2",
//         }
//     }

//     // Extract the answer from formData
//     // const answer = formData.get("answer")

//     // if (!answer) {
//     //     return {
//     //         approved: false,
//     //         feedback: null,
//     //         error: "Answer not provided in formData",
//     //     }
//     // }

//     // const stream = new ReadableStream({
//     //     async start(controller) {
//     //         try {
//     //             for await (const event of replicate.stream(
//     //                 "meta/meta-llama-3-70b-instruct",
//     //                 {
//     //                     input: {
//     //                         prompt: `Tell me if I answered the question "What's Event Loop in JavaScript?" correctly. At the beginning of the answer, put [APPROVED] or [DISAPPROVED] and then provide me short feedback about my answer. Do not describe my answer itself, only on what I can improve or what's wrong with my answer. Answear: "Event loop is an element in javascript runtime enviroment that handles what task to perform ad when"`,
//     //                     },
//     //                 }
//     //             )) {
//     //                 controller.enqueue(new TextEncoder().encode(`${event}\n`))
//     //             }
//     //             controller.close()
//     //         } catch (error) {
//     //             controller.error(error)
//     //         }
//     //     },
//     // })

//     // let feedbackText = ""

//     // const reader = stream.getReader()
//     // while (true) {
//     //     const { done, value } = await reader.read()
//     //     if (done) break
//     //     feedbackText += new TextDecoder().decode(value)
//     // }

//     // const approved = feedbackText.startsWith("[APPROVED]")

//     // console.log(feedbackText)

//     // const options = {
//     //     method: "POST",
//     //     url: "https://api.edenai.run/v2/text/question_answer",
//     //     headers: {
//     //         authorization:
//     //             "Bearer
//     //     },
//     //     data: {
//     //         texts: [
//     //             "Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17.",
//     //         ],
//     //         temperature: 0.8,
//     //         examples: [
//     //             [
//     //                 "What is human life expectancy in the United States?",
//     //                 "78 years.",
//     //             ],
//     //         ],
//     //         providers: "openai",
//     //         question: "What is a competitor of Linux?",
//     //         examples_context: "In 2017, U.S. life expectancy was 78.6 years.",
//     //         fallback_providers: "",
//     //     },
//     // }

//     // const data = await axios.get(options: options)

//     const options = {
//         method: "POST",
//         url: "https://api.edenai.run/v2/text/question_answer",
//         headers: {
//             authorization:
//                 "Bearer
//             "Content-Type": "application/json",
//         },
//         data: JSON.stringify({
//             providers: "openai",
//             texts: [
//                 `Tell me if I answered the question ${question.name} correctly. At the beginning of the answer, put [APPROVED] or [DISAPPROVED] and then provide me short feedback about my answer. Do not describe my answer itself, only on what I can improve or what's wrong with my answer. Answear: ${answear}`,
//             ],
//             question: "Is the answer correct?",
//             temperature: 0,
//             examples_context: "We are on interview",
//             examples: [
//                 [
//                     "What is human life expectancy in the United States?",
//                     "78 years.",
//                 ],
//             ],
//             fallback_providers: "tenstorrent",
//         }),
//     }

//     try {
//         const response = await axios.post(options.url, options.data, {
//             headers: options.headers,
//         })
//         let feedbackValue = response.data.openai.answers[0] as string
//         const isApproved = feedbackValue.startsWith("[APPROVED]")
//         feedbackValue = feedbackValue
//             .replace("[APPROVED]", "")
//             .replace("[DISAPPROVED]", "")
//         return {
//             approved: isApproved,
//             feedback: feedbackValue,
//             error: null,
//         }
//     } catch (error) {
//         return {
//             approved: true,
//             feedback: "",
//             error: error,
//         }
//     }
// }
