import type { Metadata } from "next";
import CareersHero from "@/components/sections/careers/CareersHero";
import OpenPositions from "@/components/sections/careers/OpenPositions";
import HackathonPlaceholder from "@/components/sections/careers/HackathonPlaceholder";
import Culture from "@/components/sections/careers/Culture";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities, hackathons, and life at CreativeArc. Build meaningful AI systems with us.",
};

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <OpenPositions />
      <HackathonPlaceholder />
      <Culture />
    </main>
  );
}
