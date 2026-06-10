/* ──────────────────────────────────────────────
   BuyersSection.tsx
   Animated 3D scene: buyers from around the world
   walking toward Krishna Copy Udyog
────────────────────────────────────────────── */

const BUYER_STYLES = `

/* ── BUYERS SECTION – all animations ── */

@keyframes walkRight {
  0%   { transform: translateX(-120px); opacity:0; }
  10%  { opacity: 1; }
  80%  { transform: translateX(0px); opacity:1; }
  92%  { transform: translateX(0px); opacity:1; }
  100% { transform: translateX(-120px); opacity:0; }
}
@keyframes walkLeft {
  0%   { transform: translateX(120px); opacity:0; }
  10%  { opacity: 1; }
  80%  { transform: translateX(0px); opacity:1; }
  92%  { transform: translateX(0px); opacity:1; }
  100% { transform: translateX(120px); opacity:0; }
}
@keyframes walkRightFar {
  0%   { transform: translateX(-200px); opacity:0; }
  10%  { opacity: 1; }
  80%  { transform: translateX(0px); opacity:1; }
  92%  { transform: translateX(0px); opacity:1; }
  100% { transform: translateX(-200px); opacity:0; }
}
@keyframes walkLeftFar {
  0%   { transform: translateX(200px); opacity:0; }
  10%  { opacity: 1; }
  80%  { transform: translateX(0px); opacity:1; }
  92%  { transform: translateX(0px); opacity:1; }
  100% { transform: translateX(200px); opacity:0; }
}

/* body bob while walking */
@keyframes bodyBob {
  0%,100% { transform: translateY(0px); }
  25%     { transform: translateY(-4px); }
  75%     { transform: translateY(-2px); }
}

/* arm swing */
@keyframes armSwingF {
  0%,100% { transform: rotate(-25deg); }
  50%     { transform: rotate(25deg); }
}
@keyframes armSwingB {
  0%,100% { transform: rotate(25deg); }
  50%     { transform: rotate(-25deg); }
}

/* leg swing */
@keyframes legSwingF {
  0%,100% { transform: rotate(-20deg); }
  50%     { transform: rotate(20deg); }
}
@keyframes legSwingB {
  0%,100% { transform: rotate(20deg); }
  50%     { transform: rotate(-20deg); }
}

/* speech bubble pops up */
@keyframes bubblePop {
  0%,72%  { transform: scale(0) translateY(10px); opacity:0; }
  78%     { transform: scale(1.1) translateY(-2px); opacity:1; }
  84%,92% { transform: scale(1) translateY(0); opacity:1; }
  100%    { transform: scale(0) translateY(10px); opacity:0; }
}

/* brand logo glow pulse */
@keyframes brandGlow {
  0%,100% { box-shadow: 0 0 30px rgba(124,92,191,0.4), 0 0 60px rgba(124,92,191,0.2); }
  50%     { box-shadow: 0 0 60px rgba(124,92,191,0.8), 0 0 100px rgba(167,139,250,0.4); }
}

/* notebook float above brand */
@keyframes notebookHover {
  0%,100% { transform: translateY(0px) rotate(-5deg); }
  50%     { transform: translateY(-10px) rotate(-5deg); }
}

/* ground shimmer */
@keyframes groundShimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}

/* counter count up feel */
@keyframes counterPop {
  0%   { transform: scale(0.8); opacity:0; }
  60%  { transform: scale(1.1); opacity:1; }
  100% { transform: scale(1); opacity:1; }
}

/* particle drift */
@keyframes buyerParticle {
  0%,100% { transform: translateY(0) translateX(0); opacity:0.6; }
  50%     { transform: translateY(-25px) translateX(8px); opacity:1; }
}

/* flag wave */
@keyframes flagWave {
  0%,100% { transform: skewY(0deg) scaleX(1); }
  25%     { transform: skewY(2deg) scaleX(0.96); }
  75%     { transform: skewY(-2deg) scaleX(1.04); }
}

/* highlight ring */
@keyframes ringExpand {
  0%   { transform: scale(0.8); opacity:0.7; }
  100% { transform: scale(2.2); opacity:0; }
}

.buyer-human { animation: bodyBob 0.5s ease-in-out infinite; }
.arm-f  { transform-origin: top center; animation: armSwingF 0.5s ease-in-out infinite; }
.arm-b  { transform-origin: top center; animation: armSwingB 0.5s ease-in-out infinite; }
.leg-f  { transform-origin: top center; animation: legSwingF 0.5s ease-in-out infinite; }
.leg-b  { transform-origin: top center; animation: legSwingB 0.5s ease-in-out infinite; }
`;

import { useEffect, useRef } from "react";

