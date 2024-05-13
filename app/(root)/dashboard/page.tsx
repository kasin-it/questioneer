import QuestionCard from "@/views/Dashboard/question-card"
import { auth } from "@clerk/nextjs/server"
import { FilterIcon, ListOrderedIcon, SearchIcon } from "lucide-react"

import prisma from "@/lib/db"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

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
                <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                        <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                        <Input
                            className="rounded-md border border-gray-200 bg-white py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:focus:ring-gray-50"
                            placeholder="Search questions..."
                            type="search"
                        />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="shrink-0" variant="outline">
                                <FilterIcon className="mr-2 h-4 w-4" />
                                Filter
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Difficulty</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem>
                                Easy
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                                Medium
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                                Hard
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="shrink-0" variant="outline">
                                <ListOrderedIcon className="mr-2 h-4 w-4" />
                                Sort by
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuRadioGroup value="difficulty">
                                <DropdownMenuRadioItem value="difficulty">
                                    Difficulty
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="title">
                                    Title
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="date">
                                    Date Added
                                </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="grid gap-6">
                    {questions.map((question) => {
                        let isCompleted = false
                        let isFavourite = false

                        question.ConnectionToQuestions.map((connection) => {
                            if (isCompleted && isFavourite) {
                                return
                            }
                            if (connection.userType == "completed") {
                                isCompleted = true
                            }
                            if (connection.userType == "favorite") {
                                isFavourite = true
                            }
                        })

                        console.log(isCompleted)
                        console.log(isFavourite)

                        return (
                            <QuestionCard
                                {...question}
                                key={question.id}
                                isCompleted={isCompleted}
                                isFavorite={isFavourite}
                            />
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
