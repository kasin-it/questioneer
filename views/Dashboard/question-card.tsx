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

interface QuestionCardProps {
    id: number
    name: string
    desc: string | null
    difficulty: "Medium" | "Easy" | "Hard"
    createdAt: Date
    isFavorite?: boolean
    isCompleted?: boolean
}

const getBadgeColor = (value: string) => {
    if (value == "Medium") {
        return "bg-yellow-100 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-400"
    } else if (value == "Hard") {
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
        <Card className="group relative">
            <CardHeader className="transition group-hover:blur-sm">
                <CardTitle>{name}</CardTitle>
                <CardDescription>{desc}</CardDescription>
            </CardHeader>
            <CardContent className="transition group-hover:blur-sm">
                <div className="flex items-center gap-2">
                    <Badge
                        className={getBadgeColor(difficulty)}
                        variant="outline"
                    >
                        {difficulty}
                    </Badge>{" "}
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        • {dateFormatter.format(createdAt)}
                    </p>
                </div>
            </CardContent>
            <div className="absolute right-5 top-5 hidden  group-hover:block">
                {isCompleted ? <CheckCircleIcon /> : null}
                <Star
                    className={cn(
                        "size-8 hover:cursor-pointer",
                        isFavorite ? "fill-yellow-200" : null
                    )}
                />
            </div>
        </Card>
    )
}
export default QuestionCard
