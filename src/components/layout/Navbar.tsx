import { Link } from '@tanstack/react-router';
import { Phone, Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import logoImg from '@/assets/logo.png';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Export', to: '/export' },
    { name: 'About', to: '/#about' },
    { name: 'Products', to: '/#products' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#12102b]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-[rgba(124,92,191,0.2)]'
          : 'bg-[#12102b]/80 backdrop-blur-lg border-b border-[rgba(124,92,191,0.1)]'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src={logoImg} 
            alt="Krishna Copy Udyog" 
            className="h-12 w-auto object-contain transition-all group-hover:scale-105 rounded-md" 
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-sm font-medium text-white/70 transition-all hover:text-[#a78bfa] relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#a78bfa] rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Button
            asChild
            variant="outline"
            className="gap-2 bg-transparent text-white border-[rgba(124,92,191,0.5)] hover:bg-[rgba(124,92,191,0.2)] rounded-lg font-semibold px-4"
          >
            <a href="/catalogue.pdf" download target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4" />
              Catalogue
            </a>
          </Button>
          <Button
            asChild
            className="gap-2 bg-[#7c5cbf] hover:bg-[#9370db] text-white border-0 btn-glow rounded-lg font-semibold px-6"
          >
            <a href="/#contact">
              <Phone className="h-4 w-4" />
              Request Bulk Quote
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-[#a78bfa] p-2 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[rgba(124,92,191,0.2)] bg-[#1e1b45]/95 backdrop-blur-xl">
          <div className="container mx-auto flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-[#a78bfa] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-2">
              <Button
                asChild
                variant="outline"
                className="bg-[rgba(30,27,69,0.5)] text-white border-[rgba(124,92,191,0.5)]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <a href="/catalogue.pdf" download target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 mr-2" />
                  Download Catalogue
                </a>
              </Button>
              <Button
                asChild
                className="bg-[#7c5cbf] hover:bg-[#9370db] text-white btn-glow"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <a href="/#contact">Request Bulk Quote</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
