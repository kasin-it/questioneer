import Link from "next/link"

function Footer() {
    return (
        <section className="border-t">
            <footer className="container flex w-full shrink-0 flex-col items-center gap-2 px-4 py-6 sm:flex-row md:px-6">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2024 Interview Prep. All rights reserved.
                </p>
                <nav className="flex gap-4 sm:ml-auto sm:gap-6">
                    <Link
                        className="text-xs underline-offset-4 hover:underline"
                        href="#"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className="text-xs underline-offset-4 hover:underline"
                        href="#"
                    >
                        Privacy
                    </Link>
                </nav>
            </footer>
        </section>
    )
}
export default Footer
