import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "../sharedComponents/NavBar"
import { ThemeProvider } from "@/components/theme-provider"
import GlobuleProvider from "@/context/useGlobule"
import Footer from "@/sharedComponents/footer"
// import SigninPopover from "@/sharedComponents/signin-popover"
import dynamic from "next/dynamic"

const SigninPopover = dynamic(
  () => import("@/sharedComponents/signin-popover"),
  { ssr: false }
)

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobuleProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SigninPopover />
            <NavBar />
            {children}
            <Footer />
          </ThemeProvider>
        </GlobuleProvider>
      </body>
    </html>
  )
}
