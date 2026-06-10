import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, MessageCircle } from "lucide-react";

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
    <section className="py-20 relative" style={{ background: '#1e1b45', borderTop: '1px solid rgba(124,92,191,0.2)', borderBottom: '1px solid rgba(124,92,191,0.2)' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#a78bfa]" />
            <span className="text-[#a78bfa] text-sm font-semibold tracking-widest uppercase">Specifications</span>
            <div className="h-px w-8 bg-[#a78bfa]" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-4">
            Export <span className="gradient-text">Capabilities</span> &amp; Terms
          </h2>
          <p className="text-[#8b83b0] text-base leading-relaxed max-w-xl mx-auto">
            We provide seamless end-to-end export services with strict adherence to
            international quality and packaging standards.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden mb-12" style={{ border: '1px solid rgba(124,92,191,0.25)', background: '#12102b' }}>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-none" style={{ background: 'linear-gradient(135deg, #7c5cbf 0%, #a78bfa 100%)' }}>
                <TableHead className="text-white font-bold w-1/3 py-4">Specification</TableHead>
                <TableHead className="text-white font-bold py-4">Details</TableHead>
                <TableHead className="text-white font-bold py-4">Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {capabilities.map((cap, index) => (
                <TableRow
                  key={index}
                  className="transition-colors"
                  style={{
                    borderBottom: '1px solid rgba(124,92,191,0.15)',
                  }}
                >
                  <TableCell className="font-medium py-4 text-white flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#a78bfa] shrink-0" />
                    {cap.feature}
                  </TableCell>
                  <TableCell className="py-4 font-semibold text-[#c4b5fd]">{cap.value}</TableCell>
                  <TableCell className="py-4 text-sm text-[#8b83b0] italic">{cap.note}</TableCell>
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
            className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-xl text-base font-semibold text-white transition-all btn-glow"
            style={{ background: '#25d366' }}
          >
            <MessageCircle className="w-5 h-5" />
            Request Bulk Quote / Sample
          </a>
        </div>
      </div>
    </section>
  );
}
