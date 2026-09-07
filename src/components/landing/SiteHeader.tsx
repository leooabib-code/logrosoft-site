import { Link } from "@tanstack/react-router";
import { MessageCircle, Truck, CreditCard, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { WHATSAPP_URL } from "./config";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "HISTÓRIA DO SORVETE", href: "/historia-do-sorvete" },
  { label: "PRODUTOS", href: "/produtos" },
  { label: "DICAS", href: "/dicas" },
  { label: "ACESSÓRIOS", href: "/acessorios" },
  { label: "DEPOIMENTOS", href: "/depoimentos" },
  { label: "CONTATO (WHATSAPP)", href: WHATSAPP_URL },
];

export function SiteHeader() {
  return (
    <>
      <div className="surface-navy w-full">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2 text-center text-[11px] font-medium sm:text-xs">
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
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          
          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 shrink-0 text-[#0a2540]">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px] bg-white pt-10">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => 
                    link.href.startsWith("http") ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-[#0a2540] hover:text-[#F97316] transition-colors py-2 border-b border-border"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.label}
                        to={link.href as any}
                        className="text-lg font-bold text-[#0a2540] hover:text-[#F97316] transition-colors py-2 border-b border-border"
                        activeProps={{
                          className: "!text-[#F97316]",
                        }}
                        activeOptions={{ exact: true }}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link to="/" className="flex flex-1 lg:flex-none justify-center lg:justify-start items-center">
            <img
              src="/logo.png"
              alt="Logrosoft Máquinas e Produtos para Sorvete"
              className="h-9 w-auto sm:h-12"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold text-primary">Logrosoft</span>';
              }}
            />
          </Link>

          {/* Nav Links (Desktop) */}
          <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
            {navLinks.map((link) => 
              link.href.startsWith("http") ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-16 items-center border-b-2 px-1 text-[13px] font-bold tracking-wide transition-colors border-transparent text-[#0a2540] hover:text-[#F97316]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href as any}
                  className="flex h-16 items-center border-b-2 px-1 text-[13px] font-bold tracking-wide transition-colors border-transparent text-[#0a2540] hover:text-[#F97316]"
                  activeProps={{
                    className: "!border-[#F97316] !text-[#F97316]",
                  }}
                  activeOptions={{ exact: true }}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* WhatsApp Button */}
          <div className="flex shrink-0 items-center">
            <Button asChild variant="whatsapp" className="h-10 px-3 sm:px-5">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />
                <span className="hidden sm:inline">Fale Conosco</span>
                <span className="sm:hidden">Fale Conosco</span>
              </a>
            </Button>
          </div>
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
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-success px-4 py-3 text-sm font-semibold text-success-foreground shadow-card transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline">Fale Conosco</span>
    </a>
  );
}
