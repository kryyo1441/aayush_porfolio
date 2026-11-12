import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { allProjects, hackathons } from "@/lib/content"
import { Prompt } from "@/components/prompt"
import { Shots } from "@/components/shots"

export function generateStaticParams() {
  return hackathons.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps<"/hackathons/[slug]">): Promise<Metadata> {
  const { slug } = await params
  return { title: `${slug} · Aayush Nair` }
}

export default async function HackathonPage({ params }: PageProps<"/hackathons/[slug]">) {
  const { slug } = await params
  const h = hackathons.find((x) => x.slug === slug)
  if (!h) notFound()

  const project = allProjects.find((p) => p.slug === h.project)
  const rows = [
    ["result", h.result],
    ["date", h.date],
    ["venue", h.venue],
    ["duration", h.duration],
    ["team", h.team],
  ]

  const sections: [string, string[]][] = [
    ["about", h.about],
    ["what we built", h.built],
    ["experience", h.experience],
  ]

  return (
    <article className="pt-16 pb-20 sm:pt-24">
      <Prompt command={`cat ${h.slug}/README`} path="~/hackathons">
        <h1 className="text-2xl tracking-tight">{h.name}</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/90">{h.summary}</p>

        <dl className="mt-6 space-y-1 text-[15px]">
          {rows.map(([label, value]) => (
            <div key={label} className="flex gap-4">
              <dt className="w-20 shrink-0 text-dim">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        {sections.map(([title, paragraphs]) => (
          <div key={title}>
            <p className="mt-10 text-[14px] text-dim"># {title}</p>
            <div className="mt-3 max-w-2xl space-y-3 text-[15px] leading-relaxed text-muted-foreground">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        ))}

        <p className="mt-10 text-[14px] text-dim"># photos</p>
        <div className="mt-3">
          <Shots shots={h.shots} />
        </div>

        {project && (
          <>
            <p className="mt-10 text-[14px] text-dim"># built here</p>
            <Link
              href={`/projects/${project.slug}`}
              className="group mt-3 block border-l border-border pl-4 transition-colors hover:border-term/60"
            >
              <h3 className="text-[17px] transition-colors group-hover:text-term">{project.name} →</h3>
              <p className="mt-2 text-base">{project.summary}</p>
            </Link>
          </>
        )}

        <p className="mt-10 text-[15px]">
          <Link href="/hackathons" className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
            ← all hackathons
          </Link>
        </p>
      </Prompt>
    </article>
  )
}
