import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Termos de Uso | Logrosoft";
const description =
  "Condições de uso do site e das simulações de lucro da Logrosoft, fabricante de máquinas industriais de sorvete expresso.";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Termos,
});

function Termos() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-extrabold text-primary">Termos de Uso</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          Ao navegar neste site você concorda com estes termos. O conteúdo tem caráter informativo
          e comercial sobre os equipamentos Logrosoft.
        </p>
        <p>
          As simulações da calculadora de lucro são estimativas baseadas nos valores informados
          pelo próprio usuário e não representam garantia de resultado financeiro.
        </p>
        <p>
          Preços, prazos e condições de pagamento são confirmados pelo time comercial no momento da
          proposta.
        </p>
      </div>
      <Link to="/" className="mt-8 inline-block text-sm font-semibold text-cta hover:underline">
        Voltar à página inicial
      </Link>
    </main>
  );
}
