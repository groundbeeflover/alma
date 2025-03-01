import Navbar from "../components/Navbar";
import localFont from "next/font/local";

const myFont = localFont({
    src: '../../public/fonts/JandaHappyDay.woff2'
})

export default function Layout({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <main className={myFont.className}>
            <Navbar />
            {children}
        </main>
    )
}