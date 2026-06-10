import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CountriesServed() {
  const regions = [
    {
      name: "Africa",
      countries: ["Nigeria", "Kenya", "Tanzania", "Ghana", "Uganda"],
      color: "bg-blue-500/10 text-blue-700 border-blue-200"
    },
    {
      name: "Gulf / Middle East",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman"],
      color: "bg-amber-500/10 text-amber-700 border-amber-200"
    },
    {
      name: "South Asia",
      countries: ["Nepal", "Bangladesh", "Sri Lanka"],
      color: "bg-green-500/10 text-green-700 border-green-200"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Countries We Serve</h2>
          <p className="text-lg text-muted-foreground">
            Our established logistics network ensures safe and timely delivery to major ports worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regions.map((region, idx) => (
            <Card key={idx} className="border-border shadow-soft">
              <CardHeader className={`rounded-t-xl ${region.color} border-b`}>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {region.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {region.countries.map((country, i) => (
                    <li key={i} className="flex items-center text-foreground font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-3"></div>
                      {country}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
