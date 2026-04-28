import { MapPin, Factory, Truck, Settings2, Sparkles } from "lucide-react";

const cards = [
  { icon: MapPin, title: "Patna, Bihar based" },
  { icon: Factory, title: "Notebook & register manufacturing" },
  { icon: Truck, title: "Wholesale supply" },
  { icon: Settings2, title: "Custom bulk orders" },
  { icon: Sparkles, title: "Quality-focused finishing" },
];

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            About Us
          </span>
          <h2 className="mt-3 font-display font-extrabold text-primary text-3xl sm:text-4xl lg:text-5xl leading-tight">
            About Krishna Copy Udyog
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Krishna Copy Udyog is a Patna-based manufacturer and wholesale supplier of
            notebooks, registers, and educational stationery products. We focus on
            durable binding, smooth paper quality, clean finishing, and affordable
            pricing for schools, offices, retailers, wholesalers, and bulk buyers.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3 sm:gap-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl bg-card border border-border p-5 flex items-center gap-4 shadow-soft hover:shadow-card transition"
            >
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-navy text-primary-foreground shrink-0">
                <c.icon className="h-5 w-5" />
              </span>
              <div className="font-display font-semibold text-primary">{c.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
