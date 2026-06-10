import { MapPin } from "lucide-react";

export function CountriesServed() {
  const regions = [
    {
      name: "Africa",
      countries: ["Nigeria", "Kenya", "Tanzania", "Ghana", "Uganda"],
      iconColor: "text-blue-400",
      glowColor: "rgba(96,165,250,0.15)",
      borderColor: "rgba(96,165,250,0.3)",
    },
    {
      name: "Gulf / Middle East",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman"],
      iconColor: "text-amber-400",
      glowColor: "rgba(251,191,36,0.15)",
      borderColor: "rgba(251,191,36,0.3)",
    },
    {
      name: "Neighbors",
      countries: ["Nepal", "Bangladesh", "Sri Lanka"],
      iconColor: "text-emerald-400",
      glowColor: "rgba(52,211,153,0.15)",
      borderColor: "rgba(52,211,153,0.3)",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: '#12102b' }}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#a78bfa]" />
            <span className="text-[#a78bfa] text-sm font-semibold tracking-widest uppercase">Global Reach</span>
            <div className="h-px w-8 bg-[#a78bfa]" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
            Countries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-[#8b83b0] text-base max-w-xl mx-auto leading-relaxed">
            Our established logistics network ensures safe and timely delivery to major ports worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300"
              style={{ background: '#1e1b45', border: `1px solid ${region.borderColor}` }}
            >
              {/* Card Header */}
              <div
                className="px-6 py-5 flex items-center gap-3"
                style={{ background: region.glowColor, borderBottom: `1px solid ${region.borderColor}` }}
              >
                <MapPin className={`h-5 w-5 ${region.iconColor} shrink-0`} />
                <h3 className="font-display font-bold text-white text-lg">{region.name}</h3>
              </div>

              {/* Countries */}
              <div className="px-6 py-5">
                <ul className="space-y-3">
                  {region.countries.map((country, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 font-medium text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7c5cbf] shrink-0" />
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
