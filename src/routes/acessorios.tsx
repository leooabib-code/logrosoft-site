import { createFileRoute } from "@tanstack/react-router";
import { Zap, Blend, Hammer, CupSoda, IceCream2, Refrigerator } from "lucide-react";
import { SiteHeader, FloatingWhatsApp } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";

export const Route = createFileRoute("/acessorios")({
  head: () => ({
    meta: [
      { title: "Acessórios | Logrosoft" },
      { name: "description", content: "Acessórios essenciais para turbinar o seu negócio de sorvetes." },
    ],
  }),
  component: AcessoriosPage,
});

const acessorios = [
  {
    nome: "Estabilizador de Energia",
    subtitulo: "Potência 5KVA ou 5000 Watts",
    icon: Zap,
    caracteristicas: [
      "Potência 5kva (Monofásico)",
      "Faixa de operação de entrada +/- 20%",
      "Tensão de saída 220V",
      "Forma de onda senoidal e Filtro de linha",
      "Desligamento automático com religamento (proteção de rede)",
    ],
    obs: "O estabilizador torna-se indispensável em algumas regiões do Brasil, onde a instabilidade e os picos elétricos são de forma mais abrangentes. Esta instabilidade pode ocasionar o mau funcionamento da máquina.",
  },
  {
    nome: "Liquidificador SKYMSEN",
    subtitulo: "10 Litros 220V",
    icon: Refrigerator,
    caracteristicas: [
      "Capacidade: 10 litros",
      "Potência do motor: 0,5 cv",
      "Copo monobloco em aço inox sem soldas/frestas",
      "Gabinete em aço inox escovado",
      "Dimensões: 78cm x 34cm x 33cm",
    ],
    obs: "Robusto e resistente, ideal para o preparo de grandes quantidades de misturas em bares, restaurantes e outros estabelecimentos comerciais.",
  },
  {
    nome: "Batedor de Milk Shake",
    subtitulo: "De Fixar na Máquina",
    icon: Blend,
    caracteristicas: [
      "Fixação direta na lateral da máquina",
      "Produzido em aço inoxidável",
      "Potência do motor: 800w",
      "Tensão: 220v (60 hz)",
    ],
  },
  {
    nome: "Batedor de Milk Shake",
    subtitulo: "De Mesa",
    icon: Blend,
    caracteristicas: [
      "Formato de mesa com proteção frontal",
      "Produzido em aço inoxidável",
      "Potência do motor: 800w",
      "Tensão: 220v (60 hz)",
    ],
  },
  {
    nome: "Suporte para Casquinha",
    subtitulo: "De Plástico",
    icon: IceCream2,
    caracteristicas: [
      "Material plástico resistente e higiênico",
      "Dimensões: 10cm x 10cm x 30cm",
      "Peso: 1000g",
    ],
    obs: "Garante mais praticidade e agilidade na hora de manusear as casquinhas para produção dos sorvetes.",
  },
  {
    nome: "Suporte em Aço Inox",
    subtitulo: "Com até 4 compartimentos",
    icon: CupSoda,
    caracteristicas: [
      "Para casquinha, cascão, sundae e copos (300ml a 500ml)",
      "Capacidade: 65 casquinhas, 55 cascões ou 80 copos",
      "Bocal variável para diversas necessidades",
      "Fabricado em aço inox",
      "Acoplável em todos os modelos de máquinas ou uso em mesa",
    ],
    obs: "Protege copos e casquinhas da poeira e insetos. Organiza o ambiente, sendo higiênico e funcional.",
  },
];

function AcessoriosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          
          <div className="text-center">
            <h1 className="font-display text-4xl font-extrabold text-[#0a2540] sm:text-5xl">
              Acessórios
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Equipamentos complementares para garantir o máximo rendimento do seu negócio.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {acessorios.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="group flex flex-col rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md">
                  
                  {/* Ícone */}
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-transform group-hover:scale-110">
                    <Icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  
                  {/* Título */}
                  <h2 className="font-display text-2xl font-bold text-[#0a2540]">
                    {item.nome}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-[#0066cc] uppercase tracking-wider">
                    {item.subtitulo}
                  </p>
                  
                  {/* Divisor */}
                  <div className="my-5 h-px w-full bg-border" />
                  
                  {/* Características */}
                  <ul className="flex-1 space-y-3 text-sm text-slate-700">
                    {item.caracteristicas.map((carac, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
                        <span className="leading-relaxed">{carac}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Observação (se houver) */}
                  {item.obs && (
                    <div className="mt-6 rounded-lg bg-slate-50 p-4 text-xs italic text-slate-600 border border-slate-100">
                      {item.obs}
                    </div>
                  )}
                  
                </div>
              );
            })}
          </div>
          
        </div>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
