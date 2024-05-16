import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
})

export const getBadgeColor = (value: string) => {
    if (value == "medium") {
        return "bg-yellow-100 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-400"
    } else if (value == "hard") {
        return "bg-red-100 text-red-900 dark:bg-red-900/20 dark:text-red-400"
    }

    return "bg-green-100 text-green-900 dark:bg-green-900/20 dark:text-green-400"
}
