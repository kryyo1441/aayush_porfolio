"use client"

import { useEffect, useState } from "react"

import { useInView } from "@/hooks/use-in-view"

type PromptProps = {
  command: string
  path?: string
  /** ms per character */
  speed?: number
  /** keep the cursor blinking after the command finishes */
  idle?: boolean
  className?: string
  children?: React.ReactNode
}

// A shell prompt that types its command once it scrolls into view, then reveals its output.
export function Prompt({
  command,
  path = "~",
  speed = 45,
  idle = false,
  className,
  children,
}: PromptProps) {
  const [ref, inView] = useInView<HTMLDivElement>()
  const [typed, setTyped] = useState(0)
  const done = typed >= command.length

  useEffect(() => {
    if (!inView || done) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    // a short pause before the first key, like someone actually typing
    const wait = typed === 0 ? 250 : speed + Math.random() * 40
    const id = setTimeout(() => setTyped(reduced ? command.length : typed + 1), reduced ? 0 : wait)

    return () => clearTimeout(id)
  }, [inView, typed, done, command, speed])

  return (
    <div ref={ref} className={className}>
      <p className="text-sm">
        <span className="sr-only">{`${path} $ ${command}`}</span>
        <span aria-hidden>
          <span className="text-term">aayush</span>
          <span className="text-dim">@</span>
          <span className="text-muted-foreground">dev</span>
          <span className="text-dim">:</span>
          <span className="text-foreground">{path}</span>
          <span className="text-dim">$ </span>
          <span>{command.slice(0, typed)}</span>
          <span className="prompt-rest">{command.slice(typed)}</span>
          {(!done || idle) && <span className="cursor" />}
        </span>
      </p>
      {children && (
        <div data-shown={done} className="reveal mt-4">
          {children}
        </div>
      )}
    </div>
  )
}
