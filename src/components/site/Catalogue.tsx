import { Download, MessageCircle, ArrowRight } from "lucide-react";
import { SITE, waLink } from "@/lib/site";
import smallImg from "@/assets/small-copy.jpg";
import a4Img from "@/assets/a4-register.jpg";
import rangeImg from "@/assets/register-range.jpg";
import regularImg from "@/assets/regular-a4-register.jpg";
import spiralImg from "@/assets/spiral-notebook.jpg";
import bulkImg from "@/assets/bulk-order-packaging.jpg";

import compImg from "@/assets/composition.svg";
import dubaiImg from "@/assets/dubai-long.svg";
import schoolImg from "@/assets/schooltime.svg";
import premiumImg from "@/assets/premium-spiral.svg";
import leatherImg from "@/assets/leather.svg";

type Item = {
  img: string;
  title: string;
  size?: string;
  rows?: { pages: string; price: string }[];
  text?: string;
};

const items: Item[] = [
  {
    img: compImg,
    title: "Premium Composition Notebook",
    text: "Classic black and white speckled pattern, perfect for school and journaling. Available with fun sticker customization options.",
  },
  {
    img: dubaiImg,
    title: "MAYRA Long Note Book",
    text: "Inspirational and graphic covers like Dubai skyline. Smooth writing pages for daily use.",
  },
  {
    img: schoolImg,
    title: "Schooltime Orange Notebook",
    text: "Standard school notebook with classic lined cover and name label box.",
  },
  {
    img: premiumImg,
    title: "Scholar Apple Premium Spiral",
    text: "High-quality spiral notebook with shiny 3D embossed copper rose and space designs.",
  },
  {
    img: leatherImg,
    title: "MAYRA Quality Leather Look",
    text: "Elegant leather-feel notebook with beautiful nature and travel themes.",
  },
  {
    img: smallImg,
    title: "Small Notebook / Copy",
    size: "24 × 18 cm",
    rows: [
      { pages: "120 pages", price: "₹40" },
      { pages: "172 pages", price: "₹50" },
      { pages: "200 pages", price: "₹70" },
    ],
  },
  {
    img: a4Img,
    title: "A4 Register",
    size: "29.5 × 21 cm",
    rows: [
      { pages: "120 pages", price: "₹55" },
      { pages: "196 pages", price: "₹80" },
      { pages: "240 pages", price: "₹100" },
      { pages: "325 pages", price: "₹120" },
      { pages: "400 pages", price: "₹160" },
    ],
  },
  {
    img: rangeImg,
    title: "Register Range",
    rows: [
      { pages: "200 pages", price: "₹90" },
      { pages: "250 pages", price: "₹110" },
      { pages: "300 pages", price: "₹120" },
      { pages: "350 pages", price: "₹150" },
      { pages: "400 pages", price: "₹170" },
      { pages: "450 pages", price: "₹190" },
      { pages: "500 pages", price: "₹210" },
    ],
  },
  {
    img: regularImg,
    title: "Regular Use A4 Register",
    rows: [
      { pages: "200 pages", price: "₹50" },
      { pages: "300 pages", price: "₹75" },
      { pages: "400 pages", price: "₹100" },
      { pages: "500 pages", price: "₹120" },
    ],
  },
  {
    img: spiralImg,
    title: "Spiral Notebook",
    text: "Available for school, office, and custom bulk orders. Contact for size and page options.",
  },
  {
    img: bulkImg,
    title: "Custom Bulk Orders",
    text: "Custom page count, cover design, branding, and bulk quantity available.",
  },
];

export function Catalogue() {
  return (
    <section id="catalogue" className="py-16 lg:py-24 bg-secondary/40 paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Catalogue & Pricing
          </span>
          <h2 className="mt-3 font-display font-extrabold text-primary text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Product Catalogue
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Explore our notebook and register range with page options, sizes, and MRP.
            Contact us for latest wholesale and bulk pricing.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          {items.map((it) => (
            <article
              key={it.title}
              className="group rounded-3xl bg-card border border-border overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300 grid sm:grid-cols-5"
            >
              <div className="sm:col-span-2 aspect-[4/3] sm:aspect-auto bg-secondary/40 overflow-hidden relative">
                <img
                  src={it.img}
                  alt={it.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="sm:col-span-3 p-5 sm:p-6 flex flex-col">
                <h3 className="font-display font-bold text-primary text-lg sm:text-xl">
                  {it.title}
                </h3>
                {it.size && (
                  <div className="mt-1 text-xs font-semibold text-accent uppercase tracking-wider">
                    Size: {it.size}
                  </div>
                )}

                {it.rows && (
                  <div className="mt-4 rounded-2xl border border-border overflow-hidden">
                    {it.rows.map((r, i) => (
                      <div
                        key={r.pages}
                        className={`flex items-center justify-between px-4 py-2.5 text-sm ${
                          i % 2 ? "bg-secondary/40" : "bg-card"
                        }`}
                      >
                        <span className="text-foreground">{r.pages}</span>
                        <span className="font-bold text-primary">{r.price}</span>
                      </div>
                    ))}
                  </div>
                )}

                {it.text && (
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {it.text}
                  </p>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition"
                  >
                    Get Bulk Price <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={waLink(`Hello ${SITE.name}, I want bulk pricing for: ${it.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-success text-white text-sm font-semibold hover:opacity-90 transition"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-accent-soft border border-accent/30 p-5 text-sm text-foreground/80">
          Prices may vary based on paper quality, order quantity, customization, and
          market conditions. Contact us for latest bulk pricing.
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {/* TODO: Place the real PDF file at public/catalogue.pdf */}
          <a
            href="/catalogue.pdf"
            download
            aria-label="Download Krishna Copy Udyog product catalogue PDF"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-card border border-border text-primary font-semibold hover:border-accent transition"
          >
            <Download className="h-4 w-4" /> Download Catalogue
          </a>
          <a
            href={waLink(`Hello ${SITE.name}, please share the latest catalogue and bulk pricing.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-success text-white font-semibold hover:-translate-y-0.5 transition"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp for Bulk Price
          </a>
        </div>
      </div>
    </section>
  );
}
