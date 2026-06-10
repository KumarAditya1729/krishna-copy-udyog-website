import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   ALL CSS ANIMATIONS
───────────────────────────────────────────── */
const HERO_STYLES = `
/* ── Book floats gently in 3-D ── */
@keyframes bookFloat {
  0%,100% { transform: rotateX(10deg) rotateY(-18deg) translateY(0px); }
  50%      { transform: rotateX(10deg) rotateY(-18deg) translateY(-18px); }
}

/* ── Cover opens once on load ── */
@keyframes coverOpen {
  0%   { transform: translateZ(14px) rotateY(0deg); }
  25%  { transform: translateZ(14px) rotateY(-50deg); }
  55%  { transform: translateZ(14px) rotateY(-100deg); }
  100% { transform: translateZ(14px) rotateY(-140deg); }
}

/* ── Pages turn (start after cover opens) ── */
@keyframes pt1 {
  0%   { transform:rotateY(0deg);    z-index:10; }
  44%  { transform:rotateY(-84deg);  z-index:10; }
  50%  { transform:rotateY(-90deg);  z-index:1;  }
  100% { transform:rotateY(-180deg); z-index:1;  }
}
@keyframes pt2 {
  0%   { transform:rotateY(0deg);    z-index:10; }
  44%  { transform:rotateY(-84deg);  z-index:10; }
  50%  { transform:rotateY(-90deg);  z-index:1;  }
  100% { transform:rotateY(-180deg); z-index:1;  }
}
@keyframes pt3 {
  0%   { transform:rotateY(0deg);    z-index:10; }
  44%  { transform:rotateY(-84deg);  z-index:10; }
  50%  { transform:rotateY(-90deg);  z-index:1;  }
  100% { transform:rotateY(-180deg); z-index:1;  }
}

/* ── Golden glow pulse on pages ── */
@keyframes pageGlow {
  0%,100% { opacity:0.5; }
  50%     { opacity:1;   }
}

/* ── Fairy dust flies out ── */
@keyframes f1  { 0%{transform:translate(0,0) scale(1);opacity:1;} 100%{transform:translate(-100px,-160px) scale(0.1);opacity:0;} }
@keyframes f2  { 0%{transform:translate(0,0) scale(1);opacity:1;} 100%{transform:translate(-30px,-180px) scale(0.12);opacity:0;} }
@keyframes f3  { 0%{transform:translate(0,0) scale(1);opacity:1;} 100%{transform:translate(60px,-150px) scale(0.1);opacity:0;} }
@keyframes f4  { 0%{transform:translate(0,0) scale(1);opacity:1;} 100%{transform:translate(120px,-120px) scale(0.12);opacity:0;} }
@keyframes f5  { 0%{transform:translate(0,0) scale(1);opacity:1;} 100%{transform:translate(-120px,-90px) scale(0.08);opacity:0;} }
@keyframes f6  { 0%{transform:translate(0,0) scale(1);opacity:1;} 100%{transform:translate(80px,-170px) scale(0.14);opacity:0;} }
@keyframes f7  { 0%{transform:translate(0,0) scale(1);opacity:1;} 100%{transform:translate(-60px,-190px) scale(0.1);opacity:0;} }
@keyframes f8  { 0%{transform:translate(0,0) scale(1);opacity:1;} 100%{transform:translate(140px,-100px) scale(0.09);opacity:0;} }
@keyframes f9  { 0%{transform:translate(0,0) scale(1);opacity:1;} 100%{transform:translate(-140px,-70px) scale(0.11);opacity:0;} }
@keyframes f10 { 0%{transform:translate(0,0) scale(1);opacity:1;} 100%{transform:translate(10px,-200px) scale(0.08);opacity:0;} }
@keyframes f11 { 0%{transform:translate(0,0) scale(1);opacity:1;} 100%{transform:translate(-80px,-130px) scale(0.12);opacity:0;} }
@keyframes f12 { 0%{transform:translate(0,0) scale(1);opacity:1;} 100%{transform:translate(100px,-155px) scale(0.1);opacity:0;} }
@keyframes f13 { 0%{transform:translate(0,0) scale(1);opacity:1;} 100%{transform:translate(-40px,-210px) scale(0.09);opacity:0;} }
@keyframes f14 { 0%{transform:translate(0,0) scale(1);opacity:1;} 100%{transform:translate(50px,-195px) scale(0.1);opacity:0;} }
@keyframes f15 { 0%{transform:translate(0,0) scale(1);opacity:1;} 100%{transform:translate(-160px,-50px) scale(0.08);opacity:0;} }

/* ── Continuous floating sparks ── */
@keyframes spark1 { 0%{transform:translate(0,0);opacity:0.9;} 100%{transform:translate(-18px,-100px);opacity:0;} }
@keyframes spark2 { 0%{transform:translate(0,0);opacity:0.8;} 100%{transform:translate(12px,-120px);opacity:0;} }
@keyframes spark3 { 0%{transform:translate(0,0);opacity:0.85;} 100%{transform:translate(-8px,-90px);opacity:0;} }
@keyframes spark4 { 0%{transform:translate(0,0);opacity:0.75;} 100%{transform:translate(20px,-80px);opacity:0;} }
@keyframes spark5 { 0%{transform:translate(0,0);opacity:0.9;} 100%{transform:translate(-22px,-110px);opacity:0;} }
@keyframes spark6 { 0%{transform:translate(0,0);opacity:0.7;} 100%{transform:translate(5px,-130px);opacity:0;} }

/* ── Twinkling stars ── */
@keyframes twinkle { 0%,100%{opacity:0.1;transform:scale(0.4);} 50%{opacity:1;transform:scale(1.4);} }

/* ── Soft ambient golden glow ── */
@keyframes ambGlow { 0%,100%{opacity:0.4;transform:scale(1);} 50%{opacity:0.75;transform:scale(1.1);} }

/* ── Floating gold orb ── */
@keyframes orbDrift { 0%,100%{transform:translate(0,0);} 40%{transform:translate(-14px,-22px);} 70%{transform:translate(10px,-10px);} }

/* css class bindings */
.h-book-scene  { perspective:1000px; perspective-origin:55% 42%; }
.h-book-body   { transform-style:preserve-3d; animation:bookFloat 5s ease-in-out infinite; }
.h-cover       { transform-style:preserve-3d; transform-origin:left center; position:absolute; inset:0; animation:coverOpen 2.8s cubic-bezier(.4,0,.2,1) 0.4s both; backface-visibility:hidden; }
.h-pw          { transform-style:preserve-3d; transform-origin:left center; position:absolute; top:2px; bottom:2px; left:50%; width:50%; }
.h-pw .pf      { backface-visibility:hidden; position:absolute; inset:0; border-radius:2px 14px 14px 2px; overflow:hidden; }
.h-pw .pb      { backface-visibility:hidden; position:absolute; inset:0; transform:rotateY(180deg); border-radius:14px 2px 2px 14px; overflow:hidden; background:#d8d0f0; }
.h-pw1         { animation:pt1 3.8s ease-in-out 3.3s infinite; }
.h-pw2         { animation:pt2 3.8s ease-in-out 4.6s infinite; }
.h-pw3         { animation:pt3 3.8s ease-in-out 5.9s infinite; }
`;

