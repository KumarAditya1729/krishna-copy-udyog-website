import { ArrowRight } from "lucide-react";

import a4RegisterImg from "@/assets/a4-register.jpg";
import registerRangeImg from "@/assets/register-range.jpg";
import regularA4Img from "@/assets/regular-a4-register.jpg";
import smallCopyImg from "@/assets/small-copy.jpg";

const steps = [
  {
    step: "01",
    title: "Send Your Requirement",
    desc: "Share your specs — product type, paper GSM, quantity, branding needs. WhatsApp or email us.",
  },
  {
    step: "02",
    title: "Get a Custom Quote",
    desc: "We respond within 24 hours with a detailed price quote, lead time and sample availability.",
  },
  {
    step: "03",
    title: "Approve Sample & Place Order",
    desc: "Confirm the sample, pay 50% advance. Our production line starts within 48 hours.",
  },
  {
    step: "04",
    title: "Delivery to Your Doorstep",
    desc: "Full shipment dispatched in 15–25 days. FOB Kolkata/Delhi. CIF also available.",
  },
];

const galleryImages = [
  a4RegisterImg,
  registerRangeImg,
  regularA4Img,
  smallCopyImg,
];

export function FactorySection() {
  return (
    <>
      {/* How It Works — Process Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: '#1a1245' }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(124,92,191,0.5), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(124,92,191,0.5), transparent)' }}
        />

        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: '#a78bfa' }}>
              Simple Process
            </p>
            <h2
              className="font-display font-black text-white leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Order in{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a78bfa, #7c5cbf)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                4 Easy Steps
              </span>
            </h2>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector arrow (not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-8 right-0 translate-x-1/2 z-10 items-center justify-center">
                    <ArrowRight className="w-4 h-4" style={{ color: 'rgba(124,92,191,0.4)' }} />
                  </div>
                )}
                <div
                  className="h-full rounded-2xl p-7 flex flex-col transition-all duration-300"
                  style={{
                    background: 'rgba(15,13,39,0.7)',
                    border: '1px solid rgba(124,92,191,0.2)',
                  }}
                >
                  {/* Step number */}
                  <div
                    className="font-display font-black text-5xl mb-5 leading-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(167,139,250,0.3), rgba(124,92,191,0.1))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8b83b0' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://wa.me/918210150897?text=Hello%2C%20I%20want%20bulk%20notebook%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-13 px-10 rounded-2xl font-bold text-white text-base transition-all"
              style={{
                background: '#25d366',
                boxShadow: '0 0 25px rgba(37,211,102,0.35)',
                padding: '0.85rem 2.5rem',
              }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Start on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Photo Gallery strip */}
      <section className="py-16 overflow-hidden" style={{ background: '#0f0d27' }}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1" style={{ background: 'rgba(124,92,191,0.2)' }} />
            <p
              className="text-sm font-bold tracking-[0.2em] uppercase whitespace-nowrap"
              style={{ color: '#a78bfa' }}
            >
              #KrishnaCopyUdyog
            </p>
            <div className="h-px flex-1" style={{ background: 'rgba(124,92,191,0.2)' }} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl aspect-square"
                style={{ border: '1px solid rgba(124,92,191,0.2)' }}
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(124,92,191,0.35)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
