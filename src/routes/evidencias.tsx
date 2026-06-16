import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { ChapterLayout } from "@/components/site/ChapterLayout";
import { Reveal } from "@/components/site/Reveal";
import { profile } from "@/content/profile";

export const Route = createFileRoute("/evidencias")({
  head: () => ({
    meta: [
      { title: "Evidências e Aprendizados — Carlos Cavalcante" },
      { name: "description", content: "Repositórios, certificados, feedbacks e o contexto que transforma evidência em aprendizado consolidado." },
      { property: "og:title", content: "Evidências e Aprendizados — Carlos Cavalcante" },
      { property: "og:description", content: "Provas públicas de trabalho: GitHub, certificações e feedbacks." },
      { property: "og:url", content: "/evidencias" },
    ],
    links: [{ rel: "canonical", href: "/evidencias" }],
  }),
  component: () => (
    <ChapterLayout slug="/evidencias">
      <Reveal>
        <section className="grid md:grid-cols-2 gap-6">
          <a href={profile.links[0].href} target="_blank" rel="noreferrer" className="group border border-rule rounded-xl p-7 bg-card/60 hover:bg-paper-2 transition-colors">
            <div className="flex items-center justify-between">
              <Github className="h-6 w-6" />
              <ArrowUpRight className="h-4 w-4 group-hover:text-cinnabar" />
            </div>
            <h3 className="font-display text-2xl mt-4">GitHub público</h3>
            <p className="text-sm text-ink-soft mt-1">{profile.links[0].handle}</p>
            <p className="text-ink-soft mt-3">Histórico de commits, projetos acadêmicos e estudos. A evidência mais consistente do meu jeito de trabalhar.</p>
          </a>
          <a href={profile.links[1].href} target="_blank" rel="noreferrer" className="group border border-rule rounded-xl p-7 bg-card/60 hover:bg-paper-2 transition-colors">
            <div className="flex items-center justify-between">
              <Linkedin className="h-6 w-6" />
              <ArrowUpRight className="h-4 w-4 group-hover:text-cinnabar" />
            </div>
            <h3 className="font-display text-2xl mt-4">LinkedIn</h3>
            <p className="text-sm text-ink-soft mt-1">{profile.links[1].handle}</p>
            <p className="text-ink-soft mt-3">Trajetória profissional, recomendações e atualizações dos projetos em curso.</p>
          </a>
        </section>
      </Reveal>
      <Reveal>
        <div className="text-center pt-4">
          <Link to="/percurso" className="text-cinnabar hover:underline">Ver percurso acadêmico completo →</Link>
        </div>
      </Reveal>
    </ChapterLayout>
  ),
});
