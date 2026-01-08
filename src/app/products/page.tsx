import type { Metadata } from "next";
import ProductsHero from "@/components/sections/products/ProductsHero";
import SketchAI from "@/components/sections/products/SketchAI";
import ProductPhilosophy from "@/components/sections/products/ProductPhilosophy";
import ProductRoadmap from "@/components/sections/products/ProductRoadmap";
import ProductsCTA from "@/components/sections/products/ProductsCTA";

export const metadata: Metadata = {
  title: "AI Products | CreativeArc",
  description:
    "Discover CreativeArc’s AI-powered products including SketchAI, built with precision, creativity, and responsibility.",
};

export default function ProductsPage() {
  return (
    <main>
      <ProductsHero />
      <SketchAI />
      <ProductPhilosophy />
      <ProductRoadmap />
      <ProductsCTA />
    </main>
  );
}
