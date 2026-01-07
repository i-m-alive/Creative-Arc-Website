import type { Metadata } from "next";
import AboutHero from "@/components/sections/about/AboutHero";
import OurStory from "@/components/sections/about/OurStory";
import VisionMission from "@/components/sections/about/VisionMission";
import CoreValues from "@/components/sections/about/CoreValues";
import AIPhilosophy from "@/components/sections/about/AIPhilosophy";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CreativeArc, our vision, mission, values, and responsible AI philosophy.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <VisionMission />
      <CoreValues />
      <AIPhilosophy />
    </main>
  );
}
