import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs/server"
import {
    CheckIcon,
    PercentIcon,
    RulerIcon,
    SettingsIcon,
    SignalIcon,
    Star,
    TrophyIcon,
} from "lucide-react"

import prisma from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

async function MyProfilePage() {
    const user = await currentUser()

    if (!user) {
        redirect("/sign-in")
    }

    const connections = await prisma.connectionToQuestions.findMany({
        where: {
            userId: user.id,
        },
        include: {
            question: true,
        },
    })

    const completedQuestions = connections.filter((connection) => {
        return connection.status == "completed"
    })
    const favoriteQuestions = connections.filter((connection) => {
        return connection.status == "favorite"
    })

    return (
        <main className="container mx-auto px-4 py-12 md:px-6 lg:py-16 xl:py-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 lg:p-8">
                    <div className="mb-6 flex items-center justify-between lg:mb-8">
                        <h2 className="text-2xl font-bold lg:text-3xl">
                            User Panel
                        </h2>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 lg:gap-8">
                        <Image
                            alt="User Avatar"
                            className="rounded-full"
                            height={100}
                            src={user.imageUrl}
                            style={{
                                aspectRatio: "100/100",
                                objectFit: "cover",
                            }}
                            width={100}
                        />
                        <div className="text-center">
                            <h3 className="text-xl font-bold lg:text-2xl">
                                {user.username}
                            </h3>
                        </div>
                        <div className="grid w-full grid-cols-2 gap-4 lg:gap-6">
                            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700 lg:p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-lg font-bold lg:text-xl">
                                            Questions Completed
                                        </h4>
                                        <p className="text-4xl font-bold lg:text-5xl">
                                            {completedQuestions.length}
                                        </p>
                                    </div>
                                    <TrophyIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                                </div>
                            </div>
                            <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700 lg:p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-lg font-bold lg:text-xl">
                                            Favorite Questions
                                        </h4>
                                        <p className="text-4xl font-bold lg:text-5xl">
                                            {favoriteQuestions.length}
                                        </p>
                                    </div>
                                    <Star className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 lg:p-8">
                    <Tabs defaultValue="completed">
                        <TabsList className="mb-6 lg:mb-8">
                            <TabsTrigger value="completed">
                                Completed Questions
                            </TabsTrigger>
                            <TabsTrigger value="favorite">
                                Favorite Questions
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent
                            value="completed"
                            className="grid max-h-[600px] gap-5 overflow-scroll"
                        >
                            {completedQuestions.map((connection) => (
                                <article
                                    className="space-y-4 lg:space-y-6"
                                    key={connection.connnectionId}
                                >
                                    <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-700 lg:p-6">
                                        <div>
                                            <Link
                                                href={
                                                    "/" + connection.question.id
                                                }
                                            >
                                                <h4 className="text-lg font-bold lg:text-xl">
                                                    {connection.question.name}
                                                </h4>
                                            </Link>
                                            <p className="text-base text-gray-500 dark:text-gray-400 lg:text-lg">
                                                {connection.question.desc}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </TabsContent>
                        <TabsContent
                            value="favorite"
                            className="grid max-h-[600px] gap-5 overflow-scroll"
                        >
                            {favoriteQuestions.map((connection) => (
                                <article
                                    className="space-y-4 lg:space-y-6"
                                    key={connection.connnectionId}
                                >
                                    <div className="flex items-center justify-between rounded-lg bg-gray-100 p-4 dark:bg-gray-700 lg:p-6">
                                        <div>
                                            <Link
                                                href={
                                                    "/" + connection.question.id
                                                }
                                            >
                                                <h4 className="text-lg font-bold lg:text-xl">
                                                    {connection.question.name}
                                                </h4>
                                            </Link>
                                            <p className="text-base text-gray-500 dark:text-gray-400 lg:text-lg">
                                                {connection.question.desc}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </main>
    )
}
export default MyProfilePage
