import Link from "next/link"
import { SignIn } from "@clerk/nextjs"
import { ArrowLeft } from "lucide-react"

export default function Page() {
    return (
        <main className="flex flex-col items-center gap-5 py-24">
            <Link href={"/"} className="flex gap-2">
                <ArrowLeft /> Go back to home
            </Link>
            <SignIn path="/sign-in" />
        </main>
    )
}
