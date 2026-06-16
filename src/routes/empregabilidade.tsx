import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/site/ChapterLayout";

export const Route = createFileRoute("/empregabilidade")({
  head: () => ({
    meta: [
      { title: "Contexto e Empregabilidade — Carlos Cavalcante" },
      { name: "description", content: "Análise do mercado de Engenharia de Dados, requisitos recorrentes, comparação com meu perfil e estratégia de networking." },
      { property: "og:title", content: "Contexto e Empregabilidade — Carlos Cavalcante" },
      { property: "og:description", content: "Leitura do mercado de Engenharia de Dados e meu posicionamento atual frente às vagas júnior." },
      { property: "og:url", content: "/empregabilidade" },
    ],
    links: [{ rel: "canonical", href: "/empregabilidade" }],
  }),
  component: () => <ChapterLayout slug="/empregabilidade" />,
});
