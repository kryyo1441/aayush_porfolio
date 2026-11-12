import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { allProjects, hackathons } from "@/lib/content"
import { Badge } from "@/components/ui/badge"
import { Prompt } from "@/components/prompt"
import { Shots } from "@/components/shots"

export function generateStaticParams() {
  return allProjects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params
  return { title: `${slug} · Aayush Nair` }
}

const link = "text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params
  const project = allProjects.find((p) => p.slug === slug)
  if (!project) notFound()

  const hackathon = hackathons.find((h) => h.slug === project.hackathon)

  return (
    <article className="pt-16 pb-20 sm:pt-24">
      <Prompt command={`cat ${project.slug}/README`} path="~/projects">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="flex items-center gap-3 text-2xl tracking-tight">
            {project.name}
            {project.tag && (
              <Badge variant="outline" className="h-4 rounded-sm px-1.5 text-[12px] text-muted-foreground">
                {project.tag}
              </Badge>
            )}
          </h1>
          <span className="text-[14px] text-dim">{project.year}</span>
        </div>

        <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/90">{project.summary}</p>

        {hackathon && (
          <p className="mt-3 text-[15px] text-muted-foreground">
            built at{" "}
            <Link href={`/hackathons/${hackathon.slug}`} className="text-term underline-offset-4 hover:underline">
              {hackathon.name}
            </Link>
            , placed {hackathon.result}
          </p>
        )}

        <p className="mt-8 text-[14px] text-dim"># how it works</p>
        <ul className="mt-3 max-w-2xl space-y-2 text-[15px] leading-relaxed text-muted-foreground">
          {project.details.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="text-dim select-none">-</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <p className="mt-3 text-[14px] text-dim">{project.stack.join(" · ")}</p>

        <p className="mt-10 text-[14px] text-dim"># output</p>
        <div className="mt-3">
          <Shots shots={project.shots} />
        </div>

        <p className="mt-10 flex gap-5 text-[15px]">
          <a href={project.repo} target="_blank" rel="noreferrer" className="text-term underline-offset-4 hover:underline">
            source ↗
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className={link}>
              live ↗
            </a>
          )}
          <Link href="/projects" className={link}>
            ← all projects
          </Link>
        </p>
      </Prompt>
    </article>
  )
}
