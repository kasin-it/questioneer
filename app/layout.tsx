import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"

import "./globals.css"

import ReactQueryProvider from "@/providers/react-query-provider"
import { ClerkProvider } from "@clerk/nextjs"

import Footer from "@/components/footer"

const open_sans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-open-sans",
})

export const metadata: Metadata = {
    title: "Questioneer",
    description:
        "Questioneer is an innovative app designed to elevate your interview preparation to the next level. Whether you're gearing up for a job interview, a college admission interview, or any other important meeting, Questioneer provides you with the tools and resources to shine with confidence.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ClerkProvider>
            <ReactQueryProvider>
                <html lang="en">
                    <body className={open_sans.className}>
                        {children}
                        <Footer />
                    </body>
                </html>
            </ReactQueryProvider>
        </ClerkProvider>
    )
}
