import "./globals.css"

export const metadata = {
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0%25' stop-color='%236366f1'/%3E%3Cstop offset='100%25' stop-color='%2306b6d4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' rx='12' fill='url(%23g)'/%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M20 44h6V20h-6zM38 44h6V20h-6z'/%3E%3Crect x='28' y='20' width='6' height='24' rx='3'/%3E%3C/g%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
}
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Providers from "@/components/Providers"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Providers>
          <Navbar />
          <main className="min-h-screen px-6 py-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
