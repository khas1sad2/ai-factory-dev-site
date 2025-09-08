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
      className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      {/* Background overlay for contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 dark:from-black/80 dark:via-black/70 dark:to-black/80 pointer-events-none rounded-md"
        style={{ zIndex: 0 }}
      />
      <div
        className="relative z-10 flex flex-col items-start text-left"
      >
        <h1
          className={cn(
            "text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.2] sm:leading-[1.3]",
            "text-blue-400 dark:text-blue-300",
            "select-text",
            "md:max-w-lg",
            "letter-spacing-[0.02em]"
          )}
          style={{ letterSpacing: "0.02em" }}
        >
          Innovate. Automate. Accelerate.
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-lg">
          TaskFlow AI empowers your remote team to streamline workflows, boost
          collaboration, and unlock productivity with intelligent automation.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full max-w-xs sm:max-w-none">
          <a
            href="#signup"
            aria-label="Get Started with TaskFlow AI free trial"
            className={cn(
              "w-full sm:w-auto rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
              "text-white font-semibold px-6 py-3 shadow-md text-center",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400",
              "transition duration-200 ease-in-out select-none"
            )}
          >
            Get Started
          </a>
          <a
            href="#features"
            aria-label="Learn more about TaskFlow AI features"
            className={cn(
              "w-full sm:w-auto rounded-md border border-blue-500 text-blue-400 hover:text-blue-300 hover:border-blue-400 dark:text-blue-300 dark:hover:text-blue-200 dark:hover:border-blue-300",
              "font-semibold px-6 py-3 text-center",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400",
              "transition duration-200 ease-in-out select-none"
            )}
          >
            Learn More
          </a>
        </div>
      </div>
      <div
        className="relative z-10 w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-muted"
        aria-label="Demo video placeholder"
      >
        <Image
          src={demoVideoSrc}
          alt={demoVideoAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
          priority={false}
          draggable={false}
          quality={80}
        />
      </div>
    </section>
  )
}