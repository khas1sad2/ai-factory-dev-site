import { PricingSection } from "@/components/marketing/pricing";
import Image from "next/image"; // Keep Image import if it's used elsewhere or for general purpose, though not by PricingSection itself.

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-16 px-4">
      <PricingSection />
    </main>
  );
}