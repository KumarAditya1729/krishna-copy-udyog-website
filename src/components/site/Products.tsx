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
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Our Range
          </span>
          <h2 className="mt-3 font-display font-extrabold text-primary text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Our Product Range
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Notebook, register, and stationery products for schools, offices, retailers,
            wholesalers, and distributors.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {products.map((p) => (
            <article
              key={p.title}
              className="group rounded-3xl bg-card border border-border overflow-hidden shadow-soft hover:shadow-lift hover:-translate-y-1 transition flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary/40">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-primary text-lg sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.desc}
                </p>
                <a
                  href={waLink(`Hello ${SITE.name}, I want to enquire about: ${p.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent group/btn"
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
