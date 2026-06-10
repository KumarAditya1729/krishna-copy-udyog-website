import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import schoolImg from "@/assets/school-notebooks.jpg";
import plainImg from "@/assets/plain-writing-notebook.jpg";
import customImg from "@/assets/custom-printed-notebook.jpg";
import bulkImg from "@/assets/bulk-order-packaging.jpg";
import compImg from "@/assets/composition.jpg";
import dubaiImg from "@/assets/dubai-long.jpg";
import orangeImg from "@/assets/schooltime.jpg";
import premiumImg from "@/assets/premium-spiral.jpg";
import leatherImg from "@/assets/leather.jpg";

const categories = [
  {
    label: "Premium Collection",
    products: [
      {
        title: "Premium Composition Notebook",
        desc: "Classic black and white speckled pattern, perfect for school and journaling. Available with fun sticker customization options.",
        price: "Bulk Price",
        badge: "Premium",
        badgeColor: "#7c5cbf",
        image: compImg,
        specs: ["60 GSM Paper", "A4 / Long Size", "Ruled / Plain", "192 Pages"],
      },
      {
        title: "Scholar Apple Premium Spiral",
        desc: "High-quality spiral notebook with shiny 3D embossed copper rose and space designs.",
        price: "Bulk Price",
        badge: "Spiral",
        badgeColor: "#8b5cf6",
        image: premiumImg,
        specs: ["70 GSM Paper", "A5 / B5 Size", "Single Line Ruled", "100–200 Pages"],
      },
      {
        title: "MAYRA Quality Leather Look",
        desc: "Elegant leather-feel notebook with beautiful nature and travel themes.",
        price: "Bulk Price",
        image: leatherImg,
        specs: ["80 GSM Paper", "A5 Size", "Ruled", "120 Pages"],
      },
    ],
  },
  {
    label: "Standard & School Utility",
    products: [
      {
        title: "MAYRA Long Note Book",
        desc: "Inspirational and graphic covers like Dubai skyline. Smooth writing pages for daily use.",
        price: "Wholesale",
        image: dubaiImg,
        specs: ["60 GSM Paper", "Long Size (21×30cm)", "Single Line", "100 Pages"],
      },
      {
        title: "Schooltime Orange Notebook",
        desc: "Standard school notebook with classic lined cover and name label box.",
        price: "Wholesale",
        image: orangeImg,
        specs: ["60 GSM Paper", "A4 / Long Size", "Single Line Ruled", "100–200 Pages"],
      },
      {
        title: "Standard Notebooks",
        desc: "Durable and affordable notebooks for students, schools, coaching institutes.",
        price: "Wholesale",
        badge: "Most Popular",
        badgeColor: "#a78bfa",
        image: schoolImg,
        specs: ["60–70 GSM Paper", "A4 / Long Size", "Ruled / Plain", "100–300 Pages"],
      },
      {
        title: "Plain Writing Notebooks",
        desc: "Simple writing copies with smooth pages, strong binding, and multiple page options.",
        price: "Wholesale",
        image: plainImg,
        specs: ["60 GSM Paper", "A4 / Long Size", "Plain / Unruled", "100–200 Pages"],
      },
      {
        title: "Bulk / Wholesale Supply",
        desc: "Packed notebook and register bundles for retailers, schools, offices, and distributors.",
        price: "Wholesale",
        image: bulkImg,
        specs: ["60–80 GSM Paper", "All Sizes Available", "Custom Ruling", "MOQ: 500 pcs"],
      },
    ],
  },
];

export function ProductsSection() {
  return (
    <section
      id="products"
      className="py-24 relative overflow-hidden"
      style={{ background: '#13112c' }}
    >
      {/* Glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #7c5cbf 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color: '#a78bfa' }}>
              Our Catalogue
            </p>
            <h2
              className="font-display font-black text-white leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Products Built for{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a78bfa, #7c5cbf)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Scale
              </span>
            </h2>
          </div>
          <Button
            asChild
            className="self-start md:self-auto rounded-xl font-semibold gap-2 text-white"
            style={{ background: 'rgba(124,92,191,0.15)', border: '1px solid rgba(124,92,191,0.4)' }}
          >
            <a href="#contact">
              Request Catalogue <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Categories */}
        {categories.map((cat, ci) => (
          <div key={ci} className="mb-14 last:mb-0">
            {/* Category label */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-bold text-white text-base">{cat.label}</span>
              <div className="flex-1 h-px" style={{ background: 'rgba(124,92,191,0.2)' }} />
            </div>

            {/* Products row — horizontal card list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {cat.products.map((product, pi) => (
                <div
                  key={pi}
                  className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(30,27,69,0.6)',
                    border: '1px solid rgba(124,92,191,0.2)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,92,191,0.5)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(124,92,191,0.2)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,92,191,0.2)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(30,27,69,0.8) 0%, transparent 50%)' }}
                    />
                    {product.badge && (
                      <div
                        className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full"
                        style={{ background: product.badgeColor }}
                      >
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-[#c4b5fd] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#8b83b0' }}>
                      {product.desc}
                    </p>

                    {/* GSM Specs chips */}
                    {(product as any).specs && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {((product as any).specs as string[]).map((spec: string, si: number) => (
                          <span
                            key={si}
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{
                              background: si === 0
                                ? 'rgba(167,139,250,0.18)'
                                : 'rgba(124,92,191,0.1)',
                              color: si === 0 ? '#c4b5fd' : '#a78bfa',
                              border: '1px solid rgba(124,92,191,0.25)',
                            }}
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-lg" style={{ color: '#a78bfa' }}>{product.price}</span>
                        {(product as any).oldPrice && (
                          <span className="text-sm line-through" style={{ color: '#8b83b0' }}>{(product as any).oldPrice}</span>
                        )}
                      </div>
                      <a
                        href="#contact"
                        className="flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3 py-2 transition-all hover:bg-[rgba(124,92,191,0.2)]"
                        style={{ color: '#a78bfa', background: 'rgba(124,92,191,0.12)', border: '1px solid rgba(124,92,191,0.25)' }}
                      >
                        Inquire <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Custom Printed — full-width CTA card */}
        <div
          className="mt-8 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
          style={{
            background: 'linear-gradient(135deg, rgba(124,92,191,0.2) 0%, rgba(99,102,241,0.15) 100%)',
            border: '1px solid rgba(124,92,191,0.3)',
          }}
        >
          <img
            src={customImg}
            alt="Custom Printed Notebooks"
            className="w-40 h-40 object-cover rounded-2xl shrink-0"
            style={{ border: '1px solid rgba(124,92,191,0.3)' }}
          />
          <div className="flex-1">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: 'rgba(124,92,191,0.2)', color: '#a78bfa', border: '1px solid rgba(124,92,191,0.3)' }}
            >
              OEM / Private Label
            </span>
            <h3 className="font-display font-black text-white text-2xl md:text-3xl mb-3">
              Custom Printed Notebooks
            </h3>
            <p className="leading-relaxed mb-6" style={{ color: '#8b83b0' }}>
              Your school logo, custom cover design, chosen paper GSM — we manufacture notebooks exactly as you envision them.
              MOQ 10,000 units. Full documentation provided.
            </p>
            <Button
              asChild
              className="rounded-xl h-12 px-8 font-bold text-white gap-2"
              style={{ background: 'linear-gradient(135deg, #7c5cbf, #a78bfa)', boxShadow: '0 0 20px rgba(124,92,191,0.4)' }}
            >
              <a href="#contact">
                Discuss Custom Order <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
