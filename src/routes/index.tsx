import { createFileRoute } from "@tanstack/react-router";
import { FloatingWhatsApp, SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { RoiCalculator } from "@/components/landing/RoiCalculator";
import { Products } from "@/components/landing/Products";
import { UseCases } from "@/components/landing/UseCases";
import { SiteFooter } from "@/components/landing/SiteFooter";

const title = "Logrosoft | Máquinas Industriais de Sorvete Expresso";
const description =
  "Máquinas de sorvete, açaí, milkshake e frozen com certificação Inmetro. Frete grátis, 12x sem juros e simulador de lucro mensal para o seu negócio.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <SocialProof />
        <RoiCalculator />
        <Products />
        <UseCases />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
