import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

import { Skeleton } from "@/components/ui/skeleton"

function LoadingPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 capitalize">
                    <Skeleton className="h-6 w-24" />
                    <p>•</p>
                    <Skeleton className="h-6 w-24" />
                    <p>•</p>
                    <p className="text-foreground-muted">
                        <Skeleton className="h-6 w-24" />
                    </p>
                </div>
                <Link
                    className="rounded-md bg-gray-200 px-3 py-2 text-gray-700 transition-colors hover:bg-gray-300"
                    href="/"
                >
                    <ArrowLeftIcon className="h-5 w-5" />
                    <span className="sr-only">Go Back</span>
                </Link>
            </div>
            <div className="items-top flex justify-between">
                <section>
                    <h1 className="mb-4 text-3xl font-bold">
                        <Skeleton className="h-12 w-64" />
                    </h1>
                    <div className="mb-6 leading-relaxed text-gray-700">
                        <Skeleton className="h-6 w-24" />
                    </div>
                </section>
                <section className="flex items-center gap-2">
                    <Skeleton className="size-12" />
                    <Skeleton className="size-12" />
                </section>
            </div>

            <Skeleton className="h-64 w-full" />
        </div>
    )
}
export default LoadingPage
