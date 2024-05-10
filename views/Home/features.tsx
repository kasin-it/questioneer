import Image from "next/image"

function Features() {
    return (
        <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                            Key Features
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Prepare for Your Dream Job
                        </h2>
                        <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our SaaS application provides a comprehensive suite
                            of tools to help you ace your next job interview,
                            from mock interviews to resume building and more.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <Image
                        alt="Mock Interviews"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                        height="310"
                        src="/office.webp"
                        width="550"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Mock Interviews
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Practice your interview skills with
                                        realistic mock interviews.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Resume Building
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Create a professional-looking resume to
                                        showcase your skills.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">
                                        Interview Prep
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Access a library of interview
                                        preparation resources to boost your
                                        confidence.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Features
