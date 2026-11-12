import Link from "next/link"

import { hackathons, type Project } from "@/lib/content"
import { Badge } from "@/components/ui/badge"

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const hackathon = hackathons.find((h) => h.slug === project.hackathon)

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block border-l pl-4 transition-colors hover:border-term/60 ${hackathon ? "border-term/40" : "border-border"}`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="flex items-center gap-2 text-[17px]">
          <span className="text-dim">{String(index + 1).padStart(2, "0")}</span>
          <span className="transition-colors group-hover:text-term">{project.name}</span>
          {project.tag && (
            <Badge variant="outline" className="h-4 rounded-sm px-1.5 text-[12px] text-muted-foreground">
              {project.tag}
            </Badge>
          )}
        </h3>
        <span className="text-[14px] text-dim">{project.year}</span>
      </div>
      <p className="mt-2 text-base">{project.summary}</p>
      {hackathon && (
        <p className="mt-2 text-[14px] text-term">
          @ {hackathon.name} · {hackathon.result}
        </p>
      )}
      <p className="mt-2 text-[14px] text-dim">{project.stack.join(" · ")}</p>
    </Link>
  )
}
