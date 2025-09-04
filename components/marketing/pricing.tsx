"use client";

import * as React from "react";
import { CheckIcon, SparklesIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Interface for a single feature within a pricing plan.
 */
interface PricingFeature {
  text: string;
}

/**
 * Interface for a complete pricing plan.
 */
interface PricingPlan {
  name: string;
  price: string;
  frequency: string; // e.g., "/month", "/year"
  description: string;
  features: PricingFeature[];
  isRecommended?: boolean; // Optional flag to highlight a plan
  buttonText: string;
  buttonLink: string;
}

/**
 * Static data for pricing plans.
 */
const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$19",
    frequency: "/month",
    description: "Ideal for individuals or small teams just getting started.",
    features: [
      { text: "Up to 5 projects" },
      { text: "Basic analytics" },
      { text: "Email support" },
      { text: "50GB storage" },
    ],
    buttonText: "Get Started",
    buttonLink: "#", // Placeholder link
  },
  {
    name: "Pro",
    price: "$49",
    frequency: "/month",
    description: "Perfect for growing teams needing more power and collaboration.",
    features: [
      { text: "Unlimited projects" },
      { text: "Advanced analytics" },
      { text: "Priority email support" },
      { text: "200GB storage" },
      { text: "Team collaboration" },
    ],
    isRecommended: true,
    buttonText: "Start Pro Trial",
    buttonLink: "#", // Placeholder link
  },
  {
    name: "Enterprise",
    price: "$99",
    frequency: "/month",
    description: "Tailored for large organizations with custom requirements.",
    features: [
      { text: "All Pro features" },
      { text: "Dedicated account manager" },
      { text: "Custom integrations" },
      { text: "Unlimited storage" },
      { text: "24/7 phone support" },
    ],
    buttonText: "Contact Sales",
    buttonLink: "#", // Placeholder link
  },
];

/**
 * Renders a modern, responsive pricing section component.
 * It displays multiple pricing plans using Radix UI Card and Button components,
 * styled with Tailwind CSS for responsiveness and dark mode support.
 */
export function PricingSection() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24 lg:py-32" aria-labelledby="pricing-heading">
      <div className="text-center mb-12 sm:mb-16">
        <h2 id="pricing-heading" className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-lg text-muted-foreground sm:mt-6 max-w-2xl mx-auto">
          Choose the plan that fits your needs. No hidden fees, no surprises.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {pricingPlans.map((plan, index) => (
          <Card
            key={plan.name}
            className={cn(
              "flex flex-col justify-between p-6",
              plan.isRecommended
                ? "border-primary-foreground/50 shadow-lg dark:shadow-primary/20 scale-105" // Highlight recommended plan
                : "border-border shadow-sm dark:shadow-none"
            )}
          >
            <div>
              <CardHeader className="p-0 pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  {plan.isRecommended && (
                    <Badge variant="default" className="flex items-center gap-1">
                      <SparklesIcon className="size-3" aria-hidden="true" />
                      Most Popular
                    </Badge>
                  )}
                </div>
                <CardDescription className="mt-2 text-muted-foreground min-h-[48px]">
                  {plan.description}
                </CardDescription>
                <div className="mt-4 flex items-baseline">
                  <span className="text-5xl font-extrabold text-foreground">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-xl font-medium text-muted-foreground">
                    {plan.frequency}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-0 mt-6">
                <ul className="space-y-3" aria-label={`Features for ${plan.name} plan`}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-base">
                      <CheckIcon className="size-5 text-primary shrink-0 mr-2" aria-hidden="true" />
                      <span className="text-muted-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
            <CardFooter className="p-0 mt-8">
              <Button
                asChild
                className={cn(
                  "w-full",
                  plan.isRecommended
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                <a href={plan.buttonLink} aria-label={`Choose ${plan.name} plan`}>
                  {plan.buttonText}
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}