/* ── Ruled lines ── */
function Lines({ n = 11, c = "rgba(124,92,191,0.17)", marg = false }: { n?: number; c?: string; marg?: boolean }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:9, padding:"10px 14px 0", width:"100%", position:"relative" }}>
      {marg && <div style={{ position:"absolute", top:0, bottom:0, left:40, width:1, background:"rgba(220,80,80,0.3)" }} />}
      {Array.from({ length: n }).map((_,i) => (
        <div key={i} style={{
          height:1, borderRadius:1,
          background: i === 0 ? "rgba(167,139,250,0.6)" : c,
          width: i % 5 === 4 ? "62%" : "100%",
        }} />
      ))}
    </div>
  );
}

/* ── Fairy particle helper ── */
function Fairy({ anim, delay, size, color, origin }: {
  anim: string; delay: string; size: number; color: string;
  origin: { left: string; top: string };
}) {
  return (
    <div style={{
      position:"absolute",
      ...origin,
      width:size, height:size, borderRadius:"50%",
      background:color,
      boxShadow:`0 0 ${size*2}px ${size}px ${color}99, 0 0 ${size*5}px ${color}44`,
      animation:`${anim} 2.4s ease-out ${delay} infinite`,
      pointerEvents:"none", zIndex:30,
    }} />
  );
}

