import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/site/ChapterLayout";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico Profissional — Carlos Cavalcante" },
      { name: "description", content: "Como me vejo hoje: pontos fortes, dificuldades, grupo de trabalho e direções concretas de melhoria." },
      { property: "og:title", content: "Diagnóstico Profissional — Carlos Cavalcante" },
      { property: "og:description", content: "Autoanálise honesta: forças, gaps e plano de melhoria de 12 meses." },
      { property: "og:url", content: "/diagnostico" },
    ],
    links: [{ rel: "canonical", href: "/diagnostico" }],
  }),
  component: () => <ChapterLayout slug="/diagnostico" />,
});
