import { ShieldCheck, BadgeCheck, Globe2, Package } from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "MSME Certified",
    text: "Verified Micro Enterprise from Bihar.",
    certNo: "UDYAM-BR-26-00XXXXX"
  },
  {
    icon: ShieldCheck,
    title: "ZED Quality Certificate",
    text: "Zero Defect Zero Effect Certification.",
    certNo: "ZED-BR-202X-XXXX"
  },
  {
    icon: Globe2,
    title: "IEC (Export License)",
    text: "Importer Exporter Code for Global Trade.",
    certNo: "IEC: 051XXXXXXX"
  },
  {
    icon: Package,
    title: "GST Registered",
    text: "Verified business with GSTIN compliance.",
    certNo: "GSTIN: 10XXXXX0000X1Z5"
  },
];

export function TrustStrip() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 bg-card border-4 border-foreground shadow-lift flex flex-col hover:bg-accent/5 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="grid place-items-center h-12 w-12 bg-accent text-background rounded-full shrink-0">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display font-black text-foreground text-lg sm:text-xl uppercase tracking-wide">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 font-medium">
                {item.text}
              </p>
              <div className="mt-6 pt-4 border-t-4 border-foreground">
                <span className="inline-block bg-foreground text-background px-3 py-1 font-mono text-xs font-bold tracking-widest">
                  {item.certNo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
