import { education, roles } from "@/lib/content"
import { Prompt } from "@/components/prompt"

export function Experience() {
  return (
    <section id="experience" className="py-12">
      <Prompt command="cat experience.log">
        <ul className="space-y-8">
          {roles.map((role) => (
            <li key={role.company} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <span className="text-xs leading-6 text-dim">{role.period}</span>
              <div>
                <p className="text-sm">
                  {role.title} <span className="text-dim">@</span> {role.company}
                  <span className="text-muted-foreground">, {role.place}</span>
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{role.note}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-xs text-dim"># education</p>
        <ul className="mt-3 space-y-3">
          {education.map((entry) => (
            <li key={entry.where} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <span className="text-xs leading-6 text-dim">{entry.period}</span>
              <p className="text-sm">
                {entry.what}
                <span className="block text-[13px] text-muted-foreground">{entry.where}</span>
              </p>
            </li>
          ))}
        </ul>
      </Prompt>
    </section>
  )
}
