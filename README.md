# aayush-portfolio

My personal site. Next.js 16 (App Router), Tailwind v4 and a few shadcn/ui primitives.

```bash
npm install
npm run dev
```

All the copy lives in `src/lib/content.ts`. Each project and hackathon gets its own folder named
after its slug: screenshots in `public/projects/<slug>/`, event photos in `public/hackathons/<slug>/`.
They're referenced from the `shots` array. A hackathon project is slugged `<hackathon>-<name>`.

- Personal project: add it to `projects`.
- Hackathon: add it to `hackathons`, add the project built there to `hackathonProjects`, and set
  `project` / `hackathon` to each other's slug. The two pages link to each other from that.

## Layout

```
src/
  app/            layout (header, footer), home, global styles
    projects/     list + [slug] detail
    hackathons/   list + [slug] detail
  components/
    sections/     one file per section on the page
    ui/           shadcn primitives (badge, button, dialog)
    project-row   list entry for a project
    shots         screenshot figures
    prompt.tsx    the typed shell prompt used as section headings
    reveal.tsx    fade-in on scroll
  hooks/          use-in-view
  lib/            content + cn helper
```

Animations respect `prefers-reduced-motion`, and the page still reads fine with JS off.
