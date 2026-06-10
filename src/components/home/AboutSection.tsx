import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

/* ─── Inline styles injected once ─── */
const STYLES = `
@keyframes notebookFloat {
  0%, 100% { transform: rotateX(12deg) rotateY(-18deg) translateY(0px); }
  50%       { transform: rotateX(12deg) rotateY(-18deg) translateY(-14px); }
}

@keyframes pageTurn {
  0%        { transform: rotateY(0deg);   z-index: 10; }
  49%       { transform: rotateY(-90deg); z-index: 10; }
  50%       { transform: rotateY(-90deg); z-index: 1;  }
  100%      { transform: rotateY(-180deg);z-index: 1;  }
}

@keyframes pageTurn2 {
  0%        { transform: rotateY(0deg);   z-index: 10; }
  49%       { transform: rotateY(-90deg); z-index: 10; }
  50%       { transform: rotateY(-90deg); z-index: 1;  }
  100%      { transform: rotateY(-180deg);z-index: 1;  }
}

@keyframes pageTurn3 {
  0%        { transform: rotateY(0deg);   z-index: 10; }
  49%       { transform: rotateY(-90deg); z-index: 10; }
  50%       { transform: rotateY(-90deg); z-index: 1;  }
  100%      { transform: rotateY(-180deg);z-index: 1;  }
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.35; transform: scale(1);    }
  50%      { opacity: 0.55; transform: scale(1.06); }
}

@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}

.notebook-scene {
  perspective: 900px;
  perspective-origin: 50% 40%;
}

.notebook-body {
  transform-style: preserve-3d;
  animation: notebookFloat 4.5s ease-in-out infinite;
}

/* pages share same origin – the spine */
.page-wrapper {
  transform-style: preserve-3d;
  transform-origin: left center;
  position: absolute;
  inset: 0;
  left: 50%;
  width: 50%;
}

.page1 { animation: pageTurn  3s ease-in-out 0s   infinite; }
.page2 { animation: pageTurn2 3s ease-in-out 1s   infinite; }
.page3 { animation: pageTurn3 3s ease-in-out 2s   infinite; }

.page-face {
  backface-visibility: hidden;
  position: absolute;
  inset: 0;
}

.page-back {
  transform: rotateY(180deg);
  backface-visibility: hidden;
  position: absolute;
  inset: 0;
}

.notebook-glow {
  animation: glowPulse 3s ease-in-out infinite;
}

.line-shimmer {
  background: linear-gradient(
    90deg,
    rgba(167,139,250,0.06) 0%,
    rgba(167,139,250,0.18) 50%,
    rgba(167,139,250,0.06) 100%
  );
  background-size: 200% auto;
  animation: shimmer 2.8s linear infinite;
}
`;

/* ─── Tiny line helper ─── */
function RuledLines({ count = 10, color = "rgba(124,92,191,0.18)" }: { count?: number; color?: string }) {
  return (
    <div className="flex flex-col gap-[9px] px-4 pt-3 w-full">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 1,
            borderRadius: 1,
            background: i === 0 ? "rgba(167,139,250,0.5)" : color,
            width: i % 3 === 2 ? "70%" : "100%",
          }}
        />
      ))}
    </div>
  );
}

