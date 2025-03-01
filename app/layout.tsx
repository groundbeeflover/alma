import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";


const myFont = localFont({
    src: '../public/fonts/JandaHappyDay.woff2'
})


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Yomama",
  description: "hey sweetheard, come get some o dis suga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={myFont.className}>
        <h1 className="text-4xl font-bold pb-4">Yomama</h1>
        {children}
      </body>
    </html>
  );
}
