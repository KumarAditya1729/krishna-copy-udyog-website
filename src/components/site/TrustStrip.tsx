import { ShieldCheck, BadgeCheck, Globe2, Package } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "GST Registered",
    text: "Verified business with GSTIN compliance for transparent invoicing.",
  },
  {
    icon: BadgeCheck,
    title: "Udyam MSME Registered",
    text: "Government-recognised Micro enterprise from Bihar.",
  },
  {
    icon: Globe2,
    title: "IEC Certified",
    text: "Importer Exporter Code holder for export-ready operations.",
  },
  {
    icon: Package,
    title: "Bulk Manufacturing",
    text: "Production capacity for schools, retailers and distributors.",
  },
];

export function TrustStrip() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl bg-card border border-border p-5 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition"
            >
              <span className="grid place-items-center h-11 w-11 rounded-xl bg-accent-soft text-accent mb-3">
                <it.icon className="h-5 w-5" />
              </span>
              <div className="font-display font-bold text-primary text-sm sm:text-base">
                {it.title}
              </div>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