/* ─── 3-D Notebook Component ─── */
function AnimatedNotebook() {
  const injected = useRef(false);
  useEffect(() => {
    if (injected.current) return;
    injected.current = true;
    const el = document.createElement("style");
    el.textContent = STYLES;
    document.head.appendChild(el);
  }, []);

  const coverColor = "linear-gradient(145deg, #3b2a70 0%, #1e1b45 60%, #2d1b69 100%)";
  const pageColor  = "#f5f0ff";
  const spineColor = "linear-gradient(180deg, #5c3fa3 0%, #3b2a70 100%)";

  return (
    <div className="notebook-scene w-full flex items-center justify-center" style={{ height: 420 }}>
      {/* Glow blob */}
      <div
        className="absolute rounded-full notebook-glow pointer-events-none"
        style={{
          width: 340, height: 240,
          background: "radial-gradient(ellipse, rgba(124,92,191,0.55) 0%, transparent 70%)",
          filter: "blur(40px)",
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />

      {/* Main notebook */}
      <div className="notebook-body relative" style={{ width: 340, height: 260 }}>

        {/* Shadow on table */}
        <div style={{
          position: "absolute", bottom: -30, left: "50%",
          transform: "translateX(-50%)",
          width: 280, height: 24,
          background: "radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 75%)",
          filter: "blur(8px)",
        }} />

        {/* Whole book wrapper for 3-D */}
        <div style={{
          width: "100%", height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}>

          {/* ── BACK COVER ── */}
          <div style={{
            position: "absolute", inset: 0,
            background: coverColor,
            borderRadius: "4px 12px 12px 4px",
            boxShadow: "4px 8px 30px rgba(0,0,0,0.5)",
            transform: "translateZ(-6px)",
          }} />

          {/* ── SPINE ── */}
          <div style={{
            position: "absolute",
            left: 0, top: 0,
            width: 18, height: "100%",
            background: spineColor,
            borderRadius: "4px 0 0 4px",
            transform: "translateZ(0px)",
            boxShadow: "inset -3px 0 6px rgba(0,0,0,0.3)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 6,
          }}>
            {[...Array(5)].map((_, i) => (
              <div key={i} style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.4)" }} />
            ))}
          </div>

          {/* ── INNER PAGES (static stack) ── */}
          {[4, 3, 2].map((z) => (
            <div key={z} style={{
              position: "absolute",
              top: 4, bottom: 4, left: 18, right: 4,
              background: pageColor,
              borderRadius: "2px 10px 10px 2px",
              transform: `translateZ(${z}px)`,
              boxShadow: "inset 0 0 6px rgba(0,0,0,0.06)",
            }} />
          ))}

          {/* ── RIGHT PAGE (visible base) ── */}
          <div style={{
            position: "absolute",
            top: 2, bottom: 2, left: 18, right: 2,
            background: pageColor,
            borderRadius: "2px 12px 12px 2px",
            transform: "translateZ(6px)",
            overflow: "hidden",
          }}>
            <RuledLines count={12} />
            {/* Red margin line */}
            <div style={{
              position: "absolute", top: 0, bottom: 0, left: 38,
              width: 1, background: "rgba(220,80,80,0.35)",
            }} />
          </div>

          {/* ── LEFT PAGE ── */}
          <div style={{
            position: "absolute",
            top: 2, bottom: 2, left: 2, right: "50%",
            background: "#eee8ff",
            borderRadius: "12px 2px 2px 12px",
            transform: "translateZ(6px)",
            overflow: "hidden",
          }}>
            <RuledLines count={12} color="rgba(124,92,191,0.14)" />
            {/* date row */}
            <div style={{
              position: "absolute", top: 10, right: 10,
              fontSize: 8, color: "rgba(100,80,150,0.6)", fontWeight: 700, letterSpacing: 1,
            }}>
              KCU
            </div>
          </div>

          {/* ── FRONT COVER ── */}
          <div style={{
            position: "absolute", inset: 0,
            background: coverColor,
            borderRadius: "4px 12px 12px 4px",
            transform: "translateZ(8px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: 8,
            boxShadow: "0 4px 20px rgba(0,0,0,0.35), inset 0 0 40px rgba(124,92,191,0.1)",
            overflow: "hidden",
          }}>
            {/* Cover decoration */}
            <div style={{
              width: "60%", height: 2,
              background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.7), transparent)",
              marginBottom: 4,
            }} />
            <div style={{
              fontSize: 11, fontWeight: 800, letterSpacing: "0.15em",
              color: "rgba(196,181,253,0.9)", textTransform: "uppercase",
            }}>
              Krishna Copy
            </div>
            <div style={{
              fontSize: 8, letterSpacing: "0.2em",
              color: "rgba(139,131,176,0.8)", textTransform: "uppercase",
            }}>
              Udyog
            </div>
            <div style={{
              width: "40%", height: 1,
              background: "linear-gradient(90deg, transparent, rgba(124,92,191,0.5), transparent)",
              marginTop: 4,
            }} />
            {/* Ruled lines peek on cover */}
            <div style={{ position: "absolute", bottom: 20, left: 20, right: 20, opacity: 0.15 }}>
              <RuledLines count={5} color="rgba(167,139,250,0.8)" />
            </div>
          </div>

          {/* ── PAGE TURN ANIMATIONS ── */}
          {/* Each "page" sits at the center spine and flips left */}
          {[
            { cls: "page1 page-wrapper", bg: "#f0ebff", rugColor: "rgba(124,92,191,0.15)" },
            { cls: "page2 page-wrapper", bg: "#f5f2ff", rugColor: "rgba(124,92,191,0.12)" },
            { cls: "page3 page-wrapper", bg: "#faf8ff", rugColor: "rgba(124,92,191,0.10)" },
          ].map(({ cls, bg, rugColor }, idx) => (
            <div key={idx} className={cls} style={{ top: 2, bottom: 2, zIndex: 10 - idx }}>
              {/* front of turning page */}
              <div className="page-face" style={{
                background: bg,
                borderRadius: "2px 12px 12px 2px",
                overflow: "hidden",
                boxShadow: "-2px 0 12px rgba(0,0,0,0.08)",
              }}>
                <RuledLines count={12} color={rugColor} />
                <div style={{
                  position: "absolute", top: 0, bottom: 0, left: 6,
                  width: 1, background: "rgba(220,80,80,0.2)",
                }} />
              </div>
              {/* back of turning page */}
              <div className="page-back" style={{
                background: "#e8e2f8",
                borderRadius: "12px 2px 2px 12px",
                overflow: "hidden",
              }}>
                <RuledLines count={12} color="rgba(124,92,191,0.10)" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export function AboutSection() {
  const points = [
    "Patna, Bihar based notebook & register manufacturing",
    "Wholesale supply for bulk buyers and distributors",
    "Custom bulk orders with tailored specifications",
    "Quality-focused finishing meeting international standards",
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ background: '#13112c' }}
    >
      {/* Background decorations */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 60%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #7c5cbf 0%, transparent 60%)' }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Column — 3D Notebook */}
          <div className="w-full lg:w-1/2 relative flex flex-col items-center">
            <AnimatedNotebook />

            {/* Floating info card */}
            <div
              className="mt-4 rounded-2xl p-5 max-w-xs w-full"
              style={{
                background: 'rgba(30,27,69,0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(124,92,191,0.4)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 40px rgba(124,92,191,0.15)',
              }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#7c5cbf]/20">
                  <span className="text-xl">🏭</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Est. 2019 · Patna, Bihar</h4>
                  <p className="text-[#a78bfa] text-xs">Suraj Kumar, Founder</p>
                </div>
              </div>
              <p className="text-sm text-[#8b83b0] leading-relaxed">
                A ZED-certified manufacturing facility producing 5 Lakh+ notebooks per month for global buyers.
              </p>
            </div>
          </div>

          {/* Right Column — Text Content */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: '#a78bfa' }}>
              About Us
            </p>
            <h2
              className="font-display font-black text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              About{' '}
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
            <p className="text-base text-[#8b83b0] leading-relaxed mb-8">
              Krishna Copy Udyog is a ZED-certified school notebook manufacturer based in Patna, Bihar, India.
              Founded in 2019 by Mr. Suraj Kumar, we have grown to produce 5 Lakh+ notebooks per month.
              We manufacture school notebooks, exercise books, spiral registers, and custom stationery for
              bulk buyers, wholesalers, and international importers across Africa, Gulf countries, Nepal, and
              Bangladesh. Our products meet international quality standards backed by MSME, GST, IEC, and
              ZED certifications.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#7c5cbf' }} />
                  <span className="text-white/90 text-base">{point}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="h-14 px-8 rounded-2xl text-base font-bold text-white gap-2 transition-all hover:-translate-y-1"
              style={{
                background: 'rgba(124,92,191,0.15)',
                border: '1px solid rgba(124,92,191,0.5)',
                boxShadow: '0 0 20px rgba(124,92,191,0.2)'
              }}
            >
              <a href="#contact">
                Partner With Us <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
