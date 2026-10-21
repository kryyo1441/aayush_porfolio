import { profile } from "@/lib/content"
import { Prompt } from "@/components/prompt"

const rows = [
  { label: "email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "github", value: `github.com/${profile.handle}`, href: profile.github },
  { label: "linkedin", value: "in/aayushnair", href: profile.linkedin },
]

export function Contact() {
  return (
    <section id="contact" className="pt-12 pb-20">
      <Prompt command="echo $CONTACT">
        <p className="text-sm leading-relaxed text-foreground/90">
          I&apos;m looking for full stack roles. Email is the quickest way to reach me.
        </p>
        <ul className="mt-6 space-y-2 text-[13px]">
          {rows.map((row) => (
            <li key={row.label} className="flex gap-4">
              <span className="w-20 shrink-0 text-dim">{row.label}</span>
              <a
                href={row.href}
                target={row.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="break-all underline-offset-4 hover:text-term hover:underline"
              >
                {row.value}
              </a>
            </li>
          ))}
        </ul>
      </Prompt>

      <Prompt command="" idle className="mt-14" />
    </section>
  )
}
