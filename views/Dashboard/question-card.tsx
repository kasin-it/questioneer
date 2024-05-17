import Link from "next/link"
import { type QuestionTag } from "@prisma/client"
import { CheckCircleIcon, Star } from "lucide-react"

import { dateFormatter } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import DifficultyBadge from "@/components/ui/difficulty-badge"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import AddToFavouriteButton from "./add-to-favourite-button"

interface QuestionCardProps {
    id: number
    name: string
    desc: string | null
    difficulty: "medium" | "easy" | "hard"
    questionTag?: QuestionTag
    createdAt: Date
    isFavorite?: boolean
    isCompleted?: boolean
}

function QuestionCard({
    id,
    name,
    desc = "",
    difficulty,
    questionTag,
    createdAt,
    isFavorite = false,
    isCompleted = false,
}: QuestionCardProps) {
    return (
        <Card className="relative">
            <CardHeader className="transition">
                <CardTitle>
                    <Link href={"/" + id}>{name}</Link>
                </CardTitle>
                <CardDescription>{desc}</CardDescription>
            </CardHeader>
            <CardContent className="transition">
                <div className="flex items-center gap-2 text-sm capitalize text-gray-500 dark:text-gray-400">
                    <DifficultyBadge difficulty={difficulty}>
                        {difficulty}
                    </DifficultyBadge>
                    {questionTag ? (
                        <>
                            <p>•</p>
                            <p className="font-semibold">{questionTag.name}</p>
                        </>
                    ) : null}
                    <p>•</p>
                    <p>{dateFormatter.format(new Date(createdAt))}</p>
                </div>
            </CardContent>
            <div className="absolute bottom-3 right-3 flex items-center gap-4">
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
                <AddToFavouriteButton isFavorite={isFavorite} questionId={id} />
            </div>
        </Card>
    )
}
export default QuestionCard
