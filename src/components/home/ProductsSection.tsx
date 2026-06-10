import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export function ProductsSection() {
  const products = [
    {
      title: "School Notebooks",
      desc: "Standard sizes for all grades",
      paper: "60 GSM / 70 GSM",
      size: "A4 / A5 / 24x18 cm",
      pages: "100 / 140 / 172 / 200 Pages",
      binding: "Saddle Stitch / Stapled",
      moq: "5,000 Pcs",
      image: "https://images.unsplash.com/photo-1531346878377-2f39ce26d833?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Exercise Books",
      desc: "Ruled, unruled, math, and practical",
      paper: "58 GSM / 60 GSM / 70 GSM",
      size: "A4 / 24x18 cm",
      pages: "120 / 160 / 240 Pages",
      binding: "Saddle Stitch",
      moq: "10,000 Pcs",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Spiral Notebooks",
      desc: "Premium spiral binding for college & office",
      paper: "70 GSM / 80 GSM",
      size: "A4 / A5",
      pages: "150 / 200 / 300 Pages",
      binding: "Spiral Binding",
      moq: "3,000 Pcs",
      image: "https://images.unsplash.com/photo-1585800080648-5c4e95444a7f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Registers & Ledgers",
      desc: "Hardbound long books and registers",
      paper: "70 GSM",
      size: "Foolscap Size (32x20 cm)",
      pages: "1/2/3/4/6 Quire",
      binding: "Section Sewn / Hardbound",
      moq: "2,000 Pcs",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Custom Printed",
      desc: "School or corporate branding on covers",
      paper: "60 GSM / 70 GSM / 80 GSM",
      size: "Custom Sizes",
      pages: "As per requirement",
      binding: "Saddle / Spiral / Perfect",
      moq: "10,000 Pcs",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "OEM Branded",
      desc: "Complete private label manufacturing",
      paper: "Premium 70 GSM / 80 GSM",
      size: "All Sizes Available",
      pages: "All Configurations",
      binding: "All Types Available",
      moq: "1 20ft Container",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">Our Products</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Premium Quality Notebooks</h2>
          <p className="text-muted-foreground text-lg">
            Manufactured with high-grade paper and state-of-the-art machinery. Available for bulk domestic supply and international export.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden border-border transition-shadow hover:shadow-card group bg-background">
              <div className="aspect-[4/3] overflow-hidden relative">
                <Badge className="absolute top-4 right-4 z-10 bg-green-500 hover:bg-green-600">Available for Export</Badge>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription>{product.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Paper Quality:</span>
                    <span className="font-medium text-right">{product.paper}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Size:</span>
                    <span className="font-medium text-right">{product.size}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Pages:</span>
                    <span className="font-medium text-right">{product.pages}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Binding:</span>
                    <span className="font-medium text-right">{product.binding}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border flex justify-between items-center font-medium">
                  <span className="text-muted-foreground">MOQ:</span>
                  <span>{product.moq}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
