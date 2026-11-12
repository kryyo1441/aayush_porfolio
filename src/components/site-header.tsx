import Link from "next/link"

const links = [
  { href: "/projects", label: "projects" },
  { href: "/hackathons", label: "hackathons" },
  { href: "/#experience", label: "experience" },
  { href: "/#contact", label: "contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-12 max-w-4xl items-center justify-between px-5 text-base">
        <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
          <span className="text-term">~</span>/aayush
        </Link>
        <nav className="flex gap-4 sm:gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
