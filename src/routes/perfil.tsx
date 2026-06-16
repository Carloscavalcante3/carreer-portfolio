import { createFileRoute } from "@tanstack/react-router";
import { ChapterLayout } from "@/components/site/ChapterLayout";
import { Reveal } from "@/components/site/Reveal";
import { skills } from "@/content/skills";

export const Route = createFileRoute("/perfil")({
  head: () => ({
    meta: [
      { title: "Perfil Profissional — Carlos Cavalcante" },
      { name: "description", content: "Formação, competências técnicas e comportamentais, projetos integradores e aprendizados de Carlos Cavalcante." },
      { property: "og:title", content: "Perfil Profissional — Carlos Cavalcante" },
      { property: "og:description", content: "Formação na CESAR School, competências em engenharia de dados e principais aprendizados." },
      { property: "og:url", content: "/perfil" },
    ],
    links: [{ rel: "canonical", href: "/perfil" }],
  }),
  component: () => (
    <ChapterLayout slug="/perfil">
      <Reveal>
        <section>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Mapa de competências</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((g) => (
              <div key={g.group} className="border border-rule rounded-xl p-6 bg-card/60">
                <p className="eyebrow">{g.group}</p>
                <ul className="mt-4 space-y-3">
                  {g.items.map((s) => (
                    <li key={s.name} className="flex items-center justify-between gap-4">
                      <span className="text-ink-soft">{s.name}</span>
                      <span className="flex gap-1" aria-label={`Nível ${s.level} de 5`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={`h-1.5 w-6 rounded-full ${i < s.level ? "bg-cinnabar" : "bg-rule"}`} />
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </ChapterLayout>
  ),
});
