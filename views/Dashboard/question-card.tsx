import Link from "next/link"
import { CheckCircleIcon, Star } from "lucide-react"

import { cn, dateFormatter } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
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
    createdAt: Date
    isFavorite?: boolean
    isCompleted?: boolean
}

const getBadgeColor = (value: string) => {
    if (value == "medium") {
        return "bg-yellow-100 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-400"
    } else if (value == "hard") {
        return "bg-red-100 text-red-900 dark:bg-red-900/20 dark:text-red-400"
    }

    return "bg-green-100 text-green-900 dark:bg-green-900/20 dark:text-green-400"
}

function QuestionCard({
    id,
    name,
    desc = "",
    difficulty,
    createdAt,
    isFavorite = false,
    isCompleted = false,
}: QuestionCardProps) {
    return (
        <Card className="relative">
            <CardHeader className="transition">
                <CardTitle>
                    <Link href={"/dashboard/" + id}>{name}</Link>
                </CardTitle>
                <CardDescription>{desc}</CardDescription>
            </CardHeader>
            <CardContent className="transition">
                <div className="flex items-center gap-2">
                    <Badge
                        className={getBadgeColor(difficulty)}
                        variant="outline"
                    >
                        {difficulty}
                    </Badge>{" "}
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        • {dateFormatter.format(new Date(createdAt))}
                    </p>
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
