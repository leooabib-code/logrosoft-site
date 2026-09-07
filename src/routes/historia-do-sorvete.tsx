import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, FloatingWhatsApp } from "@/components/landing/SiteHeader";
import { SiteFooter } from "@/components/landing/SiteFooter";

export const Route = createFileRoute("/historia-do-sorvete")({
  head: () => ({
    meta: [
      { title: "História do Sorvete | Logrosoft" },
      { name: "description", content: "A história do sorvete desde a antiguidade até os dias de hoje." },
    ],
  }),
  component: HistoriaPage,
});

function HistoriaPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-border bg-white p-8 sm:p-12 shadow-sm">
            <h1 className="text-center font-display text-3xl font-extrabold text-[#0a2540] sm:text-5xl">
              A História do Sorvete
            </h1>
            <p className="mt-4 text-center text-lg font-medium text-[#F97316]">
              Você sabia que esta delícia existe há mais de 3000 anos?
            </p>
            
            <div className="mt-12 space-y-6 text-base text-slate-700 leading-relaxed">
              <p>
                A história começa com os chineses, que misturavam neve com frutas fazendo uma espécie de sorvete. Esta técnica foi passada aos árabes, que logo começaram a fazer caldas geladas chamadas de <em>sharbet</em>, e que mais tarde se transformaram nos famosos sorvetes franceses sem leite, os <em>sorbets</em>.
              </p>
              
              <p>
                Nos banquetes de Alexandre, o Grande, na Grécia, e nas famosas festas gastronômicas do imperador Nero, em Roma, os convidados já degustavam frutas e saladas geladas com neve. O Imperador mandava seus escravos buscarem neve nas montanhas para misturar com mel, polpa ou suco de frutas. O gelo era estocado em profundos poços construídos pelo povo.
              </p>
              
              <div className="my-10 border-l-4 border-[#0066cc] bg-slate-50 p-6 rounded-r-lg">
                <p className="font-semibold text-[#0a2540]">
                  Porém, a grande revolução no mundo dos sorvetes aconteceu com Marco Polo, que trouxe do Oriente para a Itália, em 1292, o segredo do preparo de sorvetes usando técnicas especiais.
                </p>
              </div>
              
              <p>
                Assim a moda dos sorvetes espalhou-se por toda a Itália, e quando Catarina de Medici casou-se na França com o futuro Henrique II, entre as novidades trazidas da Itália para o banquete de casamento, estavam as deliciosas sobremesas geladas, as quais, encantaram toda a corte.
              </p>
              
              <p>
                Mas o grande público francês só teve acesso a estas especialidades um século depois quando Francesco Procópio abriu um café, em Paris, que servia bebidas geladas e sorvete tipo <em>sorbet</em>.
              </p>
              
              <p>
                Os sorvetes se espalharam por toda a Europa e logo chegaram também aos Estados Unidos. A primeira produção de sorvete em escala industrial ocorreu nos Estados Unidos, há 40 anos. Hoje, no mundo todo, quem mais fabrica sorvete são os norte-americanos.
              </p>

              <h2 className="mt-10 font-display text-2xl font-bold text-[#0a2540]">O Sorvete no Brasil</h2>
              
              <p>
                No Brasil, o sorvete ficou conhecido em 1834, quando dois comerciantes cariocas compraram 217 toneladas de gelo, vindas em um navio norte-americano, e começaram a fabricar sorvetes com frutas brasileiras. Na época, não havia como conservar o sorvete gelado e, por isso, tinha que ser tomado logo após o seu preparo. Um anúncio avisava a hora exata da fabricação.
              </p>
              
              <p>
                O primeiro anúncio apareceu em São Paulo, no dia 4 de janeiro de 1878, contendo a seguinte mensagem:
              </p>
              
              <div className="mt-6 flex items-center justify-center p-6 bg-[#0a2540] text-white rounded-xl shadow-inner font-display text-lg sm:text-xl font-bold tracking-wide text-center">
                “SORVETES – Todos os dias às 15 horas, na Rua Direita, nº 44.”
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
