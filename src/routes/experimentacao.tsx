import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/site/ChapterLayout";

export const Route = createFileRoute("/experimentacao")({
  head: () => ({
    meta: [
      { title: "Experimentação Prática — Carlos Cavalcante" },
      { name: "description", content: "Papel no projeto integrador LicitaME, entregas concretas, colaboração e soft skills em ação." },
      { property: "og:title", content: "Experimentação Prática — Carlos Cavalcante" },
      { property: "og:description", content: "Como soft skills viram entrega concreta no projeto integrador LicitaME." },
      { property: "og:url", content: "/experimentacao" },
    ],
    links: [{ rel: "canonical", href: "/experimentacao" }],
  }),
  component: () => <ChapterLayout slug="/experimentacao" />,
});
