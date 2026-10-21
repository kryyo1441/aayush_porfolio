import { profile } from "@/lib/content"
import { Prompt } from "@/components/prompt"

export function Intro() {
  return (
    <section id="top" className="pt-16 pb-10 sm:pt-24">
      <Prompt command="whoami" speed={110}>
        <h1 className="text-2xl tracking-tight sm:text-3xl">{profile.name}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {profile.role} <span className="text-dim">·</span> {profile.location.toLowerCase()}
        </p>

        <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground/90">
          <p>
            I&apos;m a third-year IT student at Pillai College of Engineering, Panvel. Most of what I
            build is Next.js on top of Postgres and Prisma, and I care about the boring parts: schemas,
            constraints, and code someone else can pick up.
          </p>
          <p>
            Lately I&apos;ve been deep in applied cryptography and Web3: zero-knowledge proofs, blind
            credentials, and anchoring data on-chain so nobody has to take the server&apos;s word for it.
            I came in through a diploma in AI &amp; ML, so the ML side isn&apos;t new to me either.
          </p>
          <p className="text-muted-foreground">
            8+ hackathons, 4 wins, including the BitGo track at ETHMumbai.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-1 text-[13px]">
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-term underline-offset-4 hover:underline">
            github ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
            linkedin ↗
          </a>
          <a href={`mailto:${profile.email}`} className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
            email
          </a>
        </div>
      </Prompt>
    </section>
  )
}
