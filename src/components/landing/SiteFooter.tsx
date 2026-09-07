import { Mail, BadgeCheck } from "lucide-react";
export function SiteFooter() {
  return (
    <footer className="surface-navy">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Logrosoft Máquinas Expressas Ltda.
              <br />
              CNPJ: 00.000.000/0001-00
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-primary-foreground/70">
              <BadgeCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
              Equipamentos com Certificação do Inmetro
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide">Contato comercial</h3>
            <a
              href="mailto:comercial@logrosoftexpresso.com.br"
              className="mt-4 inline-flex items-center gap-2 break-all text-sm text-primary-foreground/80 underline-offset-4 hover:underline"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              comercial@logrosoftexpresso.com.br
            </a>
            <p className="mt-3 text-sm text-primary-foreground/70">
              Atendimento de segunda a sexta, das 8h às 18h.
            </p>
          </div>

          <nav aria-label="Links institucionais">
            <h3 className="text-sm font-bold uppercase tracking-wide">Institucional</h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#produtos" className="underline-offset-4 hover:underline">
                  Máquinas e modelos
                </a>
              </li>
              <li>
                <a href="/termos-de-uso" className="underline-offset-4 hover:underline">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="/politica-de-privacidade" className="underline-offset-4 hover:underline">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Logrosoft. Todos os direitos reservados. Valores de
          simulação são estimativas e podem variar conforme praça, custos e operação.
        </p>
      </div>
    </footer>
  );
}
