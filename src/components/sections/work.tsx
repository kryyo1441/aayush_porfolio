import { otherWork, projects } from "@/lib/content"
import { ProjectEntry } from "@/components/project-entry"
import { Prompt } from "@/components/prompt"
import { Reveal } from "@/components/reveal"

export function Work() {
  return (
    <section id="work" className="py-12">
      <Prompt command="ls ~/projects">
        <div className="space-y-12">
          {projects.map((project, i) => (
            <Reveal key={project.slug}>
              <ProjectEntry project={project} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <p className="text-xs text-dim"># also worked on</p>
          <ul className="mt-3 space-y-3 text-[13px] leading-relaxed">
            {otherWork.map((item) => (
              <li key={item.name} className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
                <span>{item.name}</span>
                <span className="text-muted-foreground">{item.note}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Prompt>
    </section>
  )
}
