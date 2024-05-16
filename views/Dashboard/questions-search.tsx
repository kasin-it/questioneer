"use client"

import { useState } from "react"
import QuestionCard from "@/views/Dashboard/question-card"
import { ConnectionToQuestions, Question, QuestionTag } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { FilterIcon, ListOrderedIcon, Loader2, SearchIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface JoinedQuestion extends Question {
    ConnectionToQuestions?: ConnectionToQuestions[]
}

interface QuestionsSearchProps {
    initialTags: QuestionTag[]
}

const API_URL = "/api/questions"

type DifficultyType = "easy" | "medium" | "hard" | ""
type OrderByType = "difficulty" | "title" | "createdAt" | ""

function QuestionsSearch({ initialTags }: QuestionsSearchProps) {
    const [orderBy, setOrderBy] = useState<OrderByType>("")
    const [difficulty, setDifficulty] = useState<DifficultyType>("")
    const [queryValue, setQueryValue] = useState("") // this state controls input value
    const [query, setQuery] = useState("") // this state controls fetching
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(1)

    const fetchQuestions = async ({
        query,
        orderBy,
        difficulty,
        page,
    }: {
        query: string
        orderBy: string
        difficulty: string
        page: number
    }) => {
        const respone = await axios.get(API_URL, {
            params: {
                query,
                orderBy,
                difficulty,
                page,
            },
        })
        setHasMore(respone.data.hasMore)
        return (respone.data.questions as JoinedQuestion[]) || []
    }
    const handleOrderByChange = (value: OrderByType) => {
        if (value == orderBy) {
            setOrderBy("")
        } else {
            setOrderBy(value)
        }
    }

    const handleFilterChange = (value: DifficultyType) => {
        if (value == difficulty) {
            setDifficulty("")
        } else {
            setDifficulty(value)
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setQuery(queryValue)
        }
    }

    const { data, isError, isFetching } = useQuery({
        queryKey: ["questionsData", query, orderBy, difficulty, page],
        queryFn: () => fetchQuestions({ query, orderBy, difficulty, page }),
        initialData: [],
    })

    return (
        <>
            <div className="flex items-center gap-1">
                <div className="relative w-full">
                    <Input
                        placeholder="Search"
                        onKeyDown={handleKeyDown}
                        value={queryValue}
                        onChange={(e) => setQueryValue(e.target.value)}
                    />
                    <SearchIcon
                        className="absolute right-3 top-2 cursor-pointer"
                        strokeWidth={"1px"}
                        onClick={() => setQuery(queryValue)}
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
                        <DropdownMenuRadioGroup
                            value={difficulty}
                            onValueChange={(value) =>
                                handleFilterChange(value as DifficultyType)
                            }
                        >
                            <DropdownMenuRadioItem value="easy">
                                Easy
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="medium">
                                Medium
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="hard">
                                Hard
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="shrink-0" variant="outline">
                            <ListOrderedIcon className="mr-2 h-4 w-4" />
                            Order by
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuRadioGroup
                            value={orderBy}
                            onValueChange={(value) =>
                                handleOrderByChange(value as OrderByType)
                            }
                        >
                            <DropdownMenuRadioItem value="difficulty">
                                Difficulty
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="title">
                                Title
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="createdAt">
                                Date Added
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                <Badge
                    className="cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                    variant="secondary"
                >
                    Frontend
                </Badge>
                <Badge
                    className="cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                    variant="secondary"
                >
                    Backend
                </Badge>
                <Badge
                    className="cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                    variant="secondary"
                >
                    Fullstack
                </Badge>
                <Badge
                    className="cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                    variant="secondary"
                >
                    Database
                </Badge>
                <Badge
                    className="cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                    variant="secondary"
                >
                    DevOps
                </Badge>
                <Badge
                    className="cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                    variant="secondary"
                >
                    Mobile
                </Badge>
                <Badge
                    className="cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                    variant="secondary"
                >
                    QA
                </Badge>
                <Badge
                    className="cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                    variant="secondary"
                >
                    Project Management
                </Badge>
                <Badge
                    className="cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                    variant="secondary"
                >
                    UX/UI
                </Badge>
                <Badge
                    className="cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                    variant="secondary"
                >
                    Data Science
                </Badge>

                <Button
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    variant="ghost"
                >
                    See more
                </Button>
            </div>

            {query ? <p>Searching for: {query}</p> : null}
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
                            question.ConnectionToQuestions?.map(
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
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <Button
                                    variant={"ghost"}
                                    disabled={page < 2}
                                    onClick={() => setPage((prev) => prev - 1)}
                                >
                                    <PaginationPrevious href="#" />
                                </Button>
                            </PaginationItem>

                            <PaginationItem>
                                <PaginationLink href="#">{page}</PaginationLink>
                            </PaginationItem>

                            <PaginationItem>
                                <Button
                                    variant={"ghost"}
                                    disabled={!hasMore}
                                    onClick={() => setPage((prev) => prev + 1)}
                                >
                                    <PaginationNext href="#" />
                                </Button>
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </>
            ) : null}
        </>
    )
}
export default QuestionsSearch
