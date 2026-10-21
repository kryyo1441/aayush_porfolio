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

type OutputDialogProps = {
  name: string
  shots: Shot[]
}

export function OutputDialog({ name, shots }: OutputDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer text-term underline-offset-4 hover:underline">
        ./output
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] gap-5 overflow-y-auto p-5 sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-sm">
            <span className="text-dim">$ open </span>
            {name}/output
          </DialogTitle>
          <DialogDescription className="text-xs">
            {shots.length > 1 ? `${shots.length} captures` : "1 capture"} from the running app.
          </DialogDescription>
        </DialogHeader>

        {shots.map((shot) => (
          <figure key={shot.src} className="space-y-2">
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              sizes="(min-width: 896px) 856px, 100vw"
              unoptimized={shot.src.endsWith(".gif")}
              className="w-full rounded-md border border-border"
            />
            <figcaption className="text-xs text-muted-foreground">{shot.alt}</figcaption>
          </figure>
        ))}
      </DialogContent>
    </Dialog>
  )
}
