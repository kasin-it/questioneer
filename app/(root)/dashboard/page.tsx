import QuestionsSearch from "@/views/Dashboard/questions-search"
import { auth } from "@clerk/nextjs/server"

import prisma from "@/lib/db"

export default async function DashboardPage() {
    const { userId } = await auth()

    const questions = await prisma.question.findMany({
        include: {
            ConnectionToQuestions: {
                where: {
                    userId: userId || undefined,
                },
            },
        },
    })

    return (
        <main className="mx-auto w-full max-w-4xl px-4 py-12 md:px-6 md:py-16">
            <div className="flex flex-col gap-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        Interview Questions
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Prepare for your next interview with our curated list of
                        questions.
                    </p>
                </div>
                <QuestionsSearch initialQuestions={questions} />
            </div>
        </main>
    )
}
