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

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden" style={{ background: '#0d0b22' }}>
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: '#a78bfa' }}>
            Verified Business
          </p>
          <h2 className="font-display font-black text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Certifications &amp; <br/>
            <span className="gradient-text">Registrations</span>
          </h2>
          <p className="text-[#8b83b0] text-lg leading-relaxed">
            Registered business documents that help buyers verify Krishna Copy Udyog.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {certs.map((c) => (
            <article
              key={c.title}
              className="rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(30,27,69,0.5)',
                border: '1px solid rgba(124,92,191,0.2)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <span className="grid place-items-center h-14 w-14 rounded-2xl shrink-0" style={{ background: 'rgba(124,92,191,0.15)' }}>
                    <FileText className="h-6 w-6 text-[#a78bfa]" />
                  </span>
                  <h3 className="font-display font-bold text-white text-xl">
                    {c.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap" style={{ background: 'rgba(37, 211, 102, 0.1)', color: '#25D366' }}>
                  <BadgeCheck className="h-4 w-4" /> Verified
                </span>
              </div>

              <div className="mb-8 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(124,92,191,0.2)', background: 'rgba(15,13,39,0.3)' }}>
                {c.rows.map(([k, v], i) => (
                  <div key={k} className="flex items-center justify-between gap-4 px-5 py-3 text-sm" style={{ borderBottom: i !== c.rows.length - 1 ? '1px solid rgba(124,92,191,0.1)' : 'none' }}>
                    <span className="text-[#8b83b0] font-semibold">{k}</span>
                    <span className="text-white text-right break-all">{v}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={c.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white text-sm font-bold transition-all hover:opacity-90 flex-1 justify-center"
                  style={{ background: 'linear-gradient(135deg, #7c5cbf, #a78bfa)' }}
                >
                  <ExternalLink className="h-4 w-4" /> {c.cta}
                </a>
                <a
                  href={c.pdf}
                  download
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[#a78bfa] text-sm font-bold transition-all flex-1 justify-center"
                  style={{ border: '1px solid rgba(124,92,191,0.4)', background: 'rgba(124,92,191,0.05)' }}
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
