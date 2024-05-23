"use client"

import QuestionCard from "@/views/Dashboard/question-card"
import {
    ConnectionToQuestions,
    Question,
    type QuestionTag,
} from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Loader2 } from "lucide-react"

import { useFilterQuestions } from "@/hooks/use-filter-questions"

import QuestionsFilters from "./questions-filters"
import QuestionsPagination from "./questions-pagination"

interface JoinedQuestion extends Question {
    connectionToQuestions?: ConnectionToQuestions[]
    questionTag?: QuestionTag
}

interface QuestionsSearchProps {
    initialTags: QuestionTag[]
}

const API_URL = "/api/questions"

function QuestionsSearch({ initialTags }: QuestionsSearchProps) {
    const { orderBy, difficulty, query, page, tag, sortDirection, setHasMore } =
        useFilterQuestions()

    const fetchQuestions = async ({
        query,
        orderBy,
        difficulty,
        page,
        sortDirection,
        tag,
    }: {
        query: string
        orderBy: string
        difficulty: string
        page: number
        sortDirection: boolean
        tag: string
    }) => {
        const respone = await axios.get(API_URL, {
            params: {
                query,
                orderBy,
                difficulty,
                page,
                tag,
                sortDirection,
            },
        })
        setHasMore(respone.data.hasMore)
        return (respone.data.questions as JoinedQuestion[]) || []
    }

    const { data, isError, isFetching } = useQuery({
        queryKey: [
            "questionsData",
            query,
            orderBy,
            difficulty,
            page,
            tag,
            sortDirection,
        ],
        queryFn: () =>
            fetchQuestions({
                query,
                orderBy,
                difficulty,
                page,
                tag,
                sortDirection,
            }),
        initialData: [],
    })

    return (
        <>
            <QuestionsFilters initialTags={initialTags} />
            {isFetching ? (
                <div className="flex h-full min-h-52 w-full items-center justify-center">
                    <Loader2 className="animate-spin" />
                </div>
            ) : null}
            {isError ? (
                <div>
                    <p>Something went wrong</p>
                </div>
            ) : null}
            {data.length === 0 && !isFetching ? (
                <div>
                    <p>Nothing has been found.</p>
                </div>
            ) : null}
            {!isFetching && !isError ? (
                <>
                    <div className="grid gap-6">
                        {data.map((question) => {
                            let isCompleted = false
                            let isFavourite = false
                            question.connectionToQuestions?.map(
                                (connection) => {
                                    if (isCompleted && isFavourite) {
                                        return
                                    }
                                    if (connection.status == "completed") {
                                        isCompleted = true
                                    }
                                    if (connection.status == "favorite") {
                                        isFavourite = true
                                    }
                                }
                            )
                            console.log(question)
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
                    <QuestionsPagination />
                </>
            ) : null}
        </>
    )
}
export default QuestionsSearch
