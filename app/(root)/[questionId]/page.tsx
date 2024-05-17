import Link from "next/link"
import { notFound } from "next/navigation"
import AddToFavouriteButton from "@/views/Dashboard/add-to-favourite-button"
import GetFeedbackForm from "@/views/QuestionPage/get-feedback-form"
import { auth } from "@clerk/nextjs/server"
import { ArrowLeftIcon, CheckCircleIcon } from "lucide-react"

import prisma from "@/lib/db"
import { dateFormatter } from "@/lib/utils"
import DifficultyBadge from "@/components/ui/difficulty-badge"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export async function generateStaticParams() {
    const questions = await prisma.question.findMany()

    return questions.map((question) => ({
        slug: question.id,
    }))
}

export default async function QuestionPage({
    params,
}: {
    params: { questionId: string }
}) {
    const { userId } = auth()

    const questionId = parseInt(params.questionId)

    const question = await prisma.question.findFirst({
        where: {
            id: questionId,
        },
        include: {
            questionTag: true,
            connectionToQuestions: {
                where: {
                    userId: userId || undefined,
                },
            },
        },
    })

    if (!question) {
        notFound()
    }

    const isCompleted =
        question?.connectionToQuestions.find(
            (connection) => connection.status === "completed"
        ) !== undefined

    const isFavorite =
        question?.connectionToQuestions.find(
            (connection) => connection.status === "favorite"
        ) !== undefined

    return (
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 capitalize">
                    <DifficultyBadge difficulty={question.difficulty}>
                        {question.difficulty}
                    </DifficultyBadge>
                    <p>•</p>
                    <p className="font-semibold">{question.questionTag.name}</p>
                    <p>•</p>
                    <p className="text-foreground-muted">
                        {dateFormatter.format(new Date(question.createdAt))}
                    </p>
                </div>
                <Link
                    className="rounded-md bg-gray-200 px-3 py-2 text-gray-700 transition-colors hover:bg-gray-300"
                    href="/"
                >
                    <ArrowLeftIcon className="h-5 w-5" />
                    <span className="sr-only">Go Back</span>
                </Link>
            </div>
            <div className="items-top flex justify-between">
                <section>
                    <h1 className="mb-4 text-3xl font-bold">
                        {question?.name}
                    </h1>
                    <div className="mb-6 leading-relaxed text-gray-700">
                        <p>{question?.desc}</p>
                    </div>
                </section>
                <section className="flex items-center gap-2">
                    <AddToFavouriteButton
                        isFavorite={isFavorite}
                        questionId={questionId}
                    />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                {isCompleted ? (
                                    <CheckCircleIcon className="size-8 text-green-500" />
                                ) : null}
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>You have completed this question</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </section>
            </div>

            <GetFeedbackForm
                isAuthenticated={userId ? true : false}
                questionId={question.id}
            />
            <div className="mt-8">
                <h2 className="mb-4 text-2xl font-bold">Related Questions</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-md bg-gray-100 p-4">
                        <h3 className="mb-2 text-lg font-bold">
                            Depth-First Search (DFS)
                        </h3>
                        <p className="mb-4 text-gray-700">
                            Implement a Depth-First Search (DFS) algorithm to
                            traverse a graph.
                        </p>
                        <Link
                            className="rounded-md bg-blue-500 px-3 py-2 text-white transition-colors hover:bg-blue-600"
                            href="#"
                        >
                            View Question
                        </Link>
                    </div>
                    <div className="rounded-md bg-gray-100 p-4">
                        <h3 className="mb-2 text-lg font-bold">
                            Topological Sort
                        </h3>
                        <p className="mb-4 text-gray-700">
                            Implement a Topological Sort algorithm to sort the
                            nodes of a directed acyclic graph (DAG).
                        </p>
                        <Link
                            className="rounded-md bg-blue-500 px-3 py-2 text-white transition-colors hover:bg-blue-600"
                            href="#"
                        >
                            View Question
                        </Link>
                    </div>
                    <div className="rounded-md bg-gray-100 p-4">
                        <h3 className="mb-2 text-lg font-bold">
                            Dijkstra's Algorithm
                        </h3>
                        <p className="mb-4 text-gray-700">
                            Implement Dijkstra's algorithm to find the shortest
                            path between two nodes in a weighted graph.
                        </p>
                        <Link
                            className="rounded-md bg-blue-500 px-3 py-2 text-white transition-colors hover:bg-blue-600"
                            href="#"
                        >
                            View Question
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
