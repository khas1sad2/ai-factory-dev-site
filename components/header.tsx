"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

type NavLink = {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#signup", label: "Get Started" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  // Close mobile menu on window resize to desktop breakpoint
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Close mobile menu on Escape key for accessibility
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm dark:bg-background/95",
        "transition-colors duration-300"
      )}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="TaskFlow AI - Home"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-semibold text-lg sm:text-xl leading-none"
          >
            <svg
              aria-hidden="true"
              width="32"
              height="32"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-500 flex-shrink-0"
              role="img"
              focusable="false"
            >
              {/* Simple AI chip style icon */}
              <rect
                x="8"
                y="8"
                width="32"
                height="32"
                rx="6"
                stroke="currentColor"
                strokeWidth="3"
              />
              <circle
                cx="24"
                cy="24"
                r="8"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                d="M24 16v16M16 24h16"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <span className="sr-only">TaskFlow AI</span>
            <span className="hidden sm:inline leading-tight select-none">
              TaskFlow AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary"
            className="hidden md:flex md:space-x-8"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative inline-block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 leading-snug transition-colors duration-150",
                )}
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-500 scale-x-0 transition-transform duration-200 ease-in-out hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <nav
        id="mobile-menu"
        aria-label="Mobile Primary Navigation"
        className={cn(
          "md:hidden fixed inset-x-0 top-16 z-40 origin-top rounded-b-lg bg-background/95 border-t border-border shadow-lg backdrop-blur-md transition-[max-height,opacity,visibility] duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen
            ? "max-h-[calc(100vh-4rem)] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        )}
      >
        <ul className="flex flex-col space-y-1 px-4 py-4 text-center">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-lg font-semibold text-muted-foreground hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 leading-snug"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}