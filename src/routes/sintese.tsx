import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/site/ChapterLayout";

export const Route = createFileRoute("/sintese")({
  head: () => ({
    meta: [
      { title: "Síntese Final — Carta Profissional · Carlos Cavalcante" },
      { name: "description", content: "Comparação entre ponto de partida e ponto atual, encerrando em uma carta profissional. Capítulo final do dossiê." },
      { property: "og:title", content: "Síntese Final — Carlos Cavalcante" },
      { property: "og:description", content: "Onde comecei, onde estou e o que ofereço — em formato de carta profissional." },
      { property: "og:url", content: "/sintese" },
    ],
    links: [{ rel: "canonical", href: "/sintese" }],
  }),
  component: () => <ChapterLayout slug="/sintese" />,
});
