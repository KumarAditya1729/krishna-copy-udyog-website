import { useEffect, useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { SITE, telLink, waLink } from "@/lib/site";
import logo from "@/assets/logo.png";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#catalogue", label: "Catalogue" },
  { href: "#certifications", label: "Certifications" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-soft"
            : "bg-background/60 backdrop-blur"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="Krishna Copy Udyog logo"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-contain bg-white ring-1 ring-border shadow-soft"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display font-bold text-primary text-base sm:text-lg">
                Krishna Copy Udyog
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground tracking-wide uppercase">
                Notebook & Register Mfg.
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-lg hover:bg-accent-soft transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={telLink}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border text-primary font-semibold text-sm hover:bg-accent-soft transition-colors"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={waLink(`Hello ${SITE.name}, I want to enquire about bulk pricing.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-success text-white font-semibold text-sm hover:opacity-90 transition shadow-soft"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <button
            className="lg:hidden grid place-items-center h-11 w-11 rounded-xl border border-border bg-card"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-primary" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-primary/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background shadow-lift flex flex-col animate-fade-up">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <span className="font-display font-bold text-primary">Menu</span>
              <button
                className="grid place-items-center h-10 w-10 rounded-xl border border-border"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-foreground hover:bg-accent-soft"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="p-4 grid grid-cols-2 gap-2 border-t border-border">
              <a
                href={telLink}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border text-primary font-semibold"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={waLink(`Hello ${SITE.name}, I want bulk pricing.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-success text-white font-semibold"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
