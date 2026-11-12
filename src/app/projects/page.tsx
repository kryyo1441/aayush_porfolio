import type { Metadata } from "next"

import { hackathonProjects, projects } from "@/lib/content"
import { ProjectRow } from "@/components/project-row"
import { Prompt } from "@/components/prompt"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = { title: "projects · Aayush Nair" }

const groups = [
  { command: "ls ~/projects/personal", list: projects },
  { command: "ls ~/projects/hackathons", list: hackathonProjects },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-16 pt-16 pb-20 sm:pt-24">
      {groups.map(({ command, list }) => (
        <Prompt key={command} command={command} path="~/projects">
          <div className="space-y-12">
            {list.map((project, i) => (
              <Reveal key={project.slug}>
                <ProjectRow project={project} index={i} />
              </Reveal>
            ))}
          </div>
        </Prompt>
      ))}
    </div>
  )
}
