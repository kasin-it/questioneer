import { CheckIcon, XIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

export default function QuestionPage() {
    return (
        <main className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
            <div className="mx-auto max-w-3xl space-y-8">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Question:
                    </h1>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                        Explain the difference between synchronous and
                        asynchronous programming, and provide examples of each.
                    </p>
                </div>
                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold">Your Answer</h2>
                        <Textarea
                            className="mt-4 w-full rounded-md border border-gray-300 p-4 text-gray-900 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-gray-600 dark:focus:ring-gray-600"
                            placeholder="Enter your answer here..."
                        />
                    </div>
                    <Dialog defaultOpen>
                        <DialogTrigger asChild>
                            <Button
                                className="w-full sm:w-auto"
                                variant="outline"
                            >
                                View Feedback
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[550px]">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold">
                                    Tips and Hints
                                </DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-8">
                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold"></h3>
                                    <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                                        <li className="flex items-center">
                                            <CheckIcon className="mr-3 inline-block h-5 w-5 flex-shrink-0 text-green-500" />
                                            Lorem ipsum
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon className="mr-3 inline-block h-5 w-5 flex-shrink-0 text-green-500" />
                                            Lorem ipsum
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon className="mr-3 inline-block h-5 w-5 flex-shrink-0 text-green-500" />
                                            Leverage the Tailwind utility
                                            classes to create a visually
                                            appealing layout.
                                        </li>
                                        <li className="flex items-center">
                                            <CheckIcon className="mr-3 inline-block h-5 w-5 flex-shrink-0 text-green-500" />
                                            Ensure your design is accessible and
                                            follows best practices.
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex justify-center">
                                    <Badge
                                        className="px-8 py-4 text-2xl font-bold"
                                        variant="default"
                                    >
                                        Approved
                                    </Badge>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                    <div>
                        <h2 className="text-2xl font-bold">
                            Related Questions
                        </h2>
                        <ul className="mt-4 list-disc space-y-2 pl-6">
                            <li>
                                What are the advantages and disadvantages of
                                synchronous and asynchronous programming?
                            </li>
                            <li>
                                How do you handle errors and exceptions in
                                synchronous and asynchronous code?
                            </li>
                            <li>
                                What are some common use cases for synchronous
                                and asynchronous programming?
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Learn More</h2>
                        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-md border border-gray-300 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <h3 className="text-lg font-medium">
                                    Synchronous vs. Asynchronous JavaScript
                                </h3>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    A detailed explanation of synchronous and
                                    asynchronous JavaScript, including examples
                                    and best practices.
                                </p>
                                <a
                                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
                                    href="#"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Read article
                                    <svg
                                        className="ml-1 h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="rounded-md border border-gray-300 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <h3 className="text-lg font-medium">
                                    Asynchronous JavaScript: From Callback Hell
                                    to Async/Await
                                </h3>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    An in-depth look at the evolution of
                                    asynchronous JavaScript, from callbacks to
                                    Promises and async/await.
                                </p>
                                <a
                                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
                                    href="#"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Read article
                                    <svg
                                        className="ml-1 h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="rounded-md border border-gray-300 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <h3 className="text-lg font-medium">
                                    Understanding Asynchronous JavaScript
                                </h3>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    A comprehensive guide to understanding
                                    asynchronous JavaScript, including event
                                    loops, callbacks, Promises, and async/await.
                                </p>
                                <a
                                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
                                    href="#"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Read article
                                    <svg
                                        className="ml-1 h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
