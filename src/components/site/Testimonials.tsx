import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sunita Sharma",
    text: "The notebooks are durable, and the pencils write smoothly. My children use Krishna Copy Udyog's products every day, and I'm impressed by their consistency in quality.",
    avatar: "https://i.pravatar.cc/150?u=sunita",
  },
  {
    name: "Meena Jain",
    text: "We have always received timely deliveries of premium-quality notebooks and pencils at reasonable prices. Krishna Copy Udyog truly values its customers.",
    avatar: "https://i.pravatar.cc/150?u=meena",
  },
  {
    name: "Rajeev Gupta",
    text: "The team at Krishna Copy Udyog is professional and responsive. They helped us choose the best products for our bulk order, and the quality exceeded our expectations.",
    avatar: "https://i.pravatar.cc/150?u=rajeev",
  },
  {
    name: "Pooja Verma",
    text: "Krishna Copy Udyog has been our trusted supplier for years. The quality of their notebooks and pencils is unmatched, and our students love using them. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=pooja",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const next = () => {
    setCurrentIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-accent"></div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              TESTIMONIAL
            </span>
            <div className="h-px w-12 bg-accent"></div>
          </div>
          <h2 className="font-display font-extrabold text-primary text-4xl sm:text-5xl lg:text-6xl leading-tight">
            What People Say About
            <br />
            Our Company
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Visuals */}
          <div className="relative h-[400px] sm:h-[500px] flex items-center justify-center">
            {/* Giant Quote Icon Background */}
            <div className="absolute opacity-10">
              <Quote className="w-64 h-64 sm:w-80 sm:h-80 text-primary rotate-180" />
            </div>

            {/* Floating Avatars */}
            <div className="absolute inset-0">
              {testimonials.map((t, i) => {
                // Different positions and sizes for the floating avatars
                const positions = [
                  "top-[10%] left-[10%] w-24 h-24 sm:w-32 sm:h-32",
                  "top-[40%] right-[10%] w-20 h-20 sm:w-28 sm:h-28",
                  "bottom-[10%] left-[20%] w-20 h-20 sm:w-24 sm:h-24",
                  "bottom-[0%] right-[20%] w-16 h-16 sm:w-24 sm:h-24",
                ];
                
                return (
                  <div
                    key={t.name}
                    className={`absolute rounded-full overflow-hidden border-4 border-white shadow-xl transition-all duration-500 ${
                      positions[i]
                    } ${
                      i === currentIndex
                        ? "scale-110 z-10 ring-4 ring-accent/30"
                        : "opacity-60 scale-95 grayscale hover:grayscale-0 hover:opacity-100 cursor-pointer"
                    }`}
                    onClick={() => setCurrentIndex(i)}
                  >
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="relative z-10">
            <div className="min-h-[200px]">
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].text}"
              </p>
              <h4 className="font-display font-bold text-2xl text-primary mb-8">
                {testimonials[currentIndex].name}
              </h4>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-border text-primary hover:border-accent hover:text-accent transition-colors bg-white focus:outline-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full flex items-center justify-center bg-accent text-primary font-bold shadow-lg shadow-accent/20 hover:scale-105 transition-transform focus:outline-none"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
