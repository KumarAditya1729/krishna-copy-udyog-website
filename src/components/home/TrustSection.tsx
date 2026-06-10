import { Award, CheckCircle, FileText, Globe } from "lucide-react";

export function TrustSection() {
  const certifications = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "MSME Certified",
      desc: "Govt. of India Recognized",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "ZED Quality Certification",
      desc: "Zero Defect Zero Effect",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "IEC Export License",
      desc: "Global Shipping Ready",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "GST Registered",
      desc: "Fully Compliant Billing",
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-soft bg-background">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                {cert.icon}
              </div>
              <h3 className="font-bold text-foreground mb-1">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
