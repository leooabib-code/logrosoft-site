import { BadgeCheck, Calculator, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import maquinaHero from "@/assets/maquina-hero.jpg";
import { WHATSAPP_URL } from "./config";

const fontesDeLucro = ["Sorvete", "Açaí", "Milkshake", "Frozen"];

export function Hero() {
  return (
    <section id="topo" className="surface-navy">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            <BadgeCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
            Produto Oficial com Certificação do Inmetro
          </span>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Conquiste sua liberdade financeira com a Logrosoft: rendimentos de{" "}
            <span className="text-cta">R$ 2.000 a R$ 5.000 mensais</span> com o seu próprio negócio
          </h1>

          <h2 className="mt-5 text-lg font-semibold text-primary-foreground/85 sm:text-xl">
            Uma única máquina. Quatro fontes de lucro.
          </h2>

          <ul className="mt-4 flex flex-wrap gap-2">
            {fontesDeLucro.map((item) => (
              <li
                key={item}
                className="rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-sm font-semibold uppercase tracking-wide"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="cta" size="xl" className="w-full sm:w-auto">
              <a href="#calculadora">
                <Calculator aria-hidden="true" />
                Quero Simular Meu Lucro
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="xl" className="w-full sm:w-auto">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                Fale Conosco
              </a>
            </Button>
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 sm:p-6 shadow-card">
          <img
            src={maquinaHero}
            alt="Máquina industrial de sorvete expresso Logrosoft em aço inox"
            width={1200}
            height={1200}
            className="mx-auto h-auto w-full max-w-md mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
