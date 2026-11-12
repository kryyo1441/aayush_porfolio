import type { Metadata } from "next"
import Link from "next/link"

import { hackathons } from "@/lib/content"
import { Badge } from "@/components/ui/badge"
import { Prompt } from "@/components/prompt"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = { title: "hackathons · Aayush Nair" }

export default function HackathonsPage() {
  return (
    <div className="pt-16 pb-20 sm:pt-24">
      <Prompt command="ls ~/hackathons" path="~/hackathons">
        <div className="space-y-12">
          {hackathons.map((h) => (
            <Reveal key={h.slug}>
              <Link
                href={`/hackathons/${h.slug}`}
                className="group block border-l border-border pl-4 transition-colors hover:border-term/60"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="flex items-center gap-2 text-[17px]">
                    <span className="transition-colors group-hover:text-term">{h.name}</span>
                    <Badge variant="outline" className="h-4 rounded-sm px-1.5 text-[12px] text-muted-foreground">
                      {h.result}
                    </Badge>
                  </h3>
                  <span className="text-[14px] text-dim">{h.date}</span>
                </div>
                <p className="mt-2 text-base">{h.summary}</p>
                <p className="mt-2 text-[14px] text-dim">built: {h.project}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Prompt>
    </div>
  )
}
