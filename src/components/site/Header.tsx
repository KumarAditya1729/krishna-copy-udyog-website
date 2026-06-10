import { useEffect, useState } from "react";
import { Phone, MessageCircle, Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { SITE, telLink, waLink } from "@/lib/site";
import logo from "@/assets/logo.png";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#catalogue", label: "Catalogue" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/export", label: "Export" },
  { href: "/#contact", label: "Contact" },
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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white ${
          scrolled ? "border-b border-[#D9D9D9] shadow-[0_2px_8px_rgba(0,0,0,0.06)]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src={logo}
              alt="Krishna Copy Udyog logo"
              width={44}
              height={44}
              className="h-10 w-10 rounded-full object-contain"
            />
            <span className="font-display font-bold text-primary text-base sm:text-lg leading-tight">
              Krishna Copy Udyog
            </span>
          </a>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-[#333333] hover:text-primary transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href={telLink}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#333333] hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href={waLink(`Hello ${SITE.name}, I want to enquire about bulk pricing.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#333333] hover:text-primary transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="#contact" className="inline-flex items-center text-[#333333] hover:text-primary transition-colors">
              <ShoppingCart className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden grid place-items-center h-10 w-10 rounded-lg border border-[#D9D9D9] bg-white"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-[#333333]" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-[#D9D9D9]">
              <span className="font-display font-bold text-primary text-lg">Menu</span>
              <button
                className="grid place-items-center h-10 w-10 rounded-lg border border-[#D9D9D9]"
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
                  className="px-4 py-3 rounded-lg text-base font-medium text-[#333333] hover:text-primary hover:bg-[#FFF3E3] transition-colors"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="p-4 grid grid-cols-2 gap-3 border-t border-[#D9D9D9]">
              <a
                href={telLink}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[#D9D9D9] text-[#333333] font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={waLink(`Hello ${SITE.name}, I want bulk pricing.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-[#9c7726] transition-colors"
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

