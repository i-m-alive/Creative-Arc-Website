import type { Metadata } from "next";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesList from "@/components/sections/services/ServicesList";
import HowWeWork from "@/components/sections/services/HowWeWork";

export const metadata: Metadata = {
  title: "AI Services",
  description:
    "Explore CreativeArc’s AI services including consulting, custom AI development, chatbots, document intelligence, and cloud deployment.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <HowWeWork />
    </main>
  );
}
