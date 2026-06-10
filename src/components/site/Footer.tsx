import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, telLink, mailLink } from "@/lib/site";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[#3A3A3A] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Krishna Copy Udyog logo"
                width={48}
                height={48}
                className="h-10 w-10 rounded-full object-contain bg-white p-1"
              />
              <span className="font-display font-bold text-lg">{SITE.name}</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              400 Universe Blvd. Any City, CA 12345
            </p>
            <p className="text-sm text-white/60 mt-1">{SITE.name} is a Patna-based notebook manufacturer.</p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-display font-semibold text-base mb-5">Links</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {[["Home", "/"], ["About", "/#about"], ["Products", "/#products"], ["Certifications", "/#certifications"], ["Contact", "/#contact"]].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-[#B88E2F] transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-display font-semibold text-base mb-5">Help</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {[["Export Page", "/export"], ["Catalogue", "/#catalogue"], ["WhatsApp Us", "#contact"], ["Track Order", "#contact"]].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-[#B88E2F] transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Column */}
          <div>
            <h3 className="font-display font-semibold text-base mb-5">Newsletter</h3>
            <p className="text-sm text-white/60 mb-4">Get latest updates on bulk offers.</p>
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 bg-transparent border-b border-white/40 text-sm text-white placeholder-white/40 py-2 px-0 focus:outline-none focus:border-[#B88E2F]"
              />
              <button className="text-sm font-semibold text-white border-b border-white/40 pb-2 px-2 hover:text-[#B88E2F] hover:border-[#B88E2F] transition-colors whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>

            <div className="mt-6 space-y-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#B88E2F] shrink-0" />
                <a href={telLink} className="hover:text-white transition">{SITE.phoneDisplay}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#B88E2F] shrink-0" />
                <a href={mailLink} className="hover:text-white transition break-all">{SITE.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#B88E2F] shrink-0" />
                <span>Patna City, Bihar, India</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          <p>© 2026 {SITE.name}. All rights reserved. · Notebook & Register Manufacturer · Patna, Bihar, India</p>
        </div>
      </div>
    </footer>
  );
}
