import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check } from "lucide-react";

export function ExportCapabilities() {
  const capabilities = [
    { feature: "Minimum Order Quantity (MOQ)", value: "10,000 notebooks / 1 20ft Container" },
    { feature: "Paper Quality (GSM)", value: "58 / 60 / 70 / 80 GSM High Brightness Maplitho" },
    { feature: "Binding Options", value: "Saddle Stitch, Spiral, Wire-O, Perfect Binding, Section Sewn" },
    { feature: "Customization & OEM", value: "Available (Custom Covers, Watermarks, Inserts)" },
    { feature: "Production Lead Time", value: "15–25 Days from order confirmation" },
    { feature: "Shipping Terms", value: "FOB (Nhava Sheva/Haldia) & CIF Available" },
    { feature: "Export Documentation", value: "Complete Support Provided (Invoice, PL, COA, COO, BL)" },
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

        <div className="bg-muted/30 rounded-2xl overflow-hidden border border-border">
          <Table>
            <TableHeader className="bg-primary text-primary-foreground">
              <TableRow className="hover:bg-primary border-none">
                <TableHead className="text-primary-foreground font-semibold w-1/3">Specification</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {capabilities.map((cap, index) => (
                <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium flex items-center gap-2 py-4">
                    <Check className="h-4 w-4 text-green-500 shrink-0" />
                    {cap.feature}
                  </TableCell>
                  <TableCell className="py-4 text-muted-foreground">{cap.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
