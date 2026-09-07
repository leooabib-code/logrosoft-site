import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, PlayCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingWhatsApp, SiteHeader } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { WHATSAPP_URL } from "@/components/landing/config";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Nossas Máquinas | Logrosoft" },
      { name: "description", content: "Conheça nossas máquinas de sorvete, açaí e milkshake." },
    ],
  }),
  component: ProdutosPage,
});

const maquinas = [
  {
    nome: "LSD D300",
    tag: "Ideal para pequenos negócios",
    preco: "R$ 14.990,00",
    imagem: "/products/lsd-d300.webp",
    destaques: ["3 sabores (2 puros + 1 misto)", "Produção ~18 L/h", "Bancada compacta", "Controle digital"],
  },
  {
    nome: "LSD D500 Balcão",
    tag: "Alta produtividade",
    preco: "R$ 15.490,00",
    imagem: "/products/lsd-d500.webp",
    destaques: ["3 sabores", "Painel digital", "Bomba de recirculação", "Conservação inteligente"],
  },
  {
    nome: "LSD D510 Balcão",
    tag: "Injetora de ar",
    preco: "R$ 17.990,00",
    imagem: "/products/lsd-d510.webp",
    destaques: ["Injetora de ar (overrun)", "3 sabores", "Auto standby", "Sistema pre-cooling"],
  },
  {
    nome: "LS D530",
    tag: "Balcão produtivo",
    preco: "R$ 21.490,00",
    imagem: "/products/ls-d530.webp",
    destaques: ["3 sabores (2 puros + 1 misto)", "Alta produtividade de balcão", "Painel digital", "Overrun"],
  },
  {
    nome: "LSD 425",
    tag: "Ideal para padarias",
    preco: "R$ 22.490,00",
    imagem: "/products/lsd-425.webp",
    destaques: ["3 sabores", "Alta produção", "Painel touch", "Overrun ajustável"],
  },
  {
    nome: "LS 125C",
    tag: "Custo-benefício",
    preco: "R$ 31.990,00",
    imagem: "/products/ls-125c.webp",
    destaques: ["3 sabores (2 puros + 1 misto)", "Pedestal com rodízios", "Painel digital"],
  },
];

function ProdutosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="font-display text-4xl font-extrabold text-[#0a2540] sm:text-5xl">
              Nossos Produtos
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Encontre o equipamento perfeito para o seu negócio.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {maquinas.map((m) => (
              <div
                key={m.nome}
                className="group relative flex flex-col items-center rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Watermark Logo */}
                <img
                  src="/logo.png"
                  alt="Logrosoft"
                  className="absolute right-4 top-4 h-8 w-auto opacity-90 object-contain"
                />

                {/* 1. Máquina (Nome), 2. Modelo (Tag), 3. Preço */}
                <div className="flex w-full flex-col items-center text-center mt-4">
                  <h2 className="font-display text-2xl font-bold text-[#0a2540]">
                    {m.nome}
                  </h2>
                  <span className="mt-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-600">
                    {m.tag}
                  </span>
                  <p className="mt-5 text-3xl font-extrabold text-[#0066cc]">
                    {m.preco}
                  </p>
                </div>

                {/* 4. Foto */}
                <div className="mt-6 flex h-48 w-full items-center justify-center p-2">
                  <img
                    src={m.imagem}
                    alt={m.nome}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* 5. Vídeo funcionando */}
                <div className="relative mt-6 flex aspect-video w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl bg-slate-100 transition-colors hover:bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={m.imagem}
                      alt={m.nome}
                      className="h-full w-full object-contain opacity-40 grayscale blur-[2px]"
                    />
                  </div>
                  <div className="z-10 flex flex-col items-center">
                    <PlayCircle className="h-14 w-14 text-[#0066cc] opacity-90 transition-transform group-hover:scale-110" />
                    <span className="mt-3 rounded bg-white/95 px-3 py-1.5 text-xs font-bold text-[#0a2540] shadow-sm">
                      Vídeo funcionando (em breve)
                    </span>
                  </div>
                </div>

                {/* 6. Tag no lugar das descrições (Destaques) */}
                <div className="mt-8 flex flex-1 flex-col w-full">
                  <ul className="space-y-3 text-sm text-slate-700">
                    {m.destaques.map((destaque, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                        <span className="font-medium">{destaque}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-4 w-full">
                    <Button asChild variant="cta" className="h-12 w-full text-[15px] font-bold bg-[#0066cc] hover:bg-[#0052a3]">
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <MessageCircle aria-hidden="true" className="mr-2 h-5 w-5" />
                        Consultar condição
                      </a>
                    </Button>
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
