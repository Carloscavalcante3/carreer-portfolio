import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/site/ChapterLayout";

export const Route = createFileRoute("/hipoteses")({
  head: () => ({
    meta: [
      { title: "Hipóteses de Desenvolvimento — Carlos Cavalcante" },
      { name: "description", content: "Plano de carreira de curto, médio e longo prazo — direção para Analytics Engineering / Data Platform." },
      { property: "og:title", content: "Hipóteses de Desenvolvimento — Carlos Cavalcante" },
      { property: "og:description", content: "Plano testável de carreira em três horizontes: 12 meses, 3 anos e 7 anos." },
      { property: "og:url", content: "/hipoteses" },
    ],
    links: [{ rel: "canonical", href: "/hipoteses" }],
  }),
  component: () => <ChapterLayout slug="/hipoteses" />,
});
