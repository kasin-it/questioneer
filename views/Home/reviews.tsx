function Reviews() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        What Our Users Say
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Hear from real users who have used our SaaS application
                        to successfully land their dream jobs.
                    </p>
                </div>
                <div className="divide-y rounded-lg border">
                    <div className="grid w-full grid-cols-1 items-stretch justify-center divide-x md:grid-cols-2 lg:grid-cols-3">
                        <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                            <div className="space-y-2 text-center">
                                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                                    “The mock interviews were incredibly helpful
                                    in preparing me for my real interview. I
                                    felt so much more confident going in.“
                                </blockquote>
                                <div>
                                    <div className="font-semibold">
                                        Emily Johnson
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Software Engineer, Acme Inc
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                            <div className="space-y-2 text-center">
                                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                                    “The resume builder tool helped me create a
                                    professional-looking resume that really
                                    showcased my skills.“
                                </blockquote>
                                <div>
                                    <div className="font-semibold">
                                        Michael Lee
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Product Manager, Acme Inc
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                            <div className="space-y-2 text-center">
                                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                                    “The interview preparation resources were
                                    invaluable. I felt so much more prepared and
                                    confident going into my interview.“
                                </blockquote>
                                <div>
                                    <div className="font-semibold">
                                        Sarah Chen
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Data Analyst, Acme Inc
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Reviews
