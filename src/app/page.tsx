import { SiteHeader } from "@/components/site-header"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Intro } from "@/components/sections/intro"
import { Stack } from "@/components/sections/stack"
import { Work } from "@/components/sections/work"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-2xl px-5">
        <Intro />
        <Work />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-2xl justify-between px-5 py-6 text-xs text-dim">
          <span>© 2026 aayush nair</span>
          <span>next.js · shadcn/ui</span>
        </div>
      </footer>
    </>
  )
}
