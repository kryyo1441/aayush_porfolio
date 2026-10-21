const links = [
  { href: "#work", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-12 max-w-2xl items-center justify-between px-5 text-sm">
        <a href="#top" className="text-muted-foreground transition-colors hover:text-foreground">
          <span className="text-term">~</span>/aayush
        </a>
        <nav className="flex gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
