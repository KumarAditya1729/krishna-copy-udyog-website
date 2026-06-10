import { ArrowRight } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import schoolImg from "@/assets/school-notebooks.jpg";
import plainImg from "@/assets/plain-writing-notebook.jpg";
import customImg from "@/assets/custom-printed-notebook.jpg";
import bulkImg from "@/assets/bulk-order-packaging.jpg";

import compImg from "@/assets/composition.jpg";
import dubaiImg from "@/assets/dubai-long.jpg";
import orangeImg from "@/assets/schooltime.jpg";
import premiumImg from "@/assets/premium-spiral.jpg";
import leatherImg from "@/assets/leather.jpg";

const products = [
  {
    img: compImg,
    title: "Premium Composition Notebook",
    desc: "Classic black and white speckled pattern, perfect for school and journaling. Available with fun sticker customization options.",
  },
  {
    img: dubaiImg,
    title: "MAYRA Long Note Book",
    desc: "Inspirational and graphic covers like Dubai skyline. Smooth writing pages for daily use.",
  },
  {
    img: orangeImg,
    title: "Schooltime Orange Notebook",
    desc: "Standard school notebook with classic lined cover and name label box.",
  },
  {
    img: premiumImg,
    title: "Scholar Apple Premium Spiral",
    desc: "High-quality spiral notebook with shiny 3D embossed copper rose and space designs.",
  },
  {
    img: leatherImg,
    title: "MAYRA Quality Leather Look",
    desc: "Elegant leather-feel notebook with beautiful nature and travel themes.",
  },
  {
    img: schoolImg,
    title: "Standard Notebooks",
    desc: "Durable and affordable notebooks for students, schools, coaching institutes, and stationery suppliers.",
  },

  {
    img: plainImg,
    title: "Plain Writing Notebooks",
    desc: "Simple writing copies with smooth pages, strong binding, and multiple page options.",
  },
  {
    img: customImg,
    title: "Custom Printed Notebooks",
    desc: "Custom cover design, branding, page count, and size options for institutions and bulk orders.",
  },
  {
    img: bulkImg,
    title: "Bulk / Wholesale Supply",
    desc: "Packed notebook and register bundles for retailers, schools, offices, and distributors.",
  },
];

export function Products() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-foreground text-background text-xs font-bold uppercase tracking-widest mb-4">
            Our Range
          </span>
          <h2 className="font-display font-black text-foreground text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter leading-none">
            Product Catalog
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-medium leading-relaxed">
            Notebook, register, and stationery products for schools, offices, retailers,
            wholesalers, and distributors.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {products.map((p) => (
            <article
              key={p.title}
              className="group relative bg-card border-4 border-foreground overflow-hidden shadow-lift flex flex-col hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0_0_#1E293B] transition-all duration-200"
            >
              <div className="absolute top-4 right-4 z-10 bg-success border-2 border-foreground text-white text-xs font-black uppercase tracking-wider px-3 py-1 shadow-card">
                Available for Export
              </div>
              <div className="aspect-[4/3] overflow-hidden bg-secondary border-b-4 border-foreground">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-black text-foreground text-xl sm:text-2xl uppercase tracking-tight leading-none mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-6">
                  {p.desc}
                </p>
                <div className="mt-auto space-y-2 text-xs font-medium text-foreground bg-accent-soft border-2 border-foreground p-4 mb-6 flex-1">
                  <div className="flex justify-between"><span className="font-black uppercase tracking-wider">Paper:</span> <span>60 / 70 / 80 GSM</span></div>
                  <div className="flex justify-between"><span className="font-black uppercase tracking-wider">Size:</span> <span>A4 / A5 / 24x18 cm</span></div>
                  <div className="flex justify-between"><span className="font-black uppercase tracking-wider">Pages:</span> <span>100 to 400 Pages</span></div>
                  <div className="flex justify-between"><span className="font-black uppercase tracking-wider">Binding:</span> <span>Saddle / Spiral / Perfect</span></div>
                  <div className="flex justify-between mt-3 pt-3 border-t-2 border-foreground"><span className="font-black uppercase tracking-wider">MOQ:</span> <span className="font-black">10,000 / 1 Container</span></div>
                </div>
                <a
                  href={waLink(`Hello ${SITE.name}, I want to enquire about: ${p.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-black text-primary uppercase tracking-wider hover:text-accent group/btn"
                >
                  Enquire Now
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
