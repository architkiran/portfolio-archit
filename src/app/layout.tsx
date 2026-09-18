import type { Metadata } from "next"
import { MotionConfig } from "framer-motion"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SmoothScroll from "@/components/motion/SmoothScroll"
import { IntroProvider } from "@/components/motion/IntroProvider"

export const metadata: Metadata = {
  title: "Archit Kiran Kumar — Data & Business Analytics",
  description:
    "MS Computer Science at Boston University. Data analytics, fintech, and turning complex data into clear decisions.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // suppressHydrationWarning: browser extensions inject attributes on <html> before hydration
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MotionConfig reducedMotion="user">
          <IntroProvider>
            <SmoothScroll>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </SmoothScroll>
          </IntroProvider>
        </MotionConfig>
      </body>
    </html>
  )
}
