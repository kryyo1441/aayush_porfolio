"use client"

import Image from "next/image"

import type { Shot } from "@/lib/content"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

function Figure({ shot, className, sizes }: { shot: Shot; className?: string; sizes: string }) {
  // phone shots are ~250px already, resizing them only makes them soft
  const unoptimized = shot.src.endsWith(".gif") || shot.width < 300

  return (
    <Dialog>
      <figure className="space-y-2">
        <DialogTrigger className="block w-full cursor-zoom-in">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            sizes={sizes}
            unoptimized={unoptimized}
            className={cn("w-full rounded-md border border-border transition-colors hover:border-term/60", className)}
          />
        </DialogTrigger>
        <figcaption className="text-xs text-muted-foreground">{shot.alt}</figcaption>
      </figure>
      <DialogContent className="max-h-[92vh] gap-4 overflow-y-auto p-5 sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle className="text-sm">
            <span className="text-dim">$ open </span>
            {shot.src.split("/").slice(-2).join("/")}
          </DialogTitle>
          <DialogDescription className="text-sm">{shot.alt}</DialogDescription>
        </DialogHeader>
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          sizes="(min-width: 1024px) 960px, 100vw"
          unoptimized={unoptimized}
          style={{ maxWidth: shot.width * 2 }}
          className="mx-auto h-auto max-h-[70vh] w-auto max-w-full rounded-md border border-border object-contain"
        />
      </DialogContent>
    </Dialog>
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
