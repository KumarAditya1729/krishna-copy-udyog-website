import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const reasons = [
    "ZED Certified",
    "MSME Registered",
    "Export Ready",
    "OEM Manufacturing",
    "Competitive Pricing",
    "Bulk Production Capacity",
    "Timely Delivery",
    "International Quality Standards"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-full bg-primary/5 absolute -top-10 -left-10 w-full h-full -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1568227450974-9781604a372d?q=80&w=800&auto=format&fit=crop" 
              alt="Krishna Copy Udyog Office" 
              className="rounded-2xl shadow-lift w-full object-cover aspect-[4/3] lg:aspect-square"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-card border border-border hidden md:block">
              <div className="text-4xl font-display font-extrabold text-primary mb-1">2019</div>
              <div className="text-sm font-medium text-muted-foreground">Year Established</div>
            </div>
          </div>

          <div>
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">About Us</Badge>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Krishna Copy Udyog</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Krishna Copy Udyog is a ZED-certified school notebook manufacturer based in Patna, Bihar, India. Founded in 2019, the company produces over 1 lakh notebooks per month and serves wholesalers, distributors, educational institutions, and international importers.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {reasons.map((reason, idx) => (
                  <div key={idx} className="flex items-center text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4 border-l-4 border-primary pl-4 py-2 bg-muted/30">
              <p className="text-sm font-medium italic text-muted-foreground">
                "Our mission is to provide premium quality stationery that empowers learning and business globally, maintaining the highest standards of manufacturing excellence."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