/* ── Tiny human figure ── */
function Human({
  color, flagColor, flagLabel, country, bubble, delay, side, scale = 1,
}: {
  color: string; flagColor: string; flagLabel: string;
  country: string; bubble: string; delay: string; side: "left" | "right"; scale?: number;
}) {
  const walkAnim  = side === "left" ? "walkRight" : "walkLeft";
  const dur = "7s";

  return (
    <div style={{
      position: "relative",
      animation: `${walkAnim} ${dur} ease-in-out ${delay} infinite`,
      transform: `scale(${scale})`,
      transformOrigin: "bottom center",
    }}>
      {/* Speech bubble */}
      <div style={{
        position: "absolute",
        bottom: "105%",
        left: side === "left" ? "50%" : "auto",
        right: side === "right" ? "50%" : "auto",
        transform: side === "left" ? "translateX(-50%)" : "translateX(50%)",
        background: "rgba(30,27,69,0.95)",
        border: "1px solid rgba(124,92,191,0.5)",
        borderRadius: 10,
        padding: "5px 10px",
        whiteSpace: "nowrap",
        fontSize: 10,
        fontWeight: 700,
        color: "#c4b5fd",
        boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
        animation: `bubblePop ${dur} ease-in-out ${delay} infinite`,
        zIndex: 10,
      }}>
        {bubble}
        {/* Tail */}
        <div style={{
          position: "absolute", bottom: -6, left: "50%", transform: "translateX(-50%)",
          width: 0, height: 0,
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderTop: "6px solid rgba(124,92,191,0.5)",
        }} />
      </div>

      {/* Flag */}
      <div style={{
        position: "absolute",
        top: -28,
        left: side === "left" ? 2 : -8,
        display: "flex", alignItems: "flex-start", gap: 2,
      }}>
        <div style={{ width: 1.5, height: 22, background: "rgba(200,200,200,0.6)", borderRadius: 1 }} />
        <div style={{
          width: 18, height: 12,
          background: flagColor,
          borderRadius: 2,
          animation: "flagWave 1s ease-in-out infinite",
          fontSize: 7, display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}>
          {flagLabel}
        </div>
      </div>

      {/* Country label */}
      <div style={{
        textAlign: "center", fontSize: 9, fontWeight: 700,
        color: "rgba(167,139,250,0.8)", marginBottom: 2, letterSpacing: 0.5,
      }}>
        {country}
      </div>

      {/* Human body */}
      <div className="buyer-human" style={{ position: "relative", width: 32, height: 70 }}>
        {/* Head */}
        <div style={{
          width: 18, height: 18, borderRadius: "50%",
          background: `linear-gradient(135deg, ${color}, ${color}cc)`,
          margin: "0 auto",
          boxShadow: `0 0 10px ${color}44`,
          position: "relative", zIndex: 3,
        }}>
          {/* Eyes */}
          <div style={{ position:"absolute", top:6, left:4, width:3, height:3, borderRadius:"50%", background:"rgba(255,255,255,0.9)" }} />
          <div style={{ position:"absolute", top:6, right:4, width:3, height:3, borderRadius:"50%", background:"rgba(255,255,255,0.9)" }} />
        </div>

        {/* Torso */}
        <div style={{
          width: 20, height: 24,
          background: `linear-gradient(180deg, ${color} 0%, ${color}bb 100%)`,
          margin: "2px auto 0",
          borderRadius: "4px 4px 2px 2px",
          position: "relative", zIndex: 3,
        }} />

        {/* Left arm */}
        <div className="arm-f" style={{
          position: "absolute", top: 20, left: 1,
          width: 7, height: 20, borderRadius: 4,
          background: color, zIndex: 2,
        }} />
        {/* Right arm */}
        <div className="arm-b" style={{
          position: "absolute", top: 20, right: 1,
          width: 7, height: 20, borderRadius: 4,
          background: `${color}cc`, zIndex: 1,
        }} />

        {/* Left leg */}
        <div className="leg-f" style={{
          position: "absolute", bottom: 0, left: 5,
          width: 9, height: 26, borderRadius: "2px 2px 6px 6px",
          background: `linear-gradient(180deg, ${color}dd 0%, #2a1d60 100%)`,
          zIndex: 3,
        }} />
        {/* Right leg */}
        <div className="leg-b" style={{
          position: "absolute", bottom: 0, right: 5,
          width: 9, height: 26, borderRadius: "2px 2px 6px 6px",
          background: `linear-gradient(180deg, ${color}bb 0%, #1e1b45 100%)`,
          zIndex: 2,
        }} />
      </div>
    </div>
  );
}

/* ── Stat counter card ── */
function StatCard({ number, label, icon, delay }: { number: string; label: string; icon: string; delay: string }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
      padding: "16px 20px",
      background: "rgba(30,27,69,0.6)",
      border: "1px solid rgba(124,92,191,0.25)",
      borderRadius: 16, backdropFilter: "blur(10px)",
      animation: `counterPop 0.6s ease-out ${delay} both`,
      boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
    }}>
      <div style={{ fontSize: 24 }}>{icon}</div>
      <div style={{ fontSize: 22, fontWeight: 900, color: "#a78bfa", lineHeight: 1 }}>{number}</div>
      <div style={{ fontSize: 10, fontWeight: 600, color: "#8b83b0", textAlign: "center", letterSpacing: "0.08em" }}>{label}</div>
    </div>
  );
}

