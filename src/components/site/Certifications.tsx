import { FileText, BadgeCheck, ExternalLink, Download } from "lucide-react";

const certs = [
  {
    title: "GST Registration",
    pdf: "/assets/certificates/gst-certificate.pdf",
    rows: [
      ["Trade Name", "Krishna Copy Udyog"],
      ["Legal Name", "Suraj Kumar"],
      ["GSTIN", "10AWWPK4840J1ZA"],
      ["Type", "Regular"],
    ],
    cta: "View GST Certificate",
  },
  {
    title: "Udyam MSME Registration",
    pdf: "/assets/certificates/udyam-registration-certificate.pdf",
    rows: [
      ["Enterprise", "Krishna Copy Udyog"],
      ["Udyam No.", "UDYAM-BR-26-0042078"],
      ["Type", "Micro"],
      ["Activity", "Manufacturing"],
    ],
    cta: "View Udyam Certificate",
  },
  {
    title: "Importer Exporter Code (IEC)",
    pdf: "/assets/certificates/iec-certificate.pdf",
    rows: [
      ["Firm", "Krishna Copy Udyog"],
      ["IEC", "AWWPK4840J"],
      ["Date of Issue", "14/11/2024"],
    ],
    cta: "View IEC Certificate",
  },
  {
    title: "MSME ZED Pledge Certificate",
    pdf: "/assets/certificates/zed-msme-certificate.pdf",
    rows: [
      ["Enterprise", "Krishna Copy Udyog"],
      ["Udyam No.", "UDYAM-BR-26-0042078"],
      ["Pledge Date", "November 25, 2023"],
    ],
    cta: "View ZED Certificate",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Verified Business
          </span>
          <h2 className="mt-3 font-display font-extrabold text-primary text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Certifications & Registrations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Registered business documents that help buyers verify Krishna Copy Udyog.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-5 lg:gap-6">
          {certs.map((c) => (
            <article
              key={c.title}
              className="rounded-3xl bg-card border border-border p-6 shadow-soft hover:shadow-card transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-navy text-primary-foreground">
                    <FileText className="h-5 w-5" />
                  </span>
                  <h3 className="font-display font-bold text-primary text-lg">
                    {c.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-success/10 text-success text-[11px] font-bold whitespace-nowrap">
                  <BadgeCheck className="h-3.5 w-3.5" /> Verified
                </span>
              </div>

              <dl className="mt-5 divide-y divide-border rounded-2xl border border-border overflow-hidden">
                {c.rows.map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-4 px-4 py-2.5 text-sm">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="font-semibold text-foreground text-right break-all">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={c.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition"
                >
                  <ExternalLink className="h-4 w-4" /> {c.cta}
                </a>
                <a
                  href={c.pdf}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-primary text-sm font-semibold hover:border-accent transition"
                >
                  <Download className="h-4 w-4" /> Download
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
