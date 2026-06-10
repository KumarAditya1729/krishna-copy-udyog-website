import { Link } from '@tanstack/react-router';
import { BookOpen, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="font-display text-xl font-bold tracking-tight">
                Krishna Copy Udyog
              </span>
            </Link>
            <p className="text-sm text-background/70">
              Premium school notebook manufacturer from India. ZED & MSME Certified. Exporting quality stationery worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/70 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/export" className="text-background/70 hover:text-white transition-colors">Export & Bulk</Link>
              </li>
              <li>
                <a href="/#about" className="text-background/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="/#products" className="text-background/70 hover:text-white transition-colors">Products</a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-bold text-lg mb-4">Certifications</h3>
            <ul className="space-y-2 text-background/70">
              <li>• ZED Quality Certified</li>
              <li>• MSME Registered</li>
              <li>• IEC Export License</li>
              <li>• GST Compliant</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-background/70">
                  Patna, Bihar, India<br/>
                  (Exporting Worldwide)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+918210150897" className="text-sm text-background/70 hover:text-white">
                  +91 8210150897
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:export@krishnacopyudyog.com" className="text-sm text-background/70 hover:text-white">
                  export@krishnacopyudyog.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/50">
          <p>&copy; {new Date().getFullYear()} Krishna Copy Udyog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
