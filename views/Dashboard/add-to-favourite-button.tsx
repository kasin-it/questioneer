"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toggleFavorite } from "@/actions"
import { useAuth } from "@clerk/nextjs"
import { Star } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface AddToFavouriteButtonProps {
    isFavorite: boolean
    questionId: number
}

function AddToFavouriteButton({
    isFavorite,
    questionId,
}: AddToFavouriteButtonProps) {
    const [isFavoriteValue, setIsFavoriteValue] = useState(isFavorite)
    const { userId } = useAuth()
    const router = useRouter()

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    {userId ? (
                        <Star
                            onClick={async () => {
                                setIsFavoriteValue((prev) => !prev)

                                try {
                                    const res = await toggleFavorite(
                                        questionId,
                                        isFavoriteValue // we want the previous value
                                    )

                                    if (res == false) {
                                        setIsFavoriteValue((prev) => !prev)
                                    }
                                } catch (error) {
                                    console.log(error)
                                    setIsFavoriteValue((prev) => !prev)
                                }
                            }}
                            strokeWidth={"1px"}
                            className={cn(
                                "block size-8 hover:cursor-pointer",
                                isFavoriteValue
                                    ? "fill-yellow-400 text-yellow-400"
                                    : null
                            )}
                        />
                    ) : (
                        <Star
                            strokeWidth={"1px"}
                            onClick={() => router.push("/sign-in")}
                            className={"block size-8 hover:cursor-pointer"}
                        />
                    )}
                </TooltipTrigger>
                <TooltipContent>
                    {!isFavoriteValue ? (
                        <p>Click to make this question favorite</p>
                    ) : (
                        <p>Click to remove this question from favorites</p>
                    )}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
export default AddToFavouriteButton
