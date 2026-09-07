const marcas = [
  { name: "Cacau Show", file: "/logos/cacaushow.png" },
  { name: "Giraffas", file: "/logos/giraffas.png", scale: 1.6 },
  { name: "Kopenhagen", file: "/logos/kopenhagen.png" },
  { name: "Milkshake UP", file: "/logos/milkshakeup.png", width: "w-[110px] sm:w-[130px] md:w-[150px]" },
  { name: "JAH", file: "/logos/jah.png", scale: 1.8, width: "w-[90px] sm:w-[110px] md:w-[120px]" },
  { name: "Milky Moo", file: "/logos/milkymoo.png", scale: 1.6, width: "w-[90px] sm:w-[110px] md:w-[120px]" },
  { name: "Tropicool", file: "/logos/tropicool.png.png", scale: 1.4, width: "w-[110px] sm:w-[130px] md:w-[150px]" },
];

export function SocialProof() {
  return (
    <section id="marcas" className="border-b border-border bg-[oklch(0.97_0.01_260)] pt-6 pb-1 sm:pt-7 sm:pb-2">
      <div className="mx-auto w-full max-w-7xl px-4">
        <p className="mx-auto max-w-3xl text-center font-display text-lg font-semibold uppercase leading-snug tracking-[0.05em] text-[#0a1c40] sm:max-w-full sm:text-[clamp(1rem,2.1vw,1.75rem)]">
          Empresas que confiam na tecnologia Logrosoft
        </p>
        
        <div className="mt-4 overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}>
          <div className="flex w-max animate-marquee gap-0">
            {marcas.concat(marcas).map((marca, i) => (
              <div
                key={`${marca.name}-${i}`}
                className={`group flex h-24 shrink-0 items-center justify-center px-1 sm:px-2 ${marca.width || "w-[130px] sm:w-[160px] md:w-[180px]"}`}
              >
                <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-110 opacity-80 group-hover:opacity-100">
                  <img
                    src={marca.file}
                    alt={`Logo ${marca.name}`}
                    style={marca.scale ? { transform: `scale(${marca.scale})` } : undefined}
                    className="max-h-16 max-w-full object-contain mix-blend-multiply"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

