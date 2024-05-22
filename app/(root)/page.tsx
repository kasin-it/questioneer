import QuestionsSearch from "@/views/Dashboard/questions-search"

import prisma from "@/lib/db"

export const dynamic = "force-dynamic"

export default async function DashboardPage() {
    const tags = await prisma.questionTag.findMany({})

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
                <QuestionsSearch initialTags={tags} />
            </div>
        </main>
    )
}
