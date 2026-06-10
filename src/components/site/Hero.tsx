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
      className="relative overflow-hidden bg-background pt-24 lg:pt-32 pb-16 lg:pb-24 border-b-2 border-border"
    >

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-xs sm:text-sm font-bold uppercase tracking-widest">
            <BadgeCheck className="h-4 w-4" />
            MSME Registered Manufacturer
          </span>

          <h1 className="mt-8 font-display font-black text-foreground text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95]">
            School Notebook <br className="hidden md:block" /> Manufacturer. <br />
            <span className="text-primary text-3xl sm:text-4xl lg:text-5xl mt-4 block leading-tight">
              1 Lakh+ Units/Month | Export Ready
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium">
            Export-ready School Notebooks. <br/> ZED Certified | MSME | GST | IEC | Shipping to Africa, Gulf & Nepal.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-black uppercase tracking-wider hover:bg-foreground transition-colors"
            >
              Get Bulk Price <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#catalogue"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground bg-background text-foreground font-black uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
            >
              View Catalogue
            </a>
            <a
              href={waLink(`Hello ${SITE.name}, I want bulk pricing for notebooks/registers.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-success text-white font-black uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
            <a
              href={telLink}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border text-foreground font-black uppercase tracking-wider md:hidden"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 animate-fade-up">
          <div className="relative">
            <div className="relative border-4 border-foreground bg-card shadow-lift">
              <img
                src={heroImg}
                alt="Premium notebooks and A4 registers manufactured by Krishna Copy Udyog"
                width={1536}
                height={1152}
                fetchPriority="high"
                className="w-full h-auto object-cover grayscale contrast-125"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent border-4 border-foreground px-6 py-4 flex items-center gap-4 shadow-lift">
              <Package className="h-8 w-8 text-foreground" />
              <div className="leading-tight">
                <div className="text-sm font-bold text-foreground/80 uppercase">Made in</div>
                <div className="text-xl font-black text-foreground uppercase tracking-wider">Patna, Bihar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
