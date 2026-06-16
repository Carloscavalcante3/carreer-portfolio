import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/site/ChapterLayout";

export const Route = createFileRoute("/planejamento")({
  head: () => ({
    meta: [
      { title: "Planejamento Pós-Faculdade — Carlos Cavalcante" },
      { name: "description", content: "Leitura de mercado, especialização desejada, certificações no radar e plano de atuação pós-graduação." },
      { property: "og:title", content: "Planejamento Pós-Faculdade — Carlos Cavalcante" },
      { property: "og:description", content: "Estratégia de especialização em Data Platform / Analytics Engineering após a graduação." },
      { property: "og:url", content: "/planejamento" },
    ],
    links: [{ rel: "canonical", href: "/planejamento" }],
  }),
  component: () => <ChapterLayout slug="/planejamento" />,
});
