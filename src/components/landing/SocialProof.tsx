const marcas = [
  "Kopenhagen",
  "Giraffas",
  "Starbucks",
  "Cacau Show",
  "Pão de Açúcar",
  "Jah Açaí",
];

export function SocialProof() {
  return (
    <section className="border-b border-border bg-background py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Empresas que confiam na tecnologia Logrosoft
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {marcas.map((marca) => (
            <li
              key={marca}
              className="grid h-16 place-items-center rounded-lg border border-border bg-muted px-3 text-center font-display text-sm font-bold uppercase tracking-wide text-muted-foreground grayscale transition-colors hover:text-primary"
            >
              {marca}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
