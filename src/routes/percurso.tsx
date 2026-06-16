import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/site/ChapterLayout";
import { Reveal } from "@/components/site/Reveal";
import { timeline } from "@/content/timeline";
import { projects } from "@/content/projects";

export const Route = createFileRoute("/percurso")({
  head: () => ({
    meta: [
      { title: "Percurso Acadêmico — Carlos Cavalcante" },
      { name: "description", content: "Linha do tempo de disciplinas, projetos integradores e evolução ao longo do curso de ADS na CESAR School." },
      { property: "og:title", content: "Percurso Acadêmico — Carlos Cavalcante" },
      { property: "og:description", content: "Linha do tempo completa: cada semestre, cada projeto integrador e cada estágio." },
      { property: "og:url", content: "/percurso" },
    ],
    links: [{ rel: "canonical", href: "/percurso" }],
  }),
  component: () => (
    <ChapterLayout slug="/percurso">
      <Reveal>
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Linha do tempo</h2>
          <ol className="relative border-l-2 border-cinnabar/30 pl-8 space-y-10">
            {timeline.map((t, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[42px] top-1 h-3 w-3 rounded-full bg-cinnabar" />
                <div className="eyebrow">{t.year} · {t.kind === "work" ? "Profissional" : t.kind === "academic" ? "Acadêmico" : "Marco"}</div>
                <h3 className="font-display text-2xl md:text-3xl mt-1">{t.title}</h3>
                <p className="text-ink-soft mt-1">{t.description}</p>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Projetos integradores em detalhe</h2>
          <div className="grid gap-6">
            {projects.map((p) => (
              <article key={p.slug} className="border border-rule rounded-xl p-7 bg-card/60">
                <div className="flex items-baseline justify-between flex-wrap gap-2">
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <span className="font-mono text-xs text-cinnabar">{p.period}</span>
                </div>
                <p className="mt-3 text-ink-soft"><span className="text-cinnabar">Problema · </span>{p.problem}</p>
                <p className="mt-2"><span className="text-cinnabar">Solução · </span>{p.solution}</p>
                <p className="mt-2 text-ink-soft text-sm"><span className="eyebrow">Meu papel · </span>{p.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs font-mono border border-rule px-2 py-1 rounded">{s}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>
    </ChapterLayout>
  ),
});