/* ── Ring expand highlight ── */
function ExpandRing({ delay }: { delay: string }) {
  return (
    <div style={{
      position: "absolute",
      width: 60, height: 60, borderRadius: "50%",
      border: "2px solid rgba(167,139,250,0.5)",
      top: "50%", left: "50%", transform: "translate(-50%,-50%)",
      animation: `ringExpand 2s ease-out ${delay} infinite`,
      pointerEvents: "none",
    }} />
  );
}

/* ── Main Section ── */
export function BuyersSection() {
  const injected = useRef(false);
  useEffect(() => {
    if (injected.current) return;
    injected.current = true;
    const s = document.createElement("style");
    s.textContent = BUYER_STYLES;
    document.head.appendChild(s);
  }, []);

  const buyers = [
    // Left side buyers
    {
      color:"#e8a87c", flagColor:"#138808", flagLabel:"🇮🇳", country:"India",
      bubble:"Best bulk pricing!", delay:"0s", side:"left" as const, scale:1,
    },
    {
      color:"#8ecae6", flagColor:"#009B3A", flagLabel:"🇳🇬", country:"Nigeria",
      bubble:"Great quality!", delay:"1.2s", side:"left" as const, scale:0.85,
    },
    {
      color:"#b5838d", flagColor:"#006233", flagLabel:"🇸🇦", country:"Gulf",
      bubble:"Fast shipping!", delay:"2.4s", side:"left" as const, scale:0.78,
    },
    // Right side buyers
    {
      color:"#a8dadc", flagColor:"#003580", flagLabel:"🇳🇵", country:"Nepal",
      bubble:"ZED certified!", delay:"0.6s", side:"right" as const, scale:1,
    },
    {
      color:"#e9c46a", flagColor:"#006B3F", flagLabel:"🇧🇩", country:"Bangladesh",
      bubble:"Bulk order done!", delay:"1.8s", side:"right" as const, scale:0.85,
    },
    {
      color:"#c8b6e2", flagColor:"#E03C31", flagLabel:"🇰🇪", country:"Kenya",
      bubble:"Love these notebooks!", delay:"3s", side:"right" as const, scale:0.78,
    },
  ];

  return (
    <section
      id="buyers"
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f0d27 0%, #161040 50%, #0f0d27 100%)" }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(167,139,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Floating particles */}
      {[
        {x:"8%",y:"15%",d:"0s"},{x:"88%",y:"20%",d:"0.7s"},{x:"20%",y:"75%",d:"1.2s"},
        {x:"78%",y:"70%",d:"1.8s"},{x:"50%",y:"10%",d:"0.4s"},{x:"35%",y:"85%",d:"2.1s"},
      ].map((p,i) => (
        <div key={i} style={{
          position:"absolute", left:p.x, top:p.y,
          width:4, height:4, borderRadius:"50%",
          background:"rgba(167,139,250,0.7)",
          animation:`buyerParticle ${3+i*0.4}s ease-in-out ${p.d} infinite`,
          boxShadow:"0 0 8px rgba(167,139,250,0.8)",
        }} />
      ))}

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-3" style={{ color:"#a78bfa" }}>
            Trusted Worldwide
          </p>
          <h2 className="font-display font-black text-white leading-tight mb-4"
            style={{ fontSize:"clamp(1.8rem, 4vw, 3rem)" }}>
            Buyers Choose{" "}
            <span style={{
              background:"linear-gradient(135deg, #FFD700, #a78bfa)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
            }}>
              Krishna Copy Udyog
            </span>
          </h2>
          <p className="text-[#8b83b0] text-base max-w-xl mx-auto">
            From India to Africa, Gulf to Nepal — buyers across the globe trust us for quality notebooks at bulk prices.
          </p>
        </div>

        {/* ── 3D ANIMATED SCENE ── */}
        <div style={{
          position:"relative", height:280,
          display:"flex", alignItems:"flex-end", justifyContent:"center",
          margin:"0 auto", maxWidth:800,
        }}>

          {/* Ground shimmer line */}
          <div style={{
            position:"absolute", bottom:30, left:0, right:0, height:2,
            background:"linear-gradient(90deg, transparent, rgba(124,92,191,0.4), rgba(255,215,0,0.3), rgba(124,92,191,0.4), transparent)",
            backgroundSize:"200% auto",
            animation:"groundShimmer 2.5s linear infinite",
            boxShadow:"0 0 20px rgba(124,92,191,0.3)",
          }} />

          {/* ── BUYERS FROM LEFT ── */}
          <div style={{
            position:"absolute", left:0, bottom:32,
            display:"flex", alignItems:"flex-end", gap:20,
          }}>
            {buyers.filter(b => b.side === "left").map((b,i) => (
              <Human key={i} {...b} />
            ))}
          </div>

          {/* ── BUYERS FROM RIGHT ── */}
          <div style={{
            position:"absolute", right:0, bottom:32,
            display:"flex", alignItems:"flex-end", gap:20,
            flexDirection:"row-reverse",
          }}>
            {buyers.filter(b => b.side === "right").map((b,i) => (
              <Human key={i} {...b} />
            ))}
          </div>

          {/* ── CENTER BRAND ── */}
          <div style={{
            position:"absolute",
            bottom:24, left:"50%", transform:"translateX(-50%)",
            display:"flex", flexDirection:"column", alignItems:"center",
            zIndex:15,
          }}>
            {/* Expanding rings */}
            <div style={{ position:"relative", width:80, height:80, marginBottom:4 }}>
              <ExpandRing delay="0s" />
              <ExpandRing delay="0.7s" />
              <ExpandRing delay="1.4s" />

              {/* Brand circle */}
              <div style={{
                position:"absolute", top:"50%", left:"50%",
                transform:"translate(-50%,-50%)",
                width:64, height:64, borderRadius:"50%",
                background:"linear-gradient(135deg, #7c5cbf, #a78bfa)",
                animation:"brandGlow 2s ease-in-out infinite",
                display:"flex", alignItems:"center", justifyContent:"center",
                flexDirection:"column",
                boxShadow:"0 0 40px rgba(124,92,191,0.6), 0 0 80px rgba(124,92,191,0.3)",
              }}>
                <div style={{ fontSize:10, fontWeight:900, color:"white", textAlign:"center", letterSpacing:"0.05em", lineHeight:1.2 }}>
                  KCU
                </div>
                <div style={{ fontSize:7, color:"rgba(255,255,255,0.7)", letterSpacing:"0.1em" }}>PATNA</div>
              </div>

              {/* Floating mini notebook above brand */}
              <div style={{
                position:"absolute", top:-40, left:"50%", transform:"translateX(-50%)",
                animation:"notebookHover 3s ease-in-out infinite",
              }}>
                <div style={{
                  width:28, height:36,
                  background:"linear-gradient(145deg,#3b2a70,#1e1b45)",
                  borderRadius:"2px 6px 6px 2px",
                  boxShadow:"3px 4px 12px rgba(0,0,0,0.5), 0 0 20px rgba(255,215,0,0.3)",
                  border:"1px solid rgba(124,92,191,0.4)",
                  display:"flex", flexDirection:"column", gap:2, padding:"4px 4px 4px 6px",
                }}>
                  <div style={{ height:1, background:"rgba(167,139,250,0.5)" }} />
                  <div style={{ height:1, background:"rgba(124,92,191,0.3)" }} />
                  <div style={{ height:1, background:"rgba(124,92,191,0.3)" }} />
                  <div style={{ height:1, background:"rgba(124,92,191,0.3)", width:"70%" }} />
                </div>
                {/* Golden glow from notebook */}
                <div style={{
                  position:"absolute", bottom:-4, left:"50%", transform:"translateX(-50%)",
                  width:20, height:8,
                  background:"radial-gradient(ellipse, rgba(255,215,0,0.6) 0%, transparent 100%)",
                  filter:"blur(4px)",
                }} />
              </div>
            </div>

            <div style={{
              fontSize:9, fontWeight:800, color:"rgba(196,181,253,0.8)",
              letterSpacing:"0.15em", textTransform:"uppercase", marginTop:2,
            }}>
              Krishna Copy Udyog
            </div>
          </div>
        </div>

        {/* ── STAT CARDS ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">
          <StatCard number="500+" label="Happy Buyers" icon="🤝" delay="0.1s" />
          <StatCard number="5L+" label="Units / Month" icon="📚" delay="0.2s" />
          <StatCard number="10+" label="Countries" icon="🌍" delay="0.3s" />
          <StatCard number="4+" label="Years of Trust" icon="⭐" delay="0.4s" />
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-base transition-all hover:-translate-y-1"
            style={{
              background:"linear-gradient(135deg, #7c5cbf, #a78bfa)",
              boxShadow:"0 0 30px rgba(124,92,191,0.5)",
            }}
          >
            🛒 Join Thousands of Buyers — Get Bulk Quote
          </a>
        </div>
      </div>
    </section>
  );
}
