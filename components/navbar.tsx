import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"

import Logo from "./logo"
import { buttonVariants } from "./ui/button"

async function Navbar() {
    const { userId } = await auth()
    return (
        <header className="w-full border-b">
            <nav className="container flex w-full items-center justify-between py-5 text-xl">
                <Logo />
                {userId ? (
                    <UserButton />
                ) : (
                    <Link
                        href={"/sign-in"}
                        className={buttonVariants({ variant: "default" })}
                    >
                        Sign In
                    </Link>
                )}
            </nav>
        </header>
    )
}
export default Navbar
