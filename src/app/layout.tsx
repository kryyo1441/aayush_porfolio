import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"

import { SiteHeader } from "@/components/site-header"

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
        <SiteHeader />
        <main className="mx-auto w-full max-w-4xl px-5">{children}</main>
        <footer className="border-t border-border/60">
          <div className="mx-auto flex max-w-4xl justify-between px-5 py-6 text-[14px] text-dim">
            <span>© 2026 aayush nair</span>
            <span>next.js · shadcn/ui</span>
          </div>
        </footer>
      </body>
    </html>
  )
}
