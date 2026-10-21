import type { Project } from "@/lib/content"
import { Badge } from "@/components/ui/badge"
import { OutputDialog } from "@/components/output-dialog"

type ProjectEntryProps = {
  project: Project
  index: number
}

export function ProjectEntry({ project, index }: ProjectEntryProps) {
  return (
    <article className="group border-l border-border pl-4 transition-colors hover:border-term/60">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="flex items-center gap-2 text-[15px]">
          <span className="text-dim">{String(index + 1).padStart(2, "0")}</span>
          <span className="transition-colors group-hover:text-term">{project.name}</span>
          {project.tag && (
            <Badge variant="outline" className="h-4 rounded-sm px-1.5 text-[10px] text-muted-foreground">
              {project.tag}
            </Badge>
          )}
        </h3>
        <span className="text-xs text-dim">{project.year}</span>
      </div>

      <p className="mt-2 text-sm">{project.summary}</p>

      <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-muted-foreground">
        {project.details.map((line) => (
          <li key={line} className="flex gap-2">
            <span className="text-dim select-none">-</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <p className="mt-3 text-xs text-dim">{project.stack.join(" · ")}</p>

      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[13px]">
        <OutputDialog name={project.name} shots={project.shots} />
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          source ↗
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            live ↗
          </a>
        )}
      </div>
    </article>
  )
}
