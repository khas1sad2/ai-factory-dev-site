"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type HeroSectionProps = {
  demoVideoSrc?: string
  demoVideoAlt?: string
}

export function HeroSection({
  demoVideoSrc = "/video-placeholder.png",
  demoVideoAlt = "Demo video placeholder",
}: HeroSectionProps) {
  return (
    <section
      aria-label="Hero section introducing TaskFlow AI"
      className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6 md:px-8 py-16 mx-auto"
    >
      <div>
        <h1
          className={cn(
            "text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight",
            "text-blue-500 dark:text-blue-400"
          )}
        >
          Automate Your Remote Team&apos;s Workflow with AI
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-lg">
          TaskFlow AI helps remote teams streamline project management, boost
          collaboration, and analyze productivity through powerful AI
          automation.
        </p>
        <a
          href="#signup"
          className={cn(
            "mt-8 inline-block rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
            "text-white font-semibold px-6 py-3 shadow-md",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400",
            "transition"
          )}
        >
          Start Free Trial
        </a>
      </div>
      <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
        <Image
          src={demoVideoSrc}
          alt={demoVideoAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
          priority={false}
          draggable={false}
        />
      </div>
    </section>
  )
}