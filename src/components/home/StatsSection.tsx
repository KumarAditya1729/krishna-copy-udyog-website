export function StatsSection() {
  const stats = [
    { value: "1,00,000+", label: "Notebooks Per Month" },
    { value: "500+", label: "Bulk Orders Completed" },
    { value: "100%", label: "Export Ready Manufacturing" },
    { value: "OEM", label: "Private Label Available" },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <span className="font-display text-4xl md:text-5xl font-extrabold mb-2">
                {stat.value}
              </span>
              <span className="text-primary-foreground/80 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
