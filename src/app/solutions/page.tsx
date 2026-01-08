import type { Metadata } from "next";
import SolutionsHero from "@/components/sections/solutions/SolutionsHero";
import SolutionsGrid from "@/components/sections/solutions/SolutionsGrid";
import IndustryUseCases from "@/components/sections/solutions/IndustryUseCases";
import SolutionsApproach from "@/components/sections/solutions/SolutionsApproach";
import SolutionsCTA from "@/components/sections/solutions/SolutionsCTA";

export const metadata: Metadata = {
  title: "AI Solutions | CreativeArc",
  description:
    "Industry-focused AI solutions designed for real-world impact by CreativeArc.",
};

export default function SolutionsPage() {
  return (
    <main>
      <SolutionsHero />
      <SolutionsGrid />
      <IndustryUseCases />
      <SolutionsApproach />
      <SolutionsCTA />
    </main>
  );
}
