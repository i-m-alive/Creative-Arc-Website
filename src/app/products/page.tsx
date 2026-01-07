import type { Metadata } from "next";
import ProductsHero from "@/components/sections/products/ProductsHero";
import SketchAI from "@/components/sections/products/SketchAI";
import ProductPhilosophy from "@/components/sections/products/ProductPhilosophy";

export const metadata: Metadata = {
  title: "AI Products",
  description:
    "Discover CreativeArc’s AI-powered products including SketchAI, built for precision and creativity.",
};

export default function ProductsPage() {
  return (
    <main>
      <ProductsHero />
      <SketchAI />
      <ProductPhilosophy />
    </main>
  );
}
