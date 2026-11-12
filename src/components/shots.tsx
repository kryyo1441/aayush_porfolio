import Image from "next/image"

import type { Shot } from "@/lib/content"
import { cn } from "@/lib/utils"

function Figure({ shot, className, sizes }: { shot: Shot; className?: string; sizes: string }) {
  return (
    <figure className="space-y-2">
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        sizes={sizes}
        // phone shots are ~250px already, resizing them only makes them soft
        unoptimized={shot.src.endsWith(".gif") || shot.width < 300}
        className={cn("w-full rounded-md border border-border", className)}
      />
      <figcaption className="text-[14px] text-muted-foreground">{shot.alt}</figcaption>
    </figure>
  )
}

// Phone screenshots go side by side at native size. Otherwise the first shot
// takes the full column and the rest sit in a row below it, cropped to match.
export function Shots({ shots }: { shots: Shot[] }) {
  const [first, ...rest] = shots

  if (shots.every((s) => s.height > s.width)) {
    return (
      <div className="grid max-w-2xl grid-cols-3 items-start gap-5">
        {shots.map((shot) => (
          <Figure key={shot.src} shot={shot} sizes="250px" className="aspect-[1/2.09] object-cover object-top" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Figure shot={first} sizes="(min-width: 896px) 856px, 100vw" />
      {rest.length > 0 && (
        <div className="grid grid-cols-2 gap-5">
          {rest.map((shot) => (
            <Figure key={shot.src} shot={shot} sizes="(min-width: 896px) 420px, 50vw" className="aspect-[4/3] object-cover" />
          ))}
        </div>
      )}
    </div>
  )
}
