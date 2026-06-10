const steps = [
  { n: "01", title: "Share your requirement", text: "Send product, quantity & customization details." },
  { n: "02", title: "Get catalogue & pricing", text: "We share catalogue and best wholesale rates." },
  { n: "03", title: "Confirm quantity", text: "Finalize page count, size and customization." },
  { n: "04", title: "Production & packing", text: "Order produced and packed for dispatch." },
  { n: "05", title: "Dispatch / delivery", text: "Bundles dispatched with delivery support." },
];

export function Process() {
  return (
    <section id="process" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            How It Works
          </span>
          <h2 className="mt-3 font-display font-extrabold text-primary text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Simple Bulk Order Process
          </h2>
        </div>

        <div className="mt-12 relative">
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-border" />
          <ol className="grid gap-5 lg:grid-cols-5">
            {steps.map((s) => (
              <li
                key={s.n}
                className="relative rounded-2xl bg-card border border-border p-5 shadow-soft hover:shadow-card transition"
              >
                <div className="grid place-items-center h-14 w-14 rounded-2xl bg-gradient-navy text-primary-foreground font-display font-bold text-lg shadow-card mb-4">
                  {s.n}
                </div>
                <div className="font-display font-bold text-primary">{s.title}</div>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
