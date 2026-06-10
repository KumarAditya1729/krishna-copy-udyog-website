export function ExportHero() {
  return (
    <section className="relative bg-primary pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7e66a5a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-sm font-medium text-primary-foreground mb-6">
            Global Shipping Partner
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 leading-tight">
            Bulk Notebook Export <br/> from India
          </h1>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
            Krishna Copy Udyog is a trusted Indian manufacturer exporting premium quality notebooks, registers, and stationery across Africa, the Gulf, and South Asia.
          </p>
        </div>
      </div>
    </section>
  );
}
