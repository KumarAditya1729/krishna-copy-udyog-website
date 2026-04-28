import { Phone, MessageCircle } from "lucide-react";
import { SITE, telLink, waLink } from "@/lib/site";

export function MobileCTA() {
  return (
    <>
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 gap-2 p-2.5 bg-background/95 backdrop-blur-lg border-t border-border shadow-lift">
        <a
          href={telLink}
          className="inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold"
        >
          <Phone className="h-5 w-5" /> Call Now
        </a>
        <a
          href={waLink(`Hello ${SITE.name}, I want a catalogue and bulk pricing.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-success text-white font-semibold"
        >
          <MessageCircle className="h-5 w-5" /> WhatsApp
        </a>
      </div>
      {/* Floating WhatsApp - desktop */}
      <a
        href={waLink(`Hello ${SITE.name}, I want bulk pricing.`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp enquiry"
        className="hidden lg:grid fixed bottom-6 right-6 z-40 h-14 w-14 place-items-center rounded-full bg-success text-white shadow-lift animate-pulse-soft hover:scale-105 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
}
