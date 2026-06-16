import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { experiences } from "@/content/experiences";
import { projects } from "@/content/projects";
import { chapters } from "@/content/chapters";
import { timeline } from "@/content/timeline";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carlos Cavalcante — Engenharia de Dados · Dossiê & Portfólio" },
      { name: "description", content: "Portfólio editorial e dossiê de carreira de Carlos Cavalcante: trajetória, projetos e experiências em engenharia de dados, automação e desenvolvimento." },
      { property: "og:title", content: "Carlos Cavalcante — Engenharia de Dados" },
      { property: "og:description", content: "Portfólio editorial e dossiê de carreira: trajetória, projetos integradores e estágios em engenharia de dados." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhoSection />
      <EvolutionSection />
      <ProjectsSection />
      <HowIThinkSection />
      <NextSection />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative pt-12 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      <div className="container-editorial">
        <div className="flex items-center gap-3 text-xs font-mono text-ink-soft">
          <span className="inline-block h-2 w-2 rounded-full bg-cinnabar animate-pulse" />
          <span>DOSSIÊ DE CARREIRA · EDIÇÃO {new Date().getFullYear()}</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">VOL. 01</span>
        </div>

        <motion.div style={{ y, opacity }} className="mt-10 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h1 className="font-display leading-[0.88] tracking-tight text-[clamp(3.5rem,10vw,9rem)]">
              Carlos<br />
              <span className="italic">Cavalcante</span>
              <span className="text-cinnabar">.</span>
            </h1>
            <p className="mt-8 lead max-w-2xl">{profile.tagline}</p>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-cinnabar/15 rounded-2xl" />
              <img
                src={profile.photoUrl}
                alt="Carlos Cavalcante — retrato"
                className="relative w-48 h-56 md:w-56 md:h-64 object-cover rounded-2xl border border-rule grayscale-[20%] contrast-105"
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-12 gap-6 text-sm">
          <Meta label="Curso" value={profile.course} className="md:col-span-4" />
          <Meta label="Instituição" value={profile.institution} className="md:col-span-3" />
          <Meta label="Período" value={profile.period} className="md:col-span-2" />
          <Meta label="Foco" value="Engenharia de Dados" className="md:col-span-3 text-cinnabar" />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={profile.links[0].href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 rounded-full text-sm hover:bg-cinnabar transition-colors">
            <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3 w-3" />
          </a>
          <a href={profile.links[1].href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-ink px-5 py-3 rounded-full text-sm hover:bg-ink hover:text-paper transition-colors">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 border border-ink px-5 py-3 rounded-full text-sm hover:bg-ink hover:text-paper transition-colors">
            <Mail className="h-4 w-4" /> Conversar
          </a>
          <Link to="/sintese" className="inline-flex items-center gap-2 px-5 py-3 text-sm text-cinnabar hover:underline">
            Ler a carta profissional <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value, className = "" }: { label: string; value: string; className?: string }) {
  return (
    <div className={`border-t border-rule pt-4 ${className}`}>
      <div className="eyebrow">{label}</div>
      <div className="mt-1 font-medium">{value}</div>
    </div>
  );
}

function Marquee() {
  const words = [
    "Engenharia de Dados", "ETL", "Pipelines", "SQL", "Python", "Automação",
    "Visualização", "Dashboards", "IA Aplicada", "Cloud", "Arquitetura",
  ];
  const row = [...words, ...words];
  return (
    <div className="border-y border-rule py-6 overflow-hidden bg-paper-2/60">
      <div className="flex gap-12 marquee whitespace-nowrap font-display text-3xl text-ink-soft">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-12">
            {w}
            <span className="text-cinnabar">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ChapterCue({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs font-mono text-cinnabar">
      <span className="h-px w-10 bg-cinnabar" />
      <span>CAP. {num} · {label.toUpperCase()}</span>
    </div>
  );
}

function WhoSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <Reveal><ChapterCue num="I" label="Quem sou" /></Reveal>
        <div className="mt-6 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Um estudante que aprende<br />
              <span className="italic text-ink-soft">construindo</span>.
            </h2>
            <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl">
              {profile.bio}
            </p>
            <p className="mt-4 text-lg text-ink-soft leading-relaxed max-w-xl">
              Acredito em decisão informada como vantagem competitiva — e em
              engenharia de dados como o ofício que torna isso possível em escala.
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm text-ink-soft">
              <MapPin className="h-4 w-4 text-cinnabar" /> {profile.location}
            </div>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.15}>
            <div className="border border-rule rounded-xl p-6 bg-card/60 backdrop-blur-sm">
              <p className="eyebrow">Interesses</p>
              <ul className="mt-4 grid grid-cols-1 gap-2">
                {profile.interests.map((it) => (
                  <li key={it} className="flex items-baseline gap-3 border-b border-rule/60 pb-2">
                    <span className="text-cinnabar">→</span>
                    <span className="font-display text-2xl">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 border border-rule rounded-xl p-6">
              <p className="eyebrow">Objetivos</p>
              <ol className="mt-4 space-y-3 text-ink-soft">
                {profile.objectives.map((o, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-mono text-xs text-cinnabar mt-1.5">{String(i + 1).padStart(2, "0")}</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function EvolutionSection() {
  return (
    <section className="py-24 md:py-32 bg-paper-2/50 border-y border-rule">
      <div className="container-editorial">
        <Reveal><ChapterCue num="II" label="Como evoluí" /></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            Da curiosidade ao<br />
            <span className="italic">ambiente produtivo</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow">Linha do tempo</p>
              <p className="mt-3 text-ink-soft max-w-md">
                Cada semestre na CESAR School trouxe um projeto integrador novo. Em paralelo,
                dois estágios em sequência completaram a transição para Engenharia de Dados.
              </p>
            </Reveal>
          </div>
          <ol className="md:col-span-7 relative border-l-2 border-cinnabar/30 pl-8 space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={i} delay={i * 0.03} className="relative">
                <span className="absolute -left-[42px] top-1 h-3 w-3 rounded-full bg-cinnabar" />
                <div className="eyebrow">{t.year} · {t.kind === "work" ? "Profissional" : t.kind === "academic" ? "Acadêmico" : "Marco"}</div>
                <h3 className="font-display text-2xl md:text-3xl mt-1">{t.title}</h3>
                <p className="text-ink-soft mt-1">{t.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {experiences.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.1}>
              <article className="h-full border border-rule rounded-xl p-7 bg-paper/80 hover:bg-paper transition-colors">
                <div className="flex items-baseline justify-between flex-wrap gap-2">
                  <h3 className="font-display text-3xl">{e.company}</h3>
                  <span className="font-mono text-xs text-cinnabar">{e.period}</span>
                </div>
                <p className="mt-1 text-ink-soft text-sm">{e.role}</p>
                <p className="mt-4 text-ink-soft leading-relaxed">{e.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.stack?.map((s) => (
                    <span key={s} className="text-xs font-mono border border-rule px-2 py-1 rounded">{s}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <Reveal><ChapterCue num="III" label="O que construí" /></Reveal>
        <Reveal delay={0.05}>
          <div className="mt-6 flex items-end justify-between flex-wrap gap-6">
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Projetos<br /><span className="italic">integradores</span>.
            </h2>
            <Link to="/percurso" className="inline-flex items-center gap-2 text-cinnabar hover:underline">
              Ver percurso completo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <article className="group grid md:grid-cols-12 gap-6 md:gap-8 py-8 border-t border-rule hover:bg-paper-2/40 -mx-4 px-4 rounded-lg transition-colors">
                <div className="md:col-span-2">
                  <div className="font-mono text-xs text-cinnabar">{String(i + 1).padStart(2, "0")}</div>
                  <div className="font-mono text-xs text-ink-soft mt-1">{p.period}</div>
                </div>
                <div className="md:col-span-6">
                  <h3 className="font-display text-3xl md:text-4xl leading-tight">{p.title}</h3>
                  <p className="mt-3 text-ink-soft"><span className="text-cinnabar">Problema · </span>{p.problem}</p>
                  <p className="mt-2 text-ink"><span className="text-cinnabar">Solução · </span>{p.solution}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="text-xs font-mono border border-rule px-2 py-1 rounded">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-4">
                  <p className="eyebrow">Resultados</p>
                  <ul className="mt-3 space-y-2">
                    {p.outcomes.map((o, j) => (
                      <li key={j} className="text-sm text-ink-soft flex gap-2">
                        <span className="text-cinnabar mt-1.5 h-1 w-1 rounded-full bg-cinnabar shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowIThinkSection() {
  return (
    <section className="py-24 md:py-32 bg-paper-3/60 border-y border-rule">
      <div className="container-editorial">
        <Reveal><ChapterCue num="IV" label="Como penso" /></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            Três princípios que<br />
            <span className="italic">guiam meu trabalho</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Dado limpo é decisão limpa", d: "Investir em qualidade no início do pipeline custa menos do que apagar incêndio no dashboard depois." },
            { n: "02", t: "Código que outra pessoa entende", d: "Estruturar, nomear e documentar como se o próximo a manter fosse um colega novo na quarta-feira de manhã." },
            { n: "03", t: "Negócio antes da ferramenta", d: "Stack não resolve problema — entendimento sim. Ferramenta vem depois da pergunta certa." },
          ].map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div className="h-full border border-rule bg-paper rounded-xl p-7">
                <div className="font-mono text-xs text-cinnabar">{p.n}</div>
                <h3 className="font-display text-3xl mt-2 leading-tight">{p.t}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 text-center">
            <Link to="/diagnostico" className="inline-flex items-center gap-2 text-cinnabar hover:underline">
              Ler diagnóstico profissional completo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NextSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <Reveal><ChapterCue num="V" label="Para onde vou" /></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            O próximo capítulo:<br />
            <span className="italic">plataforma de dados</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7">
            <p className="text-ink-soft text-lg leading-relaxed">
              Meu plano combina três eixos: aprofundamento técnico em orquestração e
              warehousing moderno, certificação cloud orientada a dados, e exposição
              internacional via empresa com operação global. A direção é Analytics
              Engineering / Data Platform — escolha consciente baseada nos dois
              estágios e nos projetos integradores entregues.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/hipoteses" className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 rounded-full text-sm hover:bg-cinnabar transition-colors">
                Hipóteses de desenvolvimento <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/planejamento" className="inline-flex items-center gap-2 border border-ink px-5 py-3 rounded-full text-sm hover:bg-ink hover:text-paper transition-colors">
                Plano pós-faculdade
              </Link>
            </div>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.1}>
            <div className="border border-rule rounded-xl divide-y divide-rule">
              {chapters.slice(1).map((c) => (
                <Link
                  key={c.slug}
                  to={c.slug}
                  className="group flex items-center justify-between gap-4 p-5 hover:bg-paper-2/60 transition-colors"
                >
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span className="font-mono text-xs text-cinnabar shrink-0">{c.number}</span>
                    <div className="min-w-0">
                      <div className="font-display text-xl truncate">{c.title}</div>
                      <div className="text-xs text-muted-foreground truncate">{c.kicker}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-ink-soft group-hover:text-cinnabar transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
