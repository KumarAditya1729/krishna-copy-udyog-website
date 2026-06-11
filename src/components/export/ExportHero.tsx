import { Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExportHero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden" style={{ background: '#12102b' }}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8ed7e66a5a?q=80&w=2000&auto=format&fit=crop')" }}
      />
      {/* Violet glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c5cbf 0%, transparent 70%)' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#12102b] via-[#12102b]/95 to-[#12102b]/70" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(124,92,191,0.15)] border border-[rgba(124,92,191,0.4)] rounded-full px-4 py-1.5 mb-8">
            <Globe className="w-3.5 h-3.5 text-[#a78bfa]" />
            <span className="text-[#a78bfa] text-xs font-semibold tracking-wider uppercase">Global Shipping Partner</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Bulk Notebook Export <span className="gradient-text">from India</span>
            <span className="block text-2xl md:text-3xl mt-3 text-white/80 font-bold">| School Notebook Manufacturer</span>
          </h1>
          <p className="text-lg text-[#8b83b0] mb-10 max-w-2xl leading-relaxed">
            Krishna Copy Udyog is a trusted Indian manufacturer exporting premium quality notebooks,
            registers, and stationery across Africa, the Gulf, and South Asia.
          </p>

          <Button
            asChild
            className="bg-[#7c5cbf] hover:bg-[#9370db] text-white h-14 px-8 rounded-xl text-base font-semibold btn-glow gap-2"
          >
            <a href="#contact">
              Request Export Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
