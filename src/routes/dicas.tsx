import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, HelpCircle } from "lucide-react";
import { SiteHeader, FloatingWhatsApp } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";

export const Route = createFileRoute("/dicas")({
  head: () => ({
    meta: [
      { title: "Dicas e Dúvidas | Logrosoft" },
      { name: "description", content: "Principais dúvidas de quem deseja comprar uma máquina de sorvete." },
    ],
  }),
  component: DicasPage,
});

const destaques = [
  "No mercado há 18 anos",
  "Garantia de 1 ano",
  "Frete grátis",
  "Homologada em mais de 70 redes (dentre as quais Giraffas, Jah açaí, Cacau show)",
];

const faqs = [
  {
    pergunta: "Com ou Sem Bomba de Ar (Incorporação de ar)?",
    resposta: (
      <>
        <p>Essa é uma das maiores dúvidas técnicas.</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li><strong>Com Bomba de Ar:</strong> Aumenta o volume do sorvete (rendimento) em até 30% ou mais, resultando em um sorvete mais macio e leve, ideal para locais de alto movimento.</li>
          <li><strong>Sem Bomba de Ar (Gravidade):</strong> O processo é por gravidade, produzindo menos ar. O sorvete fica mais cremoso, denso, saboroso e gelado. É recomendado para iniciantes pela facilidade de higienização e montagem.</li>
        </ul>
      </>
    ),
  },
  {
    pergunta: "Máquina Nova ou Usada?",
    resposta: (
      <>
        <p>O custo é o fator determinante, mas os riscos variam.</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li><strong>Nova:</strong> Oferece garantia, suporte técnico e menor risco de quebras imediatas. Ideal para quem quer evitar dores de cabeça no início.</li>
          <li><strong>Usada:</strong> Custo inicial menor, mas requer avaliação técnica rigorosa. Peças de reposição, vida útil (geralmente de 5 anos) e disponibilidade de assistência técnica são as maiores preocupações. Sabendo que muitas estão fora de linha e não tem reposição de peças.</li>
        </ul>
      </>
    ),
  },
  {
    pergunta: "Qualidade da Assistência Técnica e Peças?",
    resposta: (
      <>
        <p>A máquina parar de funcionar é o pior cenário para o negócio.</p>
        <p className="mt-2"><strong>É fácil encontrar peças?</strong> Logrosoft reposição imediata.</p>
        <p><strong>Existe técnico na minha região?</strong> Logrosoft tem mais de 400 técnicos homologados.</p>
        <p className="mt-2">Máquinas importadas sem representantes no Brasil podem se tornar um problema. Recomenda-se marcas com boa reputação e rede de assistência no país.</p>
      </>
    ),
  },
  {
    pergunta: "Capacidade de Produção e Ciclos de Congelamento",
    resposta: (
      <>
        <p><strong>A máquina aguenta o movimento da loja?</strong></p>
        <p className="mt-2">É crucial entender a produção horária. Máquinas de balcão têm produção menor que máquinas de chão.</p>
        <p>Outra questão é o tempo de refrigeração da cuba (standby), para que a máquina não "desarme" ou não consiga acompanhar a demanda no pico de vendas.</p>
      </>
    ),
  },
  {
    pergunta: "Consumo de Energia e Voltagem (Monofásica ou Trifásica)",
    resposta: (
      <>
        <p><strong>A máquina consome muito? A instalação elétrica suporta?</strong></p>
        <p className="mt-2">Máquinas com motores fortes consomem mais energia. A maioria das máquinas de alto rendimento são trifásicas, exigindo instalação elétrica específica.</p>
        <p>É necessário verificar se o ponto comercial possui a voltagem correta disponível.</p>
      </>
    ),
  },
  {
    pergunta: "Higienização e Operação",
    resposta: (
      <>
        <p><strong>A máquina é fácil de limpar?</strong></p>
        <p className="mt-2">A higienização diária é obrigatória para evitar contaminação e precisa ser fácil para não gerar trabalho excessivo.</p>
      </>
    ),
  },
  {
    pergunta: "Lucro e Retorno do Investimento",
    resposta: (
      <>
        <p><strong>Vale a pena o investimento?</strong></p>
        <p className="mt-2">A margem de lucro no sorvete expresso pode superar 300% de markup, mas depende diretamente do volume de vendas, custo da calda e rendimento da máquina.</p>
      </>
    ),
  },
  {
    pergunta: "Tipo de Sorvete e Sabores",
    resposta: (
      <>
        <p><strong>Máquinas de 1 sabor ou 2 sabores + misto?</strong></p>
        <p className="mt-2">A versatilidade do cardápio é uma dúvida comum para atrair mais clientes.</p>
        <div className="mt-4 rounded-lg bg-orange-50 p-4 border border-orange-100">
          <p className="font-semibold text-orange-800">Dica para iniciantes:</p>
          <p className="text-orange-700">Recomenda-se começar com uma máquina sem bomba de ar devido à menor complexidade na montagem e higienização. A Logrosoft tem sistema de injeção de ar, facilitando muito esse processo e garantindo um sorvete mais cremoso.</p>
        </div>
      </>
    ),
  },
];

function DicasPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          
          <div className="text-center">
            <h1 className="font-display text-4xl font-extrabold text-[#0a2540] sm:text-5xl">
              Dicas e Dúvidas Frequentes
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Aqui estão as principais dúvidas de quem deseja comprar uma máquina de sorvete
            </p>
          </div>

          <div className="mt-12 mb-16 flex flex-wrap justify-center gap-4">
            {destaques.map((item, i) => (
              <div key={i} className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-sm border border-border">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-sm font-semibold text-[#0a2540]">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-1 h-6 w-6 shrink-0 text-[#0066cc]" />
                  <div>
                    <h2 className="font-display text-xl font-bold text-[#0a2540]">
                      {faq.pergunta}
                    </h2>
                    <div className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {faq.resposta}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