/* ── Twinkle star ── */
function Star({ x, y, d, s = 5 }: { x:string; y:string; d:string; s?:number }) {
  return (
    <div style={{
      position:"absolute", left:x, top:y,
      width:s, height:s,
      background:"#FFE066",
      clipPath:"polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
      animation:`twinkle ${1.5+parseFloat(d)*0.3}s ease-in-out ${d} infinite`,
      boxShadow:"0 0 10px #FFD70099",
      pointerEvents:"none", zIndex:25,
    }} />
  );
}

/* ── Main magic notebook scene ── */
function MagicNotebook() {
  const injected = useRef(false);
  useEffect(() => {
    if (injected.current) return;
    injected.current = true;
    const s = document.createElement("style");
    s.textContent = HERO_STYLES;
    document.head.appendChild(s);
  }, []);

  const cover  = "linear-gradient(145deg,#3b2a70 0%,#1e1b45 55%,#2a1860 100%)";
  const spine  = "linear-gradient(180deg,#6040b0 0%,#3b2a70 100%)";
  const W = 300, H = 230;
  const origin = { left:"50%", top:"58%" };

  const fairies = [
    {anim:"f1", d:"0s",    sz:9,  col:"#FFD700"},{anim:"f2",  d:"0.18s",sz:6,  col:"#FFF176"},
    {anim:"f3", d:"0.36s", sz:8,  col:"#FFEB3B"},{anim:"f4",  d:"0.52s",sz:5,  col:"#FFD700"},
    {anim:"f5", d:"0.68s", sz:10, col:"#FFF9C4"},{anim:"f6",  d:"0.85s",sz:6,  col:"#FFCA28"},
    {anim:"f7", d:"1.0s",  sz:7,  col:"#FFD700"},{anim:"f8",  d:"1.15s",sz:5,  col:"#FFF176"},
    {anim:"f9", d:"0.28s", sz:9,  col:"#FFEE58"},{anim:"f10", d:"0.62s",sz:6,  col:"#FFD700"},
    {anim:"f11",d:"0.92s", sz:7,  col:"#FFF9C4"},{anim:"f12", d:"1.22s",sz:5,  col:"#FFE082"},
    {anim:"f13",d:"0.45s", sz:8,  col:"#FFD700"},{anim:"f14", d:"0.78s",sz:6,  col:"#FFFDE7"},
    {anim:"f15",d:"1.3s",  sz:7,  col:"#FFD700"},
  ];

  const sparks = [
    {anim:"spark1",d:"0s",   x:"50%",y:"55%",col:"#FFD700",sz:4},
    {anim:"spark2",d:"0.6s", x:"52%",y:"57%",col:"#FFF176",sz:3},
    {anim:"spark3",d:"1.1s", x:"49%",y:"59%",col:"#FFCA28",sz:5},
    {anim:"spark4",d:"1.6s", x:"51%",y:"54%",col:"#FFE082",sz:3},
    {anim:"spark5",d:"0.9s", x:"48%",y:"56%",col:"#FFF9C4",sz:4},
    {anim:"spark6",d:"1.4s", x:"53%",y:"58%",col:"#FFD700",sz:3},
  ];

  const stars = [
    {x:"8%",y:"8%",d:"0s",s:13},{x:"85%",y:"6%",d:"0.6s",s:10},
    {x:"92%",y:"62%",d:"1.1s",s:12},{x:"5%",y:"68%",d:"1.7s",s:8},
    {x:"62%",y:"85%",d:"0.3s",s:10},{x:"28%",y:"88%",d:"0.9s",s:8},
    {x:"72%",y:"18%",d:"1.5s",s:11},{x:"18%",y:"22%",d:"2.0s",s:8},
    {x:"46%",y:"5%",d:"1.3s",s:10},{x:"38%",y:"92%",d:"0.7s",s:8},
    {x:"78%",y:"78%",d:"1.9s",s:9},{x:"14%",y:"50%",d:"0.4s",s:7},
  ];

  return (
    <div className="scale-[0.75] sm:scale-[0.85] md:scale-100 origin-center" style={{ position:"relative", width:"100%", height:480, display:"flex", alignItems:"center", justifyContent:"center" }}>

      {/* Ambient golden glow */}
      <div style={{
        position:"absolute", width:420, height:300,
        background:"radial-gradient(ellipse, rgba(255,200,0,0.32) 0%, rgba(124,92,191,0.18) 50%, transparent 80%)",
        filter:"blur(55px)", borderRadius:"50%",
        top:"48%", left:"50%", transform:"translate(-50%,-50%)",
        animation:"ambGlow 4s ease-in-out infinite",
        pointerEvents:"none", zIndex:1,
      }} />

      {/* Purple glow behind */}
      <div style={{
        position:"absolute", width:520, height:340,
        background:"radial-gradient(ellipse, rgba(124,92,191,0.28) 0%, transparent 70%)",
        filter:"blur(60px)", borderRadius:"50%",
        top:"50%", left:"50%", transform:"translate(-50%,-50%)",
        pointerEvents:"none", zIndex:1,
      }} />

      {/* Stars */}
      {stars.map((s,i) => <Star key={i} {...s} />)}

      {/* Fairy burst particles */}
      {fairies.map((f,i) => <Fairy key={i} anim={f.anim} delay={f.d} size={f.sz} color={f.col} origin={origin} />)}

      {/* Continuous rising sparks */}
      {sparks.map((sp,i) => (
        <div key={i} style={{
          position:"absolute", left:sp.x, top:sp.y,
          width:sp.sz, height:sp.sz, borderRadius:"50%",
          background:sp.col,
          boxShadow:`0 0 ${sp.sz*3}px ${sp.col}`,
          animation:`${sp.anim} 2s ease-out ${sp.d} infinite`,
          pointerEvents:"none", zIndex:28,
        }} />
      ))}

      {/* Floating gold orb top */}
      <div style={{
        position:"absolute", width:80, height:80,
        background:"radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(255,200,0,0.12) 65%, transparent 100%)",
        filter:"blur(16px)", borderRadius:"50%",
        top:"22%", left:"46%", transform:"translateX(-50%)",
        animation:"orbDrift 5s ease-in-out infinite",
        pointerEvents:"none", zIndex:6,
      }} />

      {/* Floating gold orb bottom-right */}
      <div style={{
        position:"absolute", width:50, height:50,
        background:"radial-gradient(circle, rgba(255,230,80,0.55) 0%, transparent 80%)",
        filter:"blur(10px)", borderRadius:"50%",
        bottom:"16%", right:"16%",
        animation:"orbDrift 4.2s ease-in-out 1.5s infinite",
        pointerEvents:"none", zIndex:6,
      }} />

      {/* Floor shadow */}
      <div style={{
        position:"absolute", bottom:20, left:"50%", transform:"translateX(-50%)",
        width:290, height:26,
        background:"radial-gradient(ellipse, rgba(255,180,0,0.2) 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
        filter:"blur(12px)", zIndex:2,
      }} />

      {/* ── THE NOTEBOOK ── */}
      <div className="h-book-scene" style={{ zIndex:10, position:"relative" }}>
        <div className="h-book-body" style={{ width:W, height:H, position:"relative" }}>
          <div style={{ width:"100%", height:"100%", position:"relative", transformStyle:"preserve-3d" }}>

            {/* Back cover */}
            <div style={{
              position:"absolute", inset:0, background:cover,
              borderRadius:"5px 14px 14px 5px",
              boxShadow:"6px 12px 40px rgba(0,0,0,0.65)",
              transform:"translateZ(-10px)",
            }} />

            {/* Spine */}
            <div style={{
              position:"absolute", left:0, top:0, width:20, height:"100%",
              background:spine, borderRadius:"5px 0 0 5px",
              transform:"translateZ(0px)",
              boxShadow:"inset -4px 0 10px rgba(0,0,0,0.4)",
              display:"flex", flexDirection:"column",
              alignItems:"center", justifyContent:"center", gap:7,
            }}>
              {[...Array(6)].map((_,i) => (
                <div key={i} style={{ width:3, height:3, borderRadius:"50%", background:"rgba(255,255,255,0.3)" }} />
              ))}
              <div style={{
                position:"absolute", inset:0,
                background:"linear-gradient(180deg, rgba(255,215,0,0.18) 0%, rgba(255,180,0,0.28) 50%, rgba(255,215,0,0.12) 100%)",
                animation:"pageGlow 2.5s ease-in-out infinite",
                borderRadius:"inherit",
              }} />
            </div>

            {/* Page stack */}
            {[6,5,4,3,2].map(z => (
              <div key={z} style={{
                position:"absolute", top:3, bottom:3, left:20, right:3,
                background:"#f0eaff", borderRadius:"2px 10px 10px 2px",
                transform:`translateZ(${z}px)`,
              }} />
            ))}

            {/* Left page — warm golden tint */}
            <div style={{
              position:"absolute", top:2, bottom:2, left:2, right:"50%",
              background:"linear-gradient(135deg, #fffbe6 0%, #e8e0ff 100%)",
              borderRadius:"14px 2px 2px 14px",
              transform:"translateZ(12px)", overflow:"hidden",
            }}>
              <Lines n={12} c="rgba(124,92,191,0.13)" />
              <div style={{ position:"absolute", top:8, right:10, fontSize:7, color:"rgba(100,80,150,0.55)", fontWeight:800, letterSpacing:2 }}>KCU</div>
              <div style={{
                position:"absolute", inset:0,
                background:"linear-gradient(135deg, rgba(255,220,80,0.14) 0%, transparent 55%)",
                animation:"pageGlow 2s ease-in-out 0.3s infinite",
              }} />
            </div>

            {/* Right page */}
            <div style={{
              position:"absolute", top:2, bottom:2, left:"50%", right:2,
              background:"linear-gradient(225deg, #fffbe6 0%, #f5efff 100%)",
              borderRadius:"2px 14px 14px 2px",
              transform:"translateZ(12px)", overflow:"hidden",
            }}>
              <Lines n={12} marg />
              <div style={{
                position:"absolute", inset:0,
                background:"linear-gradient(225deg, rgba(255,220,80,0.14) 0%, transparent 55%)",
                animation:"pageGlow 2s ease-in-out 0.8s infinite",
              }} />
            </div>

            {/* FRONT COVER – animates open */}
            <div className="h-cover" style={{ zIndex:20 }}>
              <div style={{
                position:"absolute", inset:0,
                background:cover,
                borderRadius:"5px 14px 14px 5px",
                transform:"translateZ(14px)",
                display:"flex", alignItems:"center", justifyContent:"center",
                flexDirection:"column", gap:8, overflow:"hidden",
                boxShadow:"0 8px 30px rgba(0,0,0,0.45)",
                backfaceVisibility:"hidden",
              }}>
                <div style={{
                  position:"absolute", inset:0,
                  background:"linear-gradient(145deg, rgba(255,215,0,0.08) 0%, transparent 60%)",
                  animation:"pageGlow 2.5s ease-in-out infinite",
                }} />
                <div style={{ width:"62%", height:2, background:"linear-gradient(90deg,transparent,rgba(167,139,250,0.7),transparent)" }} />
                <div style={{ fontSize:13, fontWeight:800, letterSpacing:"0.17em", color:"rgba(196,181,253,0.95)", textTransform:"uppercase" }}>
                  Krishna Copy
                </div>
                <div style={{ fontSize:8, letterSpacing:"0.22em", color:"rgba(139,131,176,0.8)", textTransform:"uppercase" }}>
                  Udyog · Est. 2019
                </div>
                <div style={{ width:"42%", height:1, background:"linear-gradient(90deg,transparent,rgba(124,92,191,0.5),transparent)" }} />
                <div style={{ position:"absolute", bottom:14, left:18, right:18, opacity:0.12 }}>
                  <Lines n={4} c="rgba(167,139,250,0.8)" />
                </div>
              </div>
            </div>

            {/* Turning pages */}
            {[
              { cls:"h-pw h-pw1", bg:"#fdf6e3" },
              { cls:"h-pw h-pw2", bg:"#f9f2d8" },
              { cls:"h-pw h-pw3", bg:"#f5f1ff" },
            ].map(({ cls, bg }, i) => (
              <div key={i} className={cls}>
                <div className="pf" style={{ background:bg, boxShadow:"-3px 0 16px rgba(255,215,0,0.1)" }}>
                  <Lines n={12} marg />
                  <div style={{
                    position:"absolute", inset:0,
                    background:"linear-gradient(135deg, rgba(255,215,0,0.08) 0%, transparent 50%)",
                  }} />
                </div>
                <div className="pb" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── HERO SECTION — SPLIT LAYOUT ─── */
export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ background: 'linear-gradient(160deg, #0f0d27 0%, #1a1245 50%, #0f0d27 100%)' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(167,139,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

      {/* Corner glows */}
      <div className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,92,191,0.3) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)' }} />

      <div className="container relative z-10 mx-auto px-6 py-16 max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* ── LEFT: Text content ── */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold mb-8"
              style={{ background:'rgba(124,92,191,0.15)', border:'1px solid rgba(124,92,191,0.4)', color:'#c4b5fd' }}>
              <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
              MSME Registered Manufacturer
            </div>

            {/* Headline */}
            <h1 className="font-display font-black leading-[1.05] text-white mb-6"
              style={{ fontSize:'clamp(2rem, 6vw, 4.8rem)' }}>
              School{' '}
              <span style={{
                background:'linear-gradient(135deg, #a78bfa 0%, #7c5cbf 50%, #c4b5fd 100%)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              }}>
                Notebook
              </span>
              <br />Manufacturer.
            </h1>

            <p className="text-xl font-bold mb-3" style={{ color:'#c4b5fd' }}>
              5 Lakh+ Units/Month | Export Ready
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-xl" style={{ color:'#8b83b0' }}>
              Export-ready School Notebooks from Patna, Bihar.<br />
              ZED Certified | MSME | GST | IEC<br />
              Shipping to Africa, Gulf &amp; Nepal.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full lg:w-auto">
              <Button asChild className="h-14 px-10 rounded-2xl text-base font-bold text-white gap-2 w-full sm:w-auto"
                style={{ background:'linear-gradient(135deg, #7c5cbf, #a78bfa)', boxShadow:'0 0 30px rgba(124,92,191,0.5)' }}>
                <a href="#contact">Get Bulk Quote <ArrowRight className="w-5 h-5" /></a>
              </Button>
              <a href="/catalogue.pdf" download target="_blank" rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 px-8 rounded-2xl text-base font-bold text-white transition-all hover:bg-[rgba(124,92,191,0.2)] w-full sm:w-auto"
                style={{ border:'2px solid rgba(124,92,191,0.5)', background:'rgba(30,27,69,0.5)' }}>
                <Download className="w-5 h-5" /> Download Catalogue
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-5">
              {['GST Registered','Udyam MSME','IEC Certified','Bulk Orders'].map((item,i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color:'#a78bfa' }} />
                  <span className="text-sm font-medium" style={{ color:'#c4b5fd' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: 3D Magic Notebook ── */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center">
            {/* Extra background glow behind the notebook */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background:'radial-gradient(ellipse at center, rgba(255,200,0,0.08) 0%, rgba(124,92,191,0.12) 50%, transparent 80%)' }} />
            <MagicNotebook />
          </div>

        </div>
      </div>
    </section>
  );
}
