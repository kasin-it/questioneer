import Link from "next/link"
import { BriefcaseIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui/button"

function Navbar() {
    return (
        <header className=" sticky top-0 flex items-center border-b bg-background px-4 py-3 lg:px-6">
            <Link className="flex items-center justify-center" href="#">
                <BriefcaseIcon className="h-6 w-6" />
                <span className="sr-only">Interview Prep</span>
            </Link>
            <nav className="ml-auto flex gap-2">
                <Link
                    className={cn(buttonVariants({ variant: "default" }))}
                    href="#"
                >
                    Sign In
                </Link>
                <Link
                    className={cn(buttonVariants({ variant: "outline" }))}
                    href="#"
                >
                    Sign Up
                </Link>
            </nav>
        </header>
    )
}
export default Navbar
