"use client"

import { QuestionTag } from "@prisma/client"
import {
    FilterIcon,
    ListOrderedIcon,
    SearchIcon,
    SortAsc,
    SortDesc,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
    DifficultyType,
    OrderByType,
    useFilterQuestions,
} from "@/hooks/use-filter-questions"
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

interface QuestionsFiltersProps {
    initialTags: QuestionTag[]
}

function QuestionsFilters({ initialTags }: QuestionsFiltersProps) {
    const {
        orderBy,
        difficulty,
        queryValue,
        query,
        tag,
        sortDirection,
        setOrderBy,
        setDifficulty,
        setQueryValue,
        setQuery,
        setTag,
        toogleSortDirection,
    } = useFilterQuestions()

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

    const handleTagChange = (value: string) => {
        if (value == tag) {
            setTag("")
        } else {
            setTag(value)
        }
    }

    const handleSortDirectionChange = () => {
        toogleSortDirection()
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setQuery(queryValue)
        }
    }

    return (
        <>
            <div className="grid gap-0">
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
                            <Button
                                className="shrink-0 capitalize"
                                variant="outline"
                            >
                                <FilterIcon className="mr-2 h-4 w-4" />
                                {difficulty != "" ? difficulty : "filter"}
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
                    <Button
                        size={"icon"}
                        variant={"outline"}
                        className="p-2"
                        onClick={handleSortDirectionChange}
                    >
                        {sortDirection ? (
                            <SortAsc className="size-5" />
                        ) : (
                            <SortDesc className="size-5" />
                        )}
                    </Button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {initialTags.map((tagItem) => (
                        <Badge
                            className={cn(
                                "cursor-pointer hover:bg-gray-100/50 dark:hover:bg-gray-800/50",
                                tag == tagItem.name
                                    ? "bg-gray-800 text-white hover:bg-gray-600/50 hover:text-black"
                                    : null
                            )}
                            variant="secondary"
                            key={tagItem.id}
                            onClick={() => handleTagChange(tagItem.name)}
                        >
                            {tagItem.name}
                        </Badge>
                    ))}
                </div>
            </div>

            {query ? <p>Searching for: {query}</p> : null}
        </>
    )
}
export default QuestionsFilters
