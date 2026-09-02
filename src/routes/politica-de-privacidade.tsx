import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Política de Privacidade | Logrosoft";
const description =
  "Como a Logrosoft coleta, utiliza e protege os dados de contato dos interessados em máquinas industriais de sorvete expresso.";

export const Route = createFileRoute("/politica-de-privacidade")({
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
  component: Politica,
});

function Politica() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-extrabold text-primary">Política de Privacidade</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          Coletamos apenas os dados necessários para o atendimento comercial: nome, telefone,
          e-mail e informações sobre o seu negócio, enviados por você via WhatsApp ou e-mail.
        </p>
        <p>
          Os dados são utilizados exclusivamente para envio de propostas e suporte, e não são
          vendidos a terceiros.
        </p>
        <p>
          Para solicitar acesso, correção ou exclusão dos seus dados, escreva para
          comercial@logrosoftexpresso.com.br, conforme a LGPD (Lei 13.709/2018).
        </p>
      </div>
      <Link to="/" className="mt-8 inline-block text-sm font-semibold text-cta hover:underline">
        Voltar à página inicial
      </Link>
    </main>
  );
}
