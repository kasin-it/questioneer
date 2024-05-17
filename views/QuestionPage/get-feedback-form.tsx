"use client"

import { useActionState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { getFeedback } from "@/actions"
import { CircleXIcon } from "lucide-react"

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

const initialState = {
    approved: false,
    feedback: "",
}
function GetFeedbackForm({
    questionId,
    isAuthenticated,
}: GetFeedbackFormProps) {
    const router = useRouter()
    const [state, formAction] = useActionState(getFeedback, initialState)

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

                <Button onClick={() => router.push("/sign-in")}>
                    Check your answer
                </Button>
            </div>
        )
    }

    return (
        <>
            <Dialog open={state.feedback.length != 0}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>AI Response Feedback</DialogTitle>
                    </DialogHeader>
                    <div className="py-6">
                        <div className="flex items-center justify-center">
                            <CircleXIcon className="h-12 w-12 text-red-500" />
                        </div>
                        <div className="mt-4 text-center">
                            <p className="text-lg font-medium">
                                Response Disapproved
                            </p>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                The AI-generated response does not meet the
                                requirements and has been disapproved for use.
                            </p>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-lg font-medium">
                                How to Improve
                            </p>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                To improve the AI response, please ensure that
                                it follows the provided rules and guidelines
                                closely. Pay attention to the use of Tailwind
                                classes, component hierarchy, and overall design
                                consistency. Additionally, consider adding more
                                creative and unique elements to make the
                                response more visually appealing and engaging.
                            </p>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button">Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <form className="mt-8 flex flex-col gap-2" action={formAction}>
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
                />
                <input
                    type="hidden"
                    className="hidden"
                    value={questionId}
                    id="questionId"
                />
                <Button>Check your answer</Button>
            </form>
        </>
    )
}
export default GetFeedbackForm
