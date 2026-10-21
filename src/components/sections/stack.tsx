import { stack } from "@/lib/content"
import { Prompt } from "@/components/prompt"

export function Stack() {
  return (
    <section className="py-12">
      <Prompt command="cat stack.toml">
        <pre className="overflow-x-auto rounded-md border border-border bg-card px-4 py-3 text-[13px] leading-6">
          {Object.entries(stack).map(([group, items]) => (
            <code key={group} className="block">
              <span className="text-dim">{group.padEnd(10)}</span>
              <span className="text-dim">= [</span>
              {items.map((item, i) => (
                <span key={item}>
                  <span className="text-term">&quot;{item}&quot;</span>
                  {i < items.length - 1 && <span className="text-dim">, </span>}
                </span>
              ))}
              <span className="text-dim">]</span>
            </code>
          ))}
        </pre>
      </Prompt>
    </section>
  )
}
