# aayush-portfolio

My personal site. Next.js 16 (App Router), Tailwind v4 and a few shadcn/ui primitives.

```bash
npm install
npm run dev
```

All the copy lives in `src/lib/content.ts`. Project screenshots go in `public/projects/`
and are referenced from the `shots` array on each project.

## Layout

```
src/
  app/            layout, page, global styles
  components/
    sections/     one file per section on the page
    ui/           shadcn primitives (badge, button, dialog)
    prompt.tsx    the typed shell prompt used as section headings
    reveal.tsx    fade-in on scroll
  hooks/          use-in-view
  lib/            content + cn helper
```

Animations respect `prefers-reduced-motion`, and the page still reads fine with JS off.
