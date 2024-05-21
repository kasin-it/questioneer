import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
    return (
        <>
            <section className="w-full border-b pt-12 md:pt-24 lg:pt-32">
                <div className="container space-y-10 xl:space-y-16">
                    <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
                        <div>
                            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                The complete platform for building the Web
                            </h1>
                        </div>
                        <div className="flex flex-col items-start space-y-4">
                            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                                Posted on August 24, 2023 by John Doe
                            </p>
                            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                                Once upon a time, in a far-off land, there was a
                                very lazy king who spent all day lounging on his
                                throne. One day, his advisors came to him with a
                                problem: the kingdom was running out of money.
                            </p>
                        </div>
                    </div>
                    <Image
                        alt="Hero"
                        className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
                        height="300"
                        src="/hero_image.webp"
                        width="1270"
                    />
                </div>
            </section>
            <div className="container grid grid-cols-1 gap-8 py-12 md:grid-cols-[1fr_300px] md:gap-16">
                <div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <Image
                                alt="Blog post"
                                className="aspect-[3/2] overflow-hidden rounded-lg object-cover"
                                height="400"
                                src="/hero_image.webp"
                                width="600"
                            />
                            <div className="space-y-2 pt-4">
                                <h3 className="text-lg font-semibold">
                                    Taxing Laughter: The Joke Tax Chronicles
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Once upon a time, in a far-off land, there
                                    was a very lazy king who spent all day
                                    lounging on his throne. One day, his
                                    advisors came to him with a problem: the
                                    kingdom was running out of money.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                alt="Blog post"
                                className="aspect-[3/2] overflow-hidden rounded-lg object-cover"
                                height="400"
                                src="/hero_image.webp"
                                width="600"
                            />
                            <div className="space-y-2 pt-4">
                                <h3 className="text-lg font-semibold">
                                    The Rise of the Jokester: A Comedic
                                    Rebellion
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Jokester began sneaking into the castle in
                                    the middle of the night and leaving jokes
                                    all over the place: under the king&apos;s
                                    pillow, in his soup, even in the royal
                                    toilet. The king was furious, but he
                                    couldn&apos;t seem to stop Jokester.
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                alt="Blog post"
                                className="aspect-[3/2] overflow-hidden rounded-lg object-cover"
                                height="400"
                                src="/hero_image.webp"
                                width="600"
                            />
                            <div className="space-y-2 pt-4">
                                <h3 className="text-lg font-semibold">
                                    The Laughter Revolution: How Jokes Saved the
                                    Kingdom
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    And then, one day, the people of the kingdom
                                    discovered that the jokes left by Jokester
                                    were so funny that they couldn&apos;t help
                                    but laugh. And once they started laughing,
                                    they couldn&apos;t stop.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="rounded-lg border bg-gray-100 p-6 dark:bg-gray-800">
                        <h3 className="text-lg font-semibold">Search</h3>
                        <form className="mt-4 flex space-x-2">
                            <Input
                                className="flex-1"
                                placeholder="Search blog posts..."
                                type="search"
                            />
                            <Button type="submit">Search</Button>
                        </form>
                    </div>
                    <div className="rounded-lg border bg-gray-100 p-6 dark:bg-gray-800">
                        <h3 className="text-lg font-semibold">Categories</h3>
                        <nav className="mt-4 space-y-2">
                            <Link
                                className="block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                Humor
                            </Link>
                            <Link
                                className="block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                Politics
                            </Link>
                            <Link
                                className="block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                Technology
                            </Link>
                            <Link
                                className="block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                Travel
                            </Link>
                            <Link
                                className="block text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                Lifestyle
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
