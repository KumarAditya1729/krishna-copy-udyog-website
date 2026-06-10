import { createFileRoute } from "@tanstack/react-router";
import { ExportHero } from "@/components/export/ExportHero";
import { ExportCapabilities } from "@/components/export/ExportCapabilities";
import { CountriesServed } from "@/components/export/CountriesServed";
import { ContactSection } from "@/components/home/ContactSection";

export const Route = createFileRoute("/export")({
  component: ExportPage,
  head: () => ({
    meta: [
      { title: "Export Bulk School Notebooks | Africa, Gulf, Nepal | Krishna Copy Udyog" },
      {
        name: "description",
        content: "Exporting premium school notebooks to Africa, Gulf countries, and Nepal. Wholesale supplier with 5 Lakh+ units/month capacity. IEC, ZED, MSME certified.",
      },
      { property: "og:title", content: "Export Bulk School Notebooks | Africa, Gulf, Nepal | Krishna Copy Udyog" },
      { property: "og:description", content: "Exporting premium school notebooks to Africa, Gulf countries, and Nepal. Wholesale supplier with 5 Lakh+ units/month capacity. IEC, ZED, MSME certified." },
      { property: "og:url", content: "https://krishnacopyudyog.com/export" },
      {
        name: "keywords",
        content: "export school notebooks, wholesale exercise books Africa, bulk notebook export Gulf, export notebook Nepal, IEC certified exporter India",
      },
    ],
    links: [
      { rel: "canonical", href: "https://krishnacopyudyog.com/export" },
    ],
  }),
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
