import { Check, Zap, ShieldCheck, Blend, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "./config";

const modelos = [
  {
    nome: "LSD D300",
    perfil: "Alta demanda",
    destaque: "Produção: até 400 casquinhas por hora",
    itens: [
      "3 sabores (2 puros + 1 misto)",
      "Refrigeração na cuba: o produto não derrete em fila de pico",
      "Isolamento térmico premium: menos consumo de energia",
    ],
  },
  {
    nome: "LSD 510 Balcão",
    perfil: "Pouco espaço",
    destaque: "Produção: até 250 casquinhas por hora",
    itens: [
      "Modelo de bancada, cabe em balcões a partir de 50 cm",
      "2 sabores isolados para açaí e sorvete sem misturar",
      "Ideal para padarias, cafeterias e lojas de conveniência",
    ],
  },
  {
    nome: "LSCF 8240",
    perfil: "Operação intensiva",
    destaque: "Produção: até 600 casquinhas por hora",
    itens: [
      "Compressor reforçado para operação contínua",
      "Cuba refrigerada 24h: zero desperdício ao fim do dia",
      "Painel digital com controle de consistência",
    ],
  },
];

const acessorios = [
  {
    icon: ShieldCheck,
    titulo: "Estabilizador de Energia 5KVA",
    texto:
      "Protege o compressor contra as oscilações da rede elétrica brasileira e preserva a garantia do equipamento.",
  },
  {
    icon: Blend,
    titulo: "Batedor de Milkshake profissional",
    texto:
      "Transforma o mesmo sorvete em milkshake de ticket médio maior, sem custo extra de matéria-prima.",
  },
  {
    icon: Zap,
    titulo: "Kit de partida operacional",
    texto: "Casquinhas, copos, mix base e treinamento de operação para vender já no primeiro dia.",
  },
];

export function Products() {
  return (
    <section id="produtos" className="bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="max-w-3xl text-2xl font-extrabold text-primary sm:text-4xl">
          Máquinas industriais preparadas para o volume do seu negócio
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          Todos os modelos contam com isolamento térmico premium e refrigeração na cuba, mantendo o
          produto na textura certa do primeiro ao último atendimento.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {modelos.map((m) => (
            <article
              key={m.nome}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-card"
            >
              <span className="w-fit rounded-md bg-accent px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
                {m.perfil}
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold text-primary">{m.nome}</h3>
              <p className="mt-2 font-semibold text-cta">{m.destaque}</p>
              <ul className="mt-4 flex-1 space-y-3 text-sm text-muted-foreground">
                {m.itens.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="cta" className="mt-6 h-11 w-full">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden="true" />
                  Ver preço e condições
                </a>
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-secondary p-6 sm:p-8">
          <h3 className="text-xl font-extrabold text-primary sm:text-2xl">Acessórios essenciais</h3>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Itens que protegem o investimento e aumentam o faturamento da mesma máquina.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {acessorios.map(({ icon: Icon, titulo, texto }) => (
              <div key={titulo} className="rounded-lg border border-border bg-card p-5">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h4 className="mt-4 text-base font-bold text-primary">{titulo}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
