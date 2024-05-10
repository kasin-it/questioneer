import Image from "next/image"
import Link from "next/link"
import CTA from "@/views/Home/cta"
import Features from "@/views/Home/features"
import Hero from "@/views/Home/hero"
import Reviews from "@/views/Home/reviews"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Home() {
    return (
        <main className="flex-1">
            <Hero />
            <Features />
            <Reviews />
            <CTA />
        </main>
    )
}
export default Home
