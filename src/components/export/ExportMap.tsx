import { MapPin, Navigation } from "lucide-react";
import { useEffect, useState } from "react";

export function ExportMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const destinations = [
    {
      name: "Africa",
      top: "52%",
      left: "53.5%",
      color: "rgba(96,165,250,1)", // blue
      delay: "0s",
    },
    {
      name: "Gulf",
      top: "41%",
      left: "60.5%",
      color: "rgba(251,191,36,1)", // amber
      delay: "0.2s",
    },
    {
      name: "Neighbors",
      top: "43%",
      left: "66.5%",
      color: "rgba(52,211,153,1)", // emerald
      delay: "0.4s",
    },
  ];

  const origin = {
    name: "India",
    top: "43%",
    left: "65%",
    color: "rgba(167,139,250,1)", // purple
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: '#0d0b21' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#a78bfa]" />
            <span className="text-[#a78bfa] text-sm font-semibold tracking-widest uppercase">Global Footprint</span>
            <div className="h-px w-8 bg-[#a78bfa]" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-6">
            Exporting From <span className="gradient-text">India</span> To The World
          </h2>
          <p className="text-[#8b83b0] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Our premium notebooks reach students and businesses across the globe. Visualizing our growing international presence.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] rounded-2xl overflow-hidden border border-[#7c5cbf]/20 bg-[#12102b]/50 backdrop-blur-sm p-4 md:p-8">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="relative w-full h-full">
            {/* SVG Map Background - Inverting colors via CSS filters to match dark theme */}
            <div 
              className="absolute inset-0 opacity-40 mix-blend-screen"
              style={{
                backgroundImage: "url('/world-map.svg')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: "invert(1) sepia(1) hue-rotate(200deg) saturate(3) brightness(0.8)"
              }}
            />

            {/* Connection Lines (Approximated with SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: mounted ? 1 : 0, transition: 'opacity 1s ease-in' }}>
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={origin.color} stopOpacity="0.8" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {destinations.map((dest, i) => {
                // We use simple straight lines for the visual
                return (
                  <line
                    key={i}
                    x1={origin.left}
                    y1={origin.top}
                    x2={dest.left}
                    y2={dest.top}
                    stroke="url(#lineGrad)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-pulse"
                    style={{ animationDelay: dest.delay }}
                  />
                );
              })}
            </svg>

            {/* Map Markers */}
            <div className={`transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
              
              {/* Origin Marker */}
              <div 
                className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20 group"
                style={{ top: origin.top, left: origin.left }}
              >
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-8 h-8 rounded-full animate-ping" style={{ backgroundColor: origin.color, opacity: 0.4 }}></div>
                  <div className="absolute w-12 h-12 rounded-full animate-pulse" style={{ backgroundColor: origin.color, opacity: 0.2 }}></div>
                  <div className="w-4 h-4 rounded-full border-2 border-[#12102b] z-10" style={{ backgroundColor: origin.color, boxShadow: `0 0 15px ${origin.color}` }}></div>
                </div>
                <div className="absolute top-6 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#12102b]/90 border border-[#7c5cbf]/40 text-white text-xs font-bold shadow-xl backdrop-blur-md transition-transform transform scale-0 group-hover:scale-100 origin-top">
                  {origin.name} (Origin)
                </div>
              </div>

              {/* Destination Markers */}
              {destinations.map((dest, idx) => (
                <div 
                  key={idx}
                  className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 z-10 group cursor-pointer"
                  style={{ top: dest.top, left: dest.left }}
                >
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-6 h-6 rounded-full animate-ping" style={{ backgroundColor: dest.color, opacity: 0.4, animationDelay: dest.delay }}></div>
                    <div className="w-3 h-3 rounded-full border border-[#12102b]" style={{ backgroundColor: dest.color, boxShadow: `0 0 10px ${dest.color}` }}></div>
                  </div>
                  <div className="absolute bottom-5 whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#12102b]/90 border text-white text-xs font-bold shadow-xl backdrop-blur-md transition-transform transform scale-0 group-hover:scale-100 origin-bottom" style={{ borderColor: dest.color }}>
                    {dest.name}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: origin.color, boxShadow: `0 0 8px ${origin.color}` }}></span>
            <span className="text-[#c4b5fd] text-sm font-medium">India (Manufacturing)</span>
          </div>
          {destinations.map((dest, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: dest.color, boxShadow: `0 0 8px ${dest.color}` }}></span>
              <span className="text-[#8b83b0] text-sm font-medium">{dest.name} Market</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
