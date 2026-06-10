import { Badge } from "@/components/ui/badge";

export function FactorySection() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1621360155099-2b02e7db5e42?q=80&w=800&auto=format&fit=crop",
      title: "Manufacturing Facility"
    },
    {
      url: "https://images.unsplash.com/photo-1563969062334-7127ceee9f78?q=80&w=800&auto=format&fit=crop",
      title: "Production Process"
    },
    {
      url: "https://images.unsplash.com/photo-1587293852726-59114d6423cc?q=80&w=800&auto=format&fit=crop",
      title: "Packing Area"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
      title: "Quality Control"
    }
  ];

  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">Our Infrastructure</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">State-of-the-Art Factory</h2>
          <p className="text-muted-foreground text-lg">
            Our modern manufacturing facility in Patna is equipped with automated machinery capable of producing over 1,00,000 notebooks per month with zero defects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-2xl bg-muted aspect-video">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white font-display text-xl font-bold">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
