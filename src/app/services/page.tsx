import type { Metadata } from "next";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesList from "@/components/sections/services/ServicesList";
import HowWeWork from "@/components/sections/services/HowWeWork";
import Partners from "@/components/sections/services/Partners";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

export const metadata: Metadata = {
  title: "AI Services | CreativeArc",
  description:
    "Explore CreativeArc’s AI services including consulting, custom AI development, chatbots, document intelligence, and cloud AI deployment.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <HowWeWork />
      <Partners />
      <ServicesCTA />
    </main>
  );
}
