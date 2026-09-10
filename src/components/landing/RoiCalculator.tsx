import { useMemo, useState } from "react";
import { Calculator, TrendingUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { WHATSAPP_URL, brl } from "./config";

const CUSTO_PRODUCAO = 1.2;

export function RoiCalculator() {
  const [preco, setPreco] = useState(5);
  const [vendasDia, setVendasDia] = useState(150);
  const [diasMes, setDiasMes] = useState(26);

  const { margem, lucroMes, faturamento } = useMemo(() => {
    const m = Math.max(preco - CUSTO_PRODUCAO, 0);
    return {
      margem: m,
      lucroMes: m * vendasDia * diasMes,
      faturamento: preco * vendasDia * diasMes,
    };
  }, [preco, vendasDia, diasMes]);

  return (
    <section id="calculadora" className="bg-secondary py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-cta">
            <Calculator className="h-4 w-4 shrink-0" aria-hidden="true" />
            Calculadora de lucro
          </span>
          <h2 className="mt-3 text-2xl font-extrabold text-primary sm:text-4xl">
            Simule quanto sua máquina pode faturar por mês
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Ajuste os números da sua realidade e veja o resultado atualizar em tempo real.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-xl border border-border bg-card p-5 shadow-card sm:p-7">
            <div className="space-y-7">
              <div>
                <Label htmlFor="preco" className="text-base font-semibold text-primary">
                  Preço de venda da casquinha
                </Label>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-sm font-semibold text-muted-foreground">R$</span>
                  <Input
                    id="preco"
                    type="number"
                    min={CUSTO_PRODUCAO}
                    step="0.50"
                    value={preco}
                    onChange={(e) => setPreco(Math.max(Number(e.target.value) || 0, 0))}
                    className="h-12 max-w-[140px] text-lg font-semibold"
                  />
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  Custo médio de produção por casquinha
                </p>
                <p className="mt-1 text-2xl font-extrabold text-primary">{brl(CUSTO_PRODUCAO)}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Base de mercado (mistura, casquinha e energia). Margem por unidade:{" "}
                  <strong className="text-success">{brl(margem)}</strong>
                </p>
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-3">
                  <Label className="text-base font-semibold text-primary">
                    Vendas estimadas por dia
                  </Label>
                  <span className="shrink-0 text-lg font-extrabold text-cta">{vendasDia}</span>
                </div>
                <Slider
                  className="mt-4"
                  value={[vendasDia]}
                  min={10}
                  max={400}
                  step={5}
                  onValueChange={(v) => setVendasDia(v[0] ?? vendasDia)}
                  aria-label="Vendas estimadas por dia"
                />
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-3">
                  <Label className="text-base font-semibold text-primary">
                    Dias trabalhados no mês
                  </Label>
                  <span className="shrink-0 text-lg font-extrabold text-cta">{diasMes}</span>
                </div>
                <Slider
                  className="mt-4"
                  value={[diasMes]}
                  min={1}
                  max={30}
                  step={1}
                  onValueChange={(v) => setDiasMes(v[0] ?? diasMes)}
                  aria-label="Dias trabalhados no mês"
                />
              </div>
            </div>
          </div>

          <div className="surface-navy flex flex-col justify-center rounded-xl p-6 shadow-card sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
              Lucro Bruto Estimado Mensal
            </p>
            <p className="mt-2 break-words text-4xl font-extrabold leading-tight text-cta sm:text-5xl">
              {brl(lucroMes)}
            </p>

            <dl className="mt-6 space-y-3 border-t border-primary-foreground/15 pt-5 text-sm">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-primary-foreground/70">Faturamento estimado</dt>
                <dd className="font-semibold">{brl(faturamento)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-primary-foreground/70">Lucro por dia</dt>
                <dd className="font-semibold">{brl(margem * vendasDia)}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-primary-foreground/70">Lucro por ano</dt>
                <dd className="font-semibold">{brl(lucroMes * 12)}</dd>
              </div>
            </dl>

            <Button asChild variant="cta" size="xl" className="mt-7 w-full">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <TrendingUp aria-hidden="true" />
                Quero esse lucro no meu negócio
              </a>
            </Button>
            <p className="mt-3 inline-flex items-center gap-2 text-xs text-primary-foreground/60">
              <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Atendimento comercial em até 5 minutos no horário útil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
