import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Quality paper",
  "Durable binding",
  "Competitive wholesale pricing",
  "Bulk order support",
  "Custom sizes and page count",
  "Clean finishing",
  "Packing and dispatch support",
  "Registered MSME business",
];

export function WhyUs() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-display font-extrabold text-primary text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Why Buyers Choose Krishna Copy Udyog
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {reasons.map((r) => (
            <div
              key={r}
              className="rounded-2xl bg-card border border-border p-5 flex items-start gap-3 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition"
            >
              <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
              <span className="font-display font-semibold text-primary">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
