import Navbar from "@/views/Home/navbar"

export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
