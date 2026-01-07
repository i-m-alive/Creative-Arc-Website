import Hero from "@/components/sections/home/Hero";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import ProductTeaser from "@/components/sections/home/ProductTeaser";
import WhyCreativeArc from "@/components/sections/home/WhyCreativeArc";
import CareersCTA from "@/components/sections/home/CareersCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <ProductTeaser />
      <WhyCreativeArc />
      <CareersCTA />
    </main>
  );
}
