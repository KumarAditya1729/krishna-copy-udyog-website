import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { FactorySection } from "@/components/home/FactorySection";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <TrustSection />
      <StatsSection />
      <ProductsSection />
      <FactorySection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
