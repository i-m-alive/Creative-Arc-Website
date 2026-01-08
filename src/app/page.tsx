import Hero from "@/components/sections/home/Hero";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import Metrics from "@/components/sections/home/Metrics";
import ProductMock from "@/components/sections/home/ProductMock";
import WhyCreativeArc from "@/components/sections/home/WhyCreativeArc";
import CareersCTA from "@/components/sections/home/CareersCTA";

export default function HomePage() {
  return (
    <main>
      {/* Hero / Brand introduction */}
      <Hero />

      {/* Core services */}
      <ServicesOverview />

      {/* Trust & credibility */}
      <Metrics />

      {/* Product teaser (SketchAI – In Development) */}
      <ProductMock />

      {/* Brand values */}
      <WhyCreativeArc />

      {/* Careers call-to-action */}
      <CareersCTA />
    </main>
  );
}
