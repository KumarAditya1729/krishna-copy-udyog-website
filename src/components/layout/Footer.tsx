import { Link } from '@tanstack/react-router';
import { Mail, MapPin, Phone, MessageCircle, Linkedin } from 'lucide-react';
import logoImg from '@/assets/logo.png';

export function Footer() {
  return (
    <footer style={{ background: '#0d0b22' }}>
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#7c5cbf] to-transparent opacity-60" />

      <div className="container mx-auto px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center group mb-2">
              <img 
                src={logoImg} 
                alt="Krishna Copy Udyog" 
                className="h-14 w-auto object-contain opacity-90 transition-all group-hover:opacity-100 group-hover:scale-105 rounded-md" 
              />
            </Link>
            <p className="text-sm text-[#8b83b0] leading-relaxed">
              Premium school notebook manufacturer from India. ZED &amp; MSME Certified.
              Exporting quality stationery worldwide.
            </p>
            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://wa.me/918210150897"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-[rgba(124,92,191,0.15)] hover:bg-[#7c5cbf] border border-[rgba(124,92,191,0.3)] flex items-center justify-center text-[#a78bfa] hover:text-white cursor-pointer transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/krishna-copy-udyog"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-[rgba(124,92,191,0.15)] hover:bg-[#7c5cbf] border border-[rgba(124,92,191,0.3)] flex items-center justify-center text-[#a78bfa] hover:text-white cursor-pointer transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-base mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Export & Bulk', href: '/export' },
                { label: 'About Us', href: '/#about' },
                { label: 'Products', href: '/#products' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#8b83b0] hover:text-[#a78bfa] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#a78bfa] transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-bold text-white text-base mb-5">Certifications</h3>
            <ul className="space-y-3">
              {[
                'ZED Quality Certified',
                'MSME Registered',
                'IEC Export License',
                'GST Compliant',
              ].map((cert) => (
                <li key={cert} className="flex items-center gap-2 text-sm text-[#8b83b0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c5cbf] shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-base mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#a78bfa] shrink-0 mt-0.5" />
                <span className="text-sm text-[#8b83b0] leading-relaxed">
                  Kamaldah Path, Navneet Housing Society<br />
                  Patna City, Bihar, 800008
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#a78bfa] shrink-0" />
                <a href="tel:+918210150897" className="text-sm text-[#8b83b0] hover:text-[#a78bfa] transition-colors">
                  +91 8210150897
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#a78bfa] shrink-0" />
                <a href="mailto:krishnacopyudyog2021@gmail.com" className="text-sm text-[#8b83b0] hover:text-[#a78bfa] transition-colors break-all">
                  krishnacopyudyog2021@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[rgba(124,92,191,0.2)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#8b83b0]">
            &copy; {new Date().getFullYear()} Krishna Copy Udyog. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#8b83b0]">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
