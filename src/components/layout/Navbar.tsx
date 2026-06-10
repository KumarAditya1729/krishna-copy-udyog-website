import { Link } from '@tanstack/react-router';
import { Phone, Menu, X, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Export', to: '/export' },
    { name: 'About', to: '/#about' },
    { name: 'Products', to: '/#products' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="font-display text-xl font-bold tracking-tight text-primary">
            Krishna Copy Udyog
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary [&.active]:text-primary [&.active]:font-semibold"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="gap-2">
            <a href="/#contact">
              <Phone className="h-4 w-4" />
              Request Bulk Quote
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-foreground/80 hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-2" onClick={() => setIsMobileMenuOpen(false)}>
              <a href="/#contact">Request Bulk Quote</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
