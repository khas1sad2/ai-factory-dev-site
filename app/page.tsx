import * as React from "react"
import { Header } from "@/components/header"
import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-grow container mx-auto px-4 sm:px-6 md:px-8 py-12 flex flex-col items-center justify-center text-center gap-12"
      >
        {/* Hero Section */}
        <section
          aria-label="Hero section introducing TaskFlow AI"
          className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-blue-500 dark:text-blue-400">
              Automate Your Remote Team&apos;s Workflow with AI
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-md mx-auto md:mx-0">
              TaskFlow AI helps remote teams streamline project management, boost
              collaboration, and analyze productivity through powerful AI
              automation.
            </p>
            <a
              href="#signup"
              className="mt-8 inline-block rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-6 py-3 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 transition"
            >
              Start Free Trial
            </a>
          </div>
          <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
            {/* Placeholder for demo video */}
            <Image
              src="/video-placeholder.png"
              alt="Demo video placeholder"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority={false}
              draggable={false}
            />
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          aria-label="Key features of TaskFlow AI"
          className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-3 gap-10 text-left"
        >
          <article className="flex flex-col items-start gap-4">
            <h2 className="text-2xl font-semibold text-blue-400 dark:text-blue-500">
              AI Automation
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Automate repetitive tasks and workflows to free up your team&apos;s
              time and focus on what matters.
            </p>
          </article>
          <article className="flex flex-col items-start gap-4">
            <h2 className="text-2xl font-semibold text-blue-400 dark:text-blue-500">
              Team Collaboration
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Foster seamless communication and coordination across your remote
              teams with real-time updates and shared task boards.
            </p>
          </article>
          <article className="flex flex-col items-start gap-4">
            <h2 className="text-2xl font-semibold text-blue-400 dark:text-blue-500">
              Analytics & Insights
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Gain actionable insights from data-driven analytics to optimize
              productivity and project outcomes.
            </p>
          </article>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          aria-label="Customer testimonials"
          className="max-w-4xl w-full grid gap-8"
        >
          <h2 className="text-3xl font-bold text-center text-blue-400 dark:text-blue-500">
            Trusted by Remote Teams Worldwide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <blockquote className="bg-muted rounded-lg p-6 shadow-lg">
              <p className="text-lg italic text-muted-foreground leading-relaxed">
                &quot;TaskFlow AI transformed how my team works remotely. The AI
                automation saved us countless hours every week.&quot;
              </p>
              <footer className="mt-4 text-sm font-semibold text-blue-500">
                - Sophia Lee, Project Manager
              </footer>
            </blockquote>
            <blockquote className="bg-muted rounded-lg p-6 shadow-lg">
              <p className="text-lg italic text-muted-foreground leading-relaxed">
                &quot;The collaboration tools are intuitive and keep everyone on
                the same page. Highly recommend TaskFlow AI!&quot;
              </p>
              <footer className="mt-4 text-sm font-semibold text-blue-500">
                - Carlos Ramirez, Team Lead
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          aria-label="Pricing plans"
          className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <article className="border border-border rounded-lg p-6 bg-card shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold text-blue-400 dark:text-blue-500 mb-2">
              Free
            </h3>
            <p className="text-muted-foreground flex-grow">
              Basic features, limited AI automation, ideal for small teams.
            </p>
            <p className="text-3xl font-bold mt-4 mb-6">$0</p>
            <a
              href="#signup"
              className="mt-auto rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-4 py-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 transition"
            >
              Get Started
            </a>
          </article>
          <article className="border border-border rounded-lg p-6 bg-card shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold text-blue-400 dark:text-blue-500 mb-2">
              Pro
            </h3>
            <p className="text-muted-foreground flex-grow">
              Full AI automation, team collaboration, and analytics.
            </p>
            <p className="text-3xl font-bold mt-4 mb-6">$29/mo</p>
            <a
              href="#signup"
              className="mt-auto rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-4 py-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 transition"
            >
              Try Pro
            </a>
          </article>
          <article className="border border-border rounded-lg p-6 bg-card shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold text-blue-400 dark:text-blue-500 mb-2">
              Enterprise
            </h3>
            <p className="text-muted-foreground flex-grow">
              Custom solutions, priority support, and advanced integrations.
            </p>
            <p className="text-3xl font-bold mt-4 mb-6">Contact Us</p>
            <a
              href="#signup"
              className="mt-auto rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-4 py-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400 transition"
            >
              Contact Sales
            </a>
          </article>
        </section>

        {/* Call-to-Action Section */}
        <section
          id="signup"
          aria-label="Free trial signup call to action"
          className="max-w-3xl w-full bg-blue-900 dark:bg-blue-800 rounded-lg p-8 text-center shadow-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Started with TaskFlow AI Today
          </h2>
          <p className="text-blue-200 mb-6">
            Sign up now for a free trial and empower your remote team with AI-driven
            productivity.
          </p>
          <a
            href="/signup"
            className="inline-block rounded-md bg-white text-blue-900 font-semibold px-8 py-3 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white transition"
          >
            Start Free Trial
          </a>
        </section>
      </main>
    </div>
  )
}