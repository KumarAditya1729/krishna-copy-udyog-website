export function StatsSection() {
  const stats = [
    { value: "MSME", label: "Certified", desc: "Verified Micro Enterprise from Bihar." },
    { value: "ZED", label: "Quality Certificate", desc: "Zero Defect Zero Effect Certification." },
    { value: "IEC", label: "Export License", desc: "Importer Exporter Code for Global Trade." },
    { value: "GST", label: "Registered", desc: "Verified business with GSTIN compliance." },
  ];

  return (
    <section className="py-0" style={{ background: '#0f0d27' }}>
      <div
        className="mx-auto max-w-7xl px-6"
      >
        <div
          className="rounded-3xl px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-0"
          style={{
            background: 'linear-gradient(135deg, rgba(124,92,191,0.2) 0%, rgba(99,102,241,0.15) 50%, rgba(124,92,191,0.2) 100%)',
            border: '1px solid rgba(124,92,191,0.3)',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center py-6 px-4 relative"
            >
              {/* Vertical divider (not on last) */}
              {i < stats.length - 1 && (
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 hidden md:block"
                  style={{ background: 'rgba(124,92,191,0.3)' }}
                />
              )}
              <span
                className="font-display font-black text-4xl md:text-5xl mb-2 block"
                style={{
                  background: 'linear-gradient(135deg, #c4b5fd, #7c5cbf)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </span>
              <span className="font-bold text-white text-sm mb-1">{stat.label}</span>
              <span className="text-xs" style={{ color: '#8b83b0' }}>{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
