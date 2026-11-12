import Link from "next/link"

import { otherWork, projects } from "@/lib/content"
import { ProjectRow } from "@/components/project-row"
import { Prompt } from "@/components/prompt"
import { Reveal } from "@/components/reveal"

export function Work() {
  return (
    <section id="work" className="py-12">
      <Prompt command="ls ~/projects">
        <div className="space-y-12">
          {projects.map((project, i) => (
            <Reveal key={project.slug}>
              <ProjectRow project={project} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <p className="text-[14px] text-dim"># also worked on</p>
          <ul className="mt-3 space-y-3 text-[15px] leading-relaxed">
            {otherWork.map((item) => (
              <li key={item.name} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
                <span>{item.name}</span>
                <span className="text-muted-foreground">{item.note}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-10 flex gap-5 text-[15px]">
          <Link href="/projects" className="text-term underline-offset-4 hover:underline">
            all projects →
          </Link>
          <Link href="/hackathons" className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
            hackathons →
          </Link>
        </p>
      </Prompt>
    </section>
  )
}
