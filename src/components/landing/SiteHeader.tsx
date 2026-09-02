import { MessageCircle, Truck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logrosoft-logo.png.asset.json";
import { WHATSAPP_URL } from "./config";

export function SiteHeader() {
  return (
    <>
      <div className="surface-navy w-full">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-center text-[11px] font-medium sm:text-xs">
          <span className="inline-flex items-center gap-1.5">
            <Truck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Frete Grátis para todo o Brasil
          </span>
          <span className="hidden opacity-40 sm:inline">|</span>
          <span className="inline-flex items-center gap-1.5">
            <CreditCard className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Parcelamento em até 12x Sem Juros
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3">
          <a href="#topo" className="flex min-w-0 items-center">
            <img
              src={logoAsset.url}
              alt="Logrosoft Máquinas e Produtos para Sorvete"
              className="h-10 w-auto max-w-[170px] object-contain sm:h-11"
              width={170}
              height={44}
            />
          </a>
          <Button asChild variant="whatsapp" className="h-10 px-3 sm:px-5">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" />
              <span className="hidden sm:inline">Fale com um Consultor</span>
              <span className="sm:hidden">Consultor</span>
            </a>
          </Button>
        </div>
      </header>
    </>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com um consultor no WhatsApp"
      className="fixed bottom-5 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-success px-4 py-3 text-sm font-semibold text-success-foreground shadow-card transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline">Fale com um Consultor</span>
    </a>
  );
}
