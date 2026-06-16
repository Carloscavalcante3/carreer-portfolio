import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { chapters } from "@/content/chapters";
import { blocksFor, type ChapterBlock } from "@/content/chapter-content";
import { Reveal } from "@/components/site/Reveal";

interface ChapterLayoutProps {
  slug: string;
  children?: ReactNode;
  before?: ReactNode;
}

export function ChapterLayout({ slug, children, before }: ChapterLayoutProps) {
  const meta = chapters.find((c) => c.slug === slug);
  const idx = chapters.findIndex((c) => c.slug === slug);
  const next = chapters[idx + 1];
  const prev = chapters[idx - 1];
  const blocks = blocksFor(slug);
  if (!meta) return null;

  return (
    <article className="pt-20 pb-24">
      <header className="container-editorial">
        <Reveal>
          <p className="eyebrow">Capítulo {meta.number} · {meta.kicker}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4 max-w-4xl">
            {meta.title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lead mt-6 max-w-3xl">{meta.description}</p>
        </Reveal>
        <div className="hairline mt-12" />
      </header>

      {before}

      <div className="container-editorial mt-12 grid gap-16">
        {blocks.map((b, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <BlockRenderer block={b} />
          </Reveal>
        ))}
        {children}
      </div>

      <div className="container-editorial mt-24">
        <div className="hairline mb-8" />
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          {prev ? (
            <Link
              to={prev.slug}
              className="group flex items-baseline gap-3 text-ink hover:text-cinnabar transition-colors"
            >
              <span className="font-mono text-xs">← {prev.number}</span>
              <span className="font-display text-2xl">{prev.title}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link
              to={next.slug}
              className="group flex items-baseline gap-3 text-ink hover:text-cinnabar transition-colors sm:text-right"
            >
              <span className="font-display text-2xl">{next.title}</span>
              <span className="font-mono text-xs">{next.number} →</span>
            </Link>
          ) : (
            <Link to="/" className="group flex items-baseline gap-3 text-ink hover:text-cinnabar">
              <span className="font-display text-2xl">Voltar ao começo</span>
              <ArrowRight className="h-4 w-4 self-center" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function BlockRenderer({ block }: { block: ChapterBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <section className="grid md:grid-cols-12 gap-8">
          {block.title && (
            <h2 className="md:col-span-4 font-display text-3xl md:text-4xl leading-tight">
              {block.title}
            </h2>
          )}
          <p className={`${block.title ? "md:col-span-8" : "md:col-span-12 md:col-start-1 lead"} text-ink-soft text-lg leading-relaxed`}>
            {block.text}
          </p>
        </section>
      );
    case "list":
      return (
        <section className="grid md:grid-cols-12 gap-8">
          {block.title && (
            <h2 className="md:col-span-4 font-display text-3xl md:text-4xl">{block.title}</h2>
          )}
          <ul className="md:col-span-8 grid gap-3">
            {block.items?.map((it, i) => (
              <li key={i} className="flex gap-4 border-b border-rule/60 pb-3">
                <span className="font-mono text-[10px] text-cinnabar mt-2 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-ink-soft text-lg leading-snug">{it}</span>
              </li>
            ))}
          </ul>
        </section>
      );
    case "quote":
      return (
        <blockquote className="max-w-4xl mx-auto text-center px-4">
          <span className="font-display text-cinnabar text-6xl leading-none">"</span>
          <p className="font-display text-3xl md:text-4xl leading-tight text-ink -mt-4">
            {block.text}
          </p>
        </blockquote>
      );
    case "two-col":
      return (
        <section>
          {block.title && (
            <h2 className="font-display text-3xl md:text-4xl mb-8">{block.title}</h2>
          )}
          <div className="grid md:grid-cols-2 gap-6">
            {block.cols?.map((col, i) => (
              <div
                key={i}
                className="bg-card/50 border border-rule rounded-xl p-6 md:p-8 backdrop-blur-sm"
              >
                <p className="eyebrow">{col.title}</p>
                <ul className="mt-4 space-y-3">
                  {col.items.map((it, j) => (
                    <li key={j} className="flex gap-3 text-ink-soft">
                      <span className="text-cinnabar mt-1.5 h-1.5 w-1.5 rounded-full bg-cinnabar shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      );
    case "grid":
      return (
        <section>
          {block.title && (
            <h2 className="font-display text-3xl md:text-4xl mb-8">{block.title}</h2>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule rounded-xl overflow-hidden">
            {block.stats?.map((s, i) => (
              <div key={i} className="bg-paper p-6">
                <div className="font-display text-5xl text-cinnabar">{s.value}</div>
                <div className="mt-2 font-medium text-ink">{s.label}</div>
                {s.sub && <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>}
              </div>
            ))}
          </div>
        </section>
      );
    case "comparison":
      return (
        <section>
          {block.title && (
            <h2 className="font-display text-3xl md:text-4xl mb-8">{block.title}</h2>
          )}
          <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule rounded-xl overflow-hidden">
            <div className="bg-paper-2 p-8">
              <p className="eyebrow">Ponto de partida</p>
              <ul className="mt-4 space-y-3">
                {block.comparison?.now.map((it, i) => (
                  <li key={i} className="text-ink-soft border-b border-rule/50 pb-3 last:border-0">{it}</li>
                ))}
              </ul>
            </div>
            <div className="bg-paper p-8">
              <p className="eyebrow">Hoje</p>
              <ul className="mt-4 space-y-3">
                {block.comparison?.future.map((it, i) => (
                  <li key={i} className="text-ink font-medium border-b border-rule/50 pb-3 last:border-0">{it}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      );
    default:
      return null;
  }
}
