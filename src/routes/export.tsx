import { createFileRoute } from "@tanstack/react-router";
import { ExportHero } from "@/components/export/ExportHero";
import { ExportCapabilities } from "@/components/export/ExportCapabilities";
import { CountriesServed } from "@/components/export/CountriesServed";
import { ContactSection } from "@/components/home/ContactSection";

export const Route = createFileRoute("/export")({
  component: ExportPage,
});

function ExportPage() {
  return (
    <div className="flex flex-col w-full">
      <ExportHero />
      <ExportCapabilities />
      <CountriesServed />
      <ContactSection />
    </div>
  );
}
