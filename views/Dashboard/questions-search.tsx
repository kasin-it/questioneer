"use client"

import { useState } from "react"
import QuestionCard from "@/views/Dashboard/question-card"
import { ConnectionToQuestions, Question } from "@prisma/client"
import { FilterIcon, ListOrderedIcon, SearchIcon } from "lucide-react"

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

interface JoinedQuestion extends Question {
    ConnectionToQuestions?: ConnectionToQuestions[]
}

interface QuestionsSearchProps {
    initialQuestions: JoinedQuestion[]
}

function QuestionsSearch({ initialQuestions }: QuestionsSearchProps) {
    const [questions, setQuestions] = useState(initialQuestions)
    return (
        <>
            <div className="flex items-center gap-4">
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
                    question.ConnectionToQuestions?.map((connection) => {
                        if (isCompleted && isFavourite) {
                            return
                        }
                        if (connection.status == "completed") {
                            isCompleted = true
                        }
                        if (connection.status == "favorite") {
                            isFavourite = true
                        }
                    })

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
        </>
    )
}
export default QuestionsSearch
