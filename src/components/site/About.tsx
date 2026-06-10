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
    <section id="about" className="py-16 lg:py-24 bg-background border-b-4 border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="inline-block px-3 py-1 bg-foreground text-background text-xs font-bold uppercase tracking-widest mb-4">
            About Us
          </span>
          <h2 className="font-display font-black text-foreground text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter leading-none">
            About Krishna Copy Udyog
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed">
            Krishna Copy Udyog is a ZED-certified school notebook manufacturer based in Patna, Bihar, India. Founded in 2019 by Mr. Suraj Kumar, we have grown to produce 5 Lakh+ notebooks per month. We manufacture school notebooks, exercise books, spiral registers, and custom stationery for bulk buyers, wholesalers, and international importers across Africa, Gulf countries, Nepal, and Bangladesh. Our products meet international quality standards backed by MSME, GST, IEC, and ZED certifications.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-card border-4 border-foreground p-6 flex items-center gap-4 shadow-lift hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#1E293B] transition-all duration-200"
            >
              <span className="grid place-items-center h-14 w-14 border-2 border-foreground bg-accent text-background shrink-0">
                <c.icon className="h-6 w-6" />
              </span>
              <div className="font-display font-black text-foreground text-lg uppercase tracking-wide leading-tight">{c.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
