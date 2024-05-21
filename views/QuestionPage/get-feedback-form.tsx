"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { getFeedback } from "@/actions"
import { CircleCheckIcon, CircleXIcon, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface GetFeedbackFormProps {
    isAuthenticated: boolean
    questionId: number
}

function GetFeedbackForm({
    questionId,
    isAuthenticated,
}: GetFeedbackFormProps) {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isApproved, setIsApproved] = useState(true)
    const [feedback, setFeedback] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [answer, setAnswer] = useState("")

    const handleFormSubmit = async () => {
        if (!answer.trim()) {
            return // Do nothing if answer is empty
        }

        setIsLoading(true)

        try {
            const response = await getFeedback(questionId, answer)
            const { approved, error, feedback } = response

            if (error) {
                console.error(error)
                return
            }

            setIsApproved(approved)
            setFeedback(feedback || "")
            setIsModalOpen(true)
        } catch (error) {
            console.error("Submission failed:", error)
        } finally {
            setIsLoading(false)
        }
    }

    if (!isAuthenticated) {
        return (
            <div className="mt-8 flex flex-col gap-2">
                <Label
                    className="mb-2 block font-medium text-gray-700"
                    htmlFor="answer"
                >
                    Your Answer:
                </Label>
                <Textarea
                    className="min-h-24 w-full"
                    id="answer"
                    placeholder="Enter your answer here..."
                    rows={6}
                    onClick={() => router.push("/sign-in")}
                />
                <Button
                    onClick={() => router.push("/sign-in")}
                    disabled={isLoading}
                >
                    {isLoading && <Loader2 className="mr-2 animate-spin" />}{" "}
                    Check your answer
                </Button>
            </div>
        )
    }

    return (
        <>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>AI Feedback</DialogTitle>
                    </DialogHeader>
                    <div className="py-6 text-center">
                        <div className="flex items-center justify-center">
                            {isApproved ? (
                                <CircleCheckIcon className="size-12 text-green-500" />
                            ) : (
                                <CircleXIcon className="size-12 text-red-500" />
                            )}
                        </div>
                        <div className="mt-4">
                            <p className="text-lg font-medium">
                                {isApproved
                                    ? "Response Approved"
                                    : "Response Disapproved"}
                            </p>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                {isApproved
                                    ? "Congratulations! Your response meets our requirements!"
                                    : "Unfortunately, your response doesn&apos;t meet our requirements."}
                            </p>
                        </div>
                        {feedback && (
                            <div className="mt-6">
                                <p className="text-lg font-medium">
                                    How to Improve
                                </p>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    {feedback}
                                </p>
                            </div>
                        )}
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <div className="mt-8 flex flex-col gap-2">
                <Label
                    className="mb-2 block font-medium text-gray-700"
                    htmlFor="answer"
                >
                    Your Answer:
                </Label>
                <Textarea
                    className="min-h-24 w-full"
                    id="answer"
                    placeholder="Enter your answer here..."
                    rows={6}
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <Button onClick={handleFormSubmit} disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 animate-spin" />}{" "}
                    Check your answer
                </Button>
            </div>
        </>
    )
}

export default GetFeedbackForm
