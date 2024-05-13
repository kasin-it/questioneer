import Link from "next/link"

import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
}

function Logo({ className }: LogoProps) {
    return (
        <Link href={"/"} className={cn("font-semibold", className)}>
            Questioneer
        </Link>
    )
}
export default Logo
