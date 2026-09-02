import { Croissant, Fuel, Dumbbell, UtensilsCrossed } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const casos = [
  {
    id: "padarias",
    icon: Croissant,
    titulo: "Padarias",
    resumo: "Pouco espaço, alta rotatividade",
    texto:
      "Com os modelos de balcão (LSD 510), a máquina ocupa menos de 60 cm do balcão e transforma o fluxo de clientes do café da manhã e da tarde em venda de sobremesa por impulso, sem contratar equipe extra.",
  },
  {
    id: "postos",
    icon: Fuel,
    titulo: "Postos de Gasolina",
    resumo: "Aguenta o pico de atendimento",
    texto:
      "Nos horários de pico, a refrigeração na cuba mantém a consistência mesmo com atendimentos seguidos. Modelos como o LSCF 8240 entregam até 600 casquinhas por hora na loja de conveniência.",
  },
  {
    id: "academias",
    icon: Dumbbell,
    titulo: "Academias",
    resumo: "Whey protein e açaí em cubas isoladas",
    texto:
      "Dois sabores em cubas totalmente isoladas permitem servir sorvete proteico com whey em uma cuba e açaí na outra, sem contaminação de sabor — ticket médio alto e recorrência diária dos alunos.",
  },
  {
    id: "restaurantes",
    icon: UtensilsCrossed,
    titulo: "Restaurantes",
    resumo: "Sobremesas elaboradas, zero desperdício",
    texto:
      "A cuba refrigerada conserva o mix durante toda a noite: o que não é vendido continua próprio para o dia seguinte. Sobremesas montadas com calda e frutas elevam a margem do fechamento da conta.",
  },
];

export function UseCases() {
  return (
    <section id="aplicacoes" className="bg-secondary py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl font-extrabold text-primary sm:text-4xl">
          Uma máquina, dezenas de oportunidades. Onde você vai instalar a sua?
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          Veja como a operação se adapta ao seu tipo de negócio.
        </p>

        <Accordion type="single" collapsible defaultValue="padarias" className="mt-8">
          {casos.map(({ id, icon: Icon, titulo, resumo, texto }) => (
            <AccordionItem
              key={id}
              value={id}
              className="mb-3 rounded-lg border border-border bg-card px-4"
            >
              <AccordionTrigger className="py-4 text-left hover:no-underline">
                <span className="flex min-w-0 items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-accent text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-lg font-bold text-primary">
                      {titulo}
                    </span>
                    <span className="block text-sm font-normal text-muted-foreground">
                      {resumo}
                    </span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {texto}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
