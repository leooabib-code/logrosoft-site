import { createFileRoute } from "@tanstack/react-router";
import { Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader, FloatingWhatsApp } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { WHATSAPP_URL } from "@/components/landing/config";

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: "Depoimentos | Logrosoft" },
      { name: "description", content: "Veja o que nossos clientes dizem sobre as máquinas de sorvete Logrosoft." },
    ],
  }),
  component: DepoimentosPage,
});



function DepoimentosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          
          <div className="text-center">
            <h1 className="font-display text-4xl font-extrabold text-[#0a2540] sm:text-5xl">
              Depoimentos
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja as histórias de sucesso de empreendedores que transformaram seus negócios com a tecnologia Logrosoft.
            </p>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="w-full max-w-3xl rounded-2xl border-2 border-dashed border-border bg-slate-100 p-16 text-center">
              <h2 className="text-2xl font-bold text-[#0a2540] sm:text-3xl">Vídeos em breve</h2>
              <p className="mt-2 text-muted-foreground">Estamos preparando um material incrível para você ver as máquinas em ação e o depoimento dos nossos parceiros.</p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-[#0a2540] mb-6">
              Pronto para ser nossa próxima história de sucesso?
            </h2>
            <Button asChild variant="cta" className="h-14 px-8 text-lg font-bold bg-[#25D366] hover:bg-[#128C7E]">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" className="mr-2 h-6 w-6" />
                Fale Conosco no WhatsApp
              </a>
            </Button>
          </div>
          
        </div>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
