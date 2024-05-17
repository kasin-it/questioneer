import { Badge } from "./badge"

const getBadgeColor = (value: string) => {
    if (value == "medium") {
        return "bg-yellow-100 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-400"
    } else if (value == "hard") {
        return "bg-red-100 text-red-900 dark:bg-red-900/20 dark:text-red-400"
    }

    return "bg-green-100 text-green-900 dark:bg-green-900/20 dark:text-green-400"
}

interface DifficultyBadgeProps {
    difficulty: "medium" | "hard" | "easy"
    children: React.ReactNode
}

function DifficultyBadge({ difficulty, children }: DifficultyBadgeProps) {
    return (
        <Badge className={getBadgeColor(difficulty)} variant="outline">
            {children}
        </Badge>
    )
}
export default DifficultyBadge
