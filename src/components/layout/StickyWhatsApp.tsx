import { MessageCircle } from 'lucide-react';

export function StickyWhatsApp() {
  const phoneNumber = "918210150897";
  const message = "Hello, I want bulk notebook inquiry.";
  const whatsappUrl = `https://wa.me/918210150897?text=Hello%20I%20want%20bulk%20notebook%20inquiry`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lift transition-transform hover:scale-110 animate-fade-up"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
