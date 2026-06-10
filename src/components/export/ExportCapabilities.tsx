import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";

export function ExportCapabilities() {
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

  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Export Capabilities & Terms</h2>
          <p className="text-lg text-muted-foreground">
            We provide seamless end-to-end export services with strict adherence to international quality and packaging standards.
          </p>
        </div>

        <div className="bg-muted/30 rounded-2xl overflow-hidden border border-border mb-12">
          <Table>
            <TableHeader className="bg-primary text-primary-foreground">
              <TableRow className="hover:bg-primary border-none">
                <TableHead className="text-primary-foreground font-semibold w-1/3">Specification</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Details</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {capabilities.map((cap, index) => (
                <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium flex items-center gap-2 py-4">
                    <Check className="h-4 w-4 text-green-500 shrink-0" />
                    {cap.feature}
                  </TableCell>
                  <TableCell className="py-4 font-semibold text-foreground">{cap.value}</TableCell>
                  <TableCell className="py-4 text-sm text-muted-foreground italic">{cap.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/918210150897?text=I%20want%20bulk%20notebook%20export%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-14 px-8 bg-green-500 text-white hover:bg-green-600 gap-2 text-base"
          >
            Request Bulk Quote / Sample
          </a>
        </div>
      </div>
    </section>
  );
}
