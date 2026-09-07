import { Link } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck, Blend, Zap, ChevronRight, Hand, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { WHATSAPP_URL } from "./config";

const maquinas = [
  {
    nome: "LSD D300",
    preco: "R$ 14.990,00",
    descricao: "Ideal para pequenos negócios que buscam performance e baixo custo.",
    imagem: "/products/lsd-d300.webp",
  },
  {
    nome: "LSD D500 Balcão",
    preco: "R$ 15.490,00",
    descricao: "Mais produtividade e recursos avançados para o seu negócio crescer.",
    imagem: "/products/lsd-d500.webp",
  },
  {
    nome: "LSD D510 Balcão",
    preco: "R$ 17.990,00",
    descricao: "Mais rendimento com injetora de ar e conservação inteligente para ampliar o potencial da operação.",
    imagem: "/products/lsd-d510.webp",
  },
  {
    nome: "LS D530",
    preco: "R$ 21.490,00",
    descricao: "A máquina de balcão com maior produtividade.",
    imagem: "/products/ls-d530.webp",
  },
  {
    nome: "LSD 425",
    preco: "R$ 22.490,00",
    descricao: "A queridinha e mais vendida! Melhor custo-benefício para movimento médio.",
    imagem: "/products/lsd-425.webp",
  },
  {
    nome: "LS 125C",
    preco: "R$ 31.990,00",
    descricao: "Ótima produção com custo benefício e overrun.",
    imagem: "/products/ls-125c.webp",
  },
];



export function Products() {
  return (
    <section id="produtos" className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-display text-3xl font-extrabold text-[#0a2540] sm:text-4xl">
          Nossas Máquinas
        </h2>
        <p className="mt-3 text-center text-base text-muted-foreground">
          Encontre o equipamento ideal para a demanda do seu negócio.
        </p>

        {/* Indicador de Swipe para Mobile */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-[#0066cc] md:hidden animate-pulse">
          <Hand className="h-5 w-5" />
          <span>Arraste para ver mais</span>
          <ArrowRight className="h-4 w-4" />
        </div>

        <div className="mt-12 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {maquinas.map((m) => (
                <CarouselItem key={m.nome} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative flex h-full flex-col items-center rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                    {/* Watermark Logo */}
                    <img
                      src="/logo.png"
                      alt="Logrosoft"
                      className="absolute right-4 top-4 h-8 w-auto opacity-90 object-contain"
                    />
                    
                    {/* Imagem */}
                    <div className="mt-4 flex h-60 w-full items-center justify-center p-2">
                      <img
                        src={m.imagem}
                        alt={m.nome}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Conteúdo */}
                    <div className="mt-6 flex flex-1 flex-col items-center text-center">
                      <h3 className="font-display text-[22px] font-bold text-[#0a2540]">
                        {m.nome}
                      </h3>
                      <p className="mt-1 text-3xl font-extrabold text-[#0066cc]">
                        {m.preco}
                      </p>
                      
                      <Link 
                        to="/produtos"
                        className="mt-5 text-sm font-semibold text-[#F97316] hover:text-orange-600 transition-colors underline underline-offset-4"
                      >
                        Veja essa máquina funcionando
                      </Link>
                      
                      <div className="mt-auto pt-6">
                        <a 
                          href={WHATSAPP_URL} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[15px] font-semibold text-[#0066cc] hover:text-[#0052a3] transition-colors"
                        >
                          Saiba mais <ChevronRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 h-12 w-12 border-none bg-white shadow-md hover:bg-slate-50" />
              <CarouselNext className="-right-12 h-12 w-12 border-none bg-white shadow-md hover:bg-slate-50" />
            </div>
          </Carousel>
        </div>


      </div>
    </section>
  );
}
