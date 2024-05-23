import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"

import Logo from "./logo"
import { buttonVariants } from "./ui/button"

async function Navbar() {
    const { userId } = auth()
    return (
        <header className="w-full border-b">
            <nav className="container flex w-full items-center justify-between py-5 text-xl">
                <Logo />
                {userId ? (
                    <div className="flex items-center gap-5">
                        <Link href={"/my-profile"} className="">
                            My Profile
                        </Link>
                        <UserButton />
                    </div>
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
