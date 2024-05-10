import { FilterIcon, ListOrderedIcon, SearchIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
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

export default function Component() {
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
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                What is the difference between let and var in
                                JavaScript?
                            </CardTitle>
                            <CardDescription>
                                Explain the differences between the let and var
                                keywords in JavaScript, including their scope
                                and hoisting behavior.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <Badge
                                    className="bg-green-100 text-green-900 dark:bg-green-900/20 dark:text-green-400"
                                    variant="outline"
                                >
                                    Easy
                                </Badge>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Added on May 1, 2023
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Explain the event loop in JavaScript.
                            </CardTitle>
                            <CardDescription>
                                Describe how the event loop works in JavaScript,
                                including the concepts of the call stack, task
                                queue, and microtask queue.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <Badge
                                    className="bg-yellow-100 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-400"
                                    variant="outline"
                                >
                                    Medium
                                </Badge>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Added on April 15, 2023
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Implement a debounce function in JavaScript.
                            </CardTitle>
                            <CardDescription>
                                Write a function that implements the debounce
                                pattern to limit the rate at which a function is
                                called.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <Badge
                                    className="bg-red-100 text-red-900 dark:bg-red-900/20 dark:text-red-400"
                                    variant="outline"
                                >
                                    Hard
                                </Badge>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Added on March 20, 2023
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Explain the difference between synchronous and
                                asynchronous code in JavaScript.
                            </CardTitle>
                            <CardDescription>
                                Discuss the differences between synchronous and
                                asynchronous code execution in JavaScript, and
                                provide examples of each.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <Badge
                                    className="bg-yellow-100 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-400"
                                    variant="outline"
                                >
                                    Medium
                                </Badge>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Added on February 10, 2023
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Implement a simple Promise in JavaScript.
                            </CardTitle>
                            <CardDescription>
                                Write a function that returns a Promise and
                                demonstrates how to handle its resolution and
                                rejection.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2">
                                <Badge
                                    className="bg-green-100 text-green-900 dark:bg-green-900/20 dark:text-green-400"
                                    variant="outline"
                                >
                                    Easy
                                </Badge>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Added on January 5, 2023
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}
