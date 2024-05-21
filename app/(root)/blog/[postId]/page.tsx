import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function PostPage() {
    return (
        <main className="w-full">
            <section className="bg-gray-100 py-12 dark:bg-gray-800 md:py-16 lg:py-20">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-3xl space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                                Taxing Laughter: The Joke Tax Chronicles
                            </h1>
                            <div className="flex flex-col items-start space-y-2 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    By John Doe
                                </p>
                                <span className="hidden h-4 w-px bg-gray-300 dark:bg-gray-600 sm:block" />
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    May 10, 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-[3fr_1fr]">
                    <article className="prose prose-gray dark:prose-invert mx-auto flex flex-col gap-6">
                        <p>
                            Once upon a time, in a far-off land, there was a
                            very lazy king who spent all day lounging on his
                            throne. One day, his advisors came to him with a
                            problem: the kingdom was running out of money.
                        </p>
                        <p>
                            Jokester began sneaking into the castle in the
                            middle of the night and leaving jokes all over the
                            place: under the king&apos;s pillow, in his soup,
                            even in the royal toilet. The king was furious, but
                            he couldn&apos;t seem to stop Jokester.
                        </p>
                        <p>
                            And then, one day, the people of the kingdom
                            discovered that the jokes left by Jokester were so
                            funny that they couldn&apos;t help but laugh. And
                            once they started laughing, they couldn&apos;t stop.
                        </p>
                        <figure>
                            <Image
                                alt="Cover image"
                                className="aspect-video w-full overflow-hidden rounded-lg object-cover"
                                height={340}
                                src="/hero_image.webp"
                                width={1250}
                            />
                            <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Image caption goes here
                            </figcaption>
                        </figure>
                        <p>
                            The king thought long and hard, and finally came up
                            with
                            <a href="#">a brilliant plan</a>: he would tax the
                            jokes in the kingdom.
                        </p>
                        <blockquote className="my-4 border-s-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
                            “After all,” he said, “everyone enjoys a good joke,
                            so it&apos;s only fair that they should pay for the
                            privilege.”
                        </blockquote>
                        <h3>The Joke Tax</h3>
                        <p>
                            The king&apos;s subjects were not amused. They
                            grumbled and complained, but the king was firm:
                        </p>
                        <ul className="max-w-md list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400">
                            <li>1st level of puns: 5 gold coins</li>
                            <li>2nd level of jokes: 10 gold coins</li>
                            <li>3rd level of one-liners : 20 gold coins</li>
                        </ul>
                        <p>
                            As a result, people stopped telling jokes, and the
                            kingdom fell into a gloom. But there was one person
                            who refused to let the king&apos;s foolishness get
                            him down: a court jester named Jokester.
                        </p>
                    </article>
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Related Posts</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Link className="grid gap-2" href="#">
                                    <h4 className="text-lg font-medium">
                                        The Rise and Fall of the Joke Tax
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Learn about the history of the Joke Tax
                                        and how it impacted the kingdom.
                                    </p>
                                </Link>
                                <Link className="grid gap-2" href="#">
                                    <h4 className="text-lg font-medium">
                                        Jokester&apos;s Revenge: A Tale of
                                        Laughter and Liberation
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Read about how Jokester fought back
                                        against the Joke Tax and brought joy
                                        back to the kingdom.
                                    </p>
                                </Link>
                                <Link className="grid gap-2" href="#">
                                    <h4 className="text-lg font-medium">
                                        The Economics of Laughter: Exploring the
                                        Joke Tax
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Dive into the financial implications of
                                        the Joke Tax and how it affected the
                                        kingdom&apos;s economy.
                                    </p>
                                </Link>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Comments</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <div className="flex items-center space-x-3">
                                            <Image
                                                alt="Avatar"
                                                className="h-10 w-10 rounded-full"
                                                height={40}
                                                src="/hero_image.webp"
                                                style={{
                                                    aspectRatio: "40/40",
                                                    objectFit: "cover",
                                                }}
                                                width={40}
                                            />
                                            <div>
                                                <p className="font-medium">
                                                    Jane Doe
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    May 11, 2024
                                                </p>
                                            </div>
                                        </div>
                                        <p>
                                            This is such a hilarious and
                                            insightful story! I love how the
                                            king tried to tax the jokes, but
                                            Jokester found a way to fight back.
                                            Can&apos;t wait to read more about
                                            the kingdom&apos;s adventures.
                                        </p>
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center space-x-3">
                                            <Image
                                                alt="Avatar"
                                                className="h-10 w-10 rounded-full"
                                                height={40}
                                                src="/hero_image.webp"
                                                style={{
                                                    aspectRatio: "40/40",
                                                    objectFit: "cover",
                                                }}
                                                width={40}
                                            />
                                            <div>
                                                <p className="font-medium">
                                                    John Smith
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    May 12, 2024
                                                </p>
                                            </div>
                                        </div>
                                        <p>
                                            The Joke Tax is such a clever
                                            concept! I can see how it would have
                                            a huge impact on the kingdom&apos;s
                                            culture and economy. I&apos;m really
                                            interested to learn more about how
                                            the people responded to it.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-t pt-4 dark:border-gray-700">
                                    <form className="grid gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                placeholder="Enter your email"
                                                type="email"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="comment">
                                                Comment
                                            </Label>
                                            <Textarea
                                                id="comment"
                                                placeholder="Enter your comment"
                                                rows={4}
                                            />
                                        </div>
                                        <Button type="submit">
                                            Submit Comment
                                        </Button>
                                    </form>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    )
}
