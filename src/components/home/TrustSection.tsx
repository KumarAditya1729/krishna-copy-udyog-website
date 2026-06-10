import { Award, Globe, Package, Palette, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Quality paper",
    desc: "Premium writing paper carefully sourced for best writing experience.",
    color: "#7c5cbf",
  },
  {
    icon: Globe,
    title: "Competitive wholesale pricing",
    desc: "Direct-from-factory rates ensuring maximum margins for bulk buyers.",
    color: "#6366f1",
  },
  {
    icon: Package,
    title: "Durable binding",
    desc: "Strong saddle-stitch, spiral, and perfect binding options available.",
    color: "#8b5cf6",
  },
  {
    icon: Palette,
    title: "Custom sizes & page count",
    desc: "Fully tailored specifications to meet your institution's requirements.",
    color: "#a78bfa",
  },
  {
    icon: Clock,
    title: "Bulk order support",
    desc: "High capacity manufacturing capable of 5 Lakh+ units per month.",
    color: "#7c5cbf",
  },
  {
    icon: ShieldCheck,
    title: "Registered MSME business",
    desc: "Verified, compliant, and legally registered manufacturer in Bihar.",
    color: "#6366f1",
  },
];

export function TrustSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: '#0f0d27' }}
    >
      {/* Subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(ellipse, #7c5cbf 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: '#a78bfa' }}
          >
            Why Choose Us
          </p>
          <h2
            className="font-display font-black text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Why Buyers Choose{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a78bfa, #7c5cbf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Krishna Copy Udyog
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#8b83b0' }}>
            From high-quality raw paper to clean finishing — we deliver durable stationery with competitive wholesale pricing.
          </p>
        </div>

        {/* Feature grid — 3 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'rgba(30,27,69,0.5)',
                  border: '1px solid rgba(124,92,191,0.2)',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,92,191,0.5)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(124,92,191,0.15)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,92,191,0.2)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `rgba(124,92,191,0.15)` }}
                >
                  <Icon className="w-6 h-6" style={{ color: f.color }} />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-3">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8b83b0' }}>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
