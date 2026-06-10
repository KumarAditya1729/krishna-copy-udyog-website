import React from "react";
import { Check, Globe2, Package, MapPin } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function ExportPage() {
  const capabilities = [
    { feature: "MOQ", value: "10,000 notebooks", note: "Per design/variant" },
    { feature: "Paper Quality", value: "60 GSM / 70 GSM / 80 GSM", note: "As per buyer requirement" },
    { feature: "Binding", value: "Saddle stitch / Spiral / Perfect", note: "All types available" },
    { feature: "Custom Branding", value: "Available (OEM)", note: "Your logo on cover" },
    { feature: "Lead Time", value: "15–25 days", note: "After order confirmation" },
    { feature: "Payment Terms", value: "50% advance, 50% before dispatch", note: "Negotiable for repeat orders" },
    { feature: "Shipping", value: "FOB Kolkata / Delhi", note: "CIF also available" },
    { feature: "Certifications", value: "MSME, ZED, IEC, GST", note: "Docs provided with shipment" },
  ];

  const regions = [
    {
      name: "Africa",
      countries: ["Kenya", "Nigeria", "Tanzania", "South Africa", "Ghana"],
    },
    {
      name: "Middle East / Gulf",
      countries: ["UAE", "Oman", "Qatar", "Saudi Arabia", "Bahrain"],
    },
    {
      name: "Neighbors",
      countries: ["Nepal", "Bangladesh", "Sri Lanka"],
    },
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-background min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            International Trade
          </span>
          <h1 className="mt-3 font-display font-extrabold text-primary text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Bulk Notebook Export from India | School Notebook Manufacturer
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Krishna Copy Udyog supplies high-quality, export-ready notebooks to international buyers. 
            We ensure secure packaging, custom OEM branding, and seamless logistics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-display font-bold text-2xl text-primary mb-6 flex items-center gap-3">
              <Globe2 className="text-accent h-6 w-6" /> Countries We Export To
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {regions.map((region) => (
                <div key={region.name} className="p-5 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition">
                  <h3 className="font-semibold text-lg text-primary mb-3">{region.name}</h3>
                  <ul className="space-y-2">
                    {region.countries.map(c => (
                      <li key={c} className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5 text-accent mr-2" /> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-2xl text-primary mb-6 flex items-center gap-3">
              <Package className="text-accent h-6 w-6" /> Export Capabilities & Terms
            </h2>
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-soft">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-primary/5 text-primary">
                    <tr>
                      <th className="px-5 py-4 font-semibold">Specification</th>
                      <th className="px-5 py-4 font-semibold">Details</th>
                      <th className="px-5 py-4 font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {capabilities.map((cap, i) => (
                      <tr key={i} className="hover:bg-accent-soft transition-colors">
                        <td className="px-5 py-4 font-medium flex items-center gap-2">
                          <Check className="h-4 w-4 text-success" />
                          {cap.feature}
                        </td>
                        <td className="px-5 py-4 font-semibold text-foreground">{cap.value}</td>
                        <td className="px-5 py-4 text-muted-foreground italic">{cap.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 bg-primary/5 p-10 rounded-3xl border border-primary/10 max-w-4xl mx-auto">
          <h3 className="font-display font-bold text-2xl text-primary mb-4">Ready to place an international order?</h3>
          <p className="text-muted-foreground mb-8">Contact our export team directly on WhatsApp for the best bulk pricing and immediate sample arrangements.</p>
          <a
            href={waLink("I want bulk notebook export quote")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-success text-white font-bold text-lg shadow-card hover:-translate-y-1 transition"
          >
            Request Bulk Quote / Sample
          </a>
        </div>
      </div>
    </div>
  );
}
