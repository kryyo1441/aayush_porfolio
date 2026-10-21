import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"

import "./globals.css"

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Aayush Nair",
  description:
    "Full stack developer working with Next.js, Postgres and Prisma, currently building with zero-knowledge proofs and Web3.",
  openGraph: {
    title: "Aayush Nair",
    description: "Full stack developer. Next.js, Postgres, Prisma, and applied cryptography.",
    type: "website",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${mono.variable} antialiased`}>
      <body className="min-h-dvh">
        <noscript>
          <style>{`.reveal { opacity: 1; transform: none; } .prompt-rest { display: inline; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  )
}
