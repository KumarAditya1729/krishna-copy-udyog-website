import { Phone, MessageCircle, ArrowRight, ShieldCheck, BadgeCheck, Globe2, Package } from "lucide-react";
import { SITE, telLink, waLink } from "@/lib/site";
import heroImg from "@/assets/hero-notebook-register.jpg";

const trust = [
  { icon: ShieldCheck, label: "GST Registered" },
  { icon: BadgeCheck, label: "Udyam MSME" },
  { icon: Globe2, label: "IEC Certified" },
  { icon: Package, label: "Bulk Orders" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-hero paper-texture pt-24 lg:pt-32 pb-16 lg:pb-24"
    >
      {/* decorative accents */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-soft border border-accent/30 text-primary text-xs sm:text-sm font-semibold">
            <BadgeCheck className="h-4 w-4 text-accent" />
            MSME Registered Notebook Manufacturer
          </span>

          <h1 className="mt-5 font-display font-extrabold text-primary text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Premium Notebook & Register Manufacturer in{" "}
            <span className="text-accent">Patna, Bihar</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {SITE.name} manufactures high-quality school notebooks, spiral notebooks,
            A4 registers, and writing copies for schools, offices, wholesalers,
            distributors, and bulk buyers.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-card hover:shadow-lift hover:-translate-y-0.5 transition"
            >
              Get Bulk Price <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#catalogue"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl border-2 border-primary/15 bg-card text-primary font-semibold hover:border-accent hover:bg-accent-soft transition"
            >
              View Catalogue
            </a>
            <a
              href={waLink(`Hello ${SITE.name}, I want bulk pricing for notebooks/registers.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-success text-white font-semibold shadow-card hover:-translate-y-0.5 transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
            </a>
            <a
              href={telLink}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-card border border-border text-primary font-semibold hover:border-primary transition md:hidden"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {trust.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-card/80 border border-border shadow-soft"
              >
                <t.icon className="h-4 w-4 text-accent shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-foreground">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative">
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-accent/20 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-lift border border-border bg-card">
              <img
                src={heroImg}
                alt="Premium notebooks and A4 registers manufactured by Krishna Copy Udyog"
                width={1536}
                height={1152}
                fetchPriority="high"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card rounded-2xl shadow-card border border-border px-4 py-3 flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-accent/15 text-accent">
                <Package className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-xs text-muted-foreground">Made in</div>
                <div className="text-sm font-bold text-primary">Patna, Bihar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
