import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, telLink, mailLink } from "@/lib/site";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-14 pb-28 lg:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Krishna Copy Udyog logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-contain bg-white p-1"
              />
              <span className="font-display font-bold text-lg">{SITE.name}</span>
            </div>
            <p className="mt-4 text-sm text-white/75 leading-relaxed max-w-md">
              {SITE.name} is a Patna-based notebook and register manufacturer
              supplying quality stationery products for schools, offices, retailers,
              wholesalers, and bulk buyers.
            </p>
          </div>

          <FooterCol title="Quick Links" links={[
            ["Home", "#home"],
            ["About", "#about"],
            ["Products", "#products"],
            ["Catalogue", "#catalogue"],
            ["Certifications", "#certifications"],
            ["Contact", "#contact"],
          ]} />

          <FooterCol title="Products" links={[
            ["School Notebooks", "#products"],
            ["A4 Registers", "#products"],
            ["Spiral Notebooks", "#products"],
            ["Plain Writing Notebooks", "#products"],
            ["Custom Bulk Orders", "#products"],
          ]} />

          <div>
            <h3 className="font-display font-bold text-base mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="font-semibold text-white">{SITE.contact}</li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href={telLink} className="hover:text-accent transition">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href={mailLink} className="hover:text-accent transition break-all">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>Patna City, Bihar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-white/60">
          <p>© 2026 {SITE.name}. All rights reserved.</p>
          <p>Notebook & Register Manufacturer · Patna, Bihar, India</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="font-display font-bold text-base mb-4">{title}</h3>
      <ul className="space-y-2.5 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-white/75 hover:text-accent transition">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
