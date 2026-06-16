import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { chapters } from "@/content/chapters";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-rule">
      <div className="container-editorial py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow">Colofão</p>
          <h3 className="font-display text-4xl mt-3 leading-tight">
            Vamos construir algo<br />que importe.
          </h3>
          <p className="mt-4 text-ink-soft max-w-md">
            Aberto a conversas sobre Engenharia de Dados, plataformas analíticas
            e oportunidades de estágio/efetivação a partir de 2026.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 rounded-full text-sm hover:bg-cinnabar transition-colors"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <a
              href={profile.links[0].href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-ink px-5 py-3 rounded-full text-sm hover:bg-ink hover:text-paper transition-colors"
            >
              <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={profile.links[1].href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-ink px-5 py-3 rounded-full text-sm hover:bg-ink hover:text-paper transition-colors"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-7">
          <p className="eyebrow">Capítulos</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
            {chapters.map((c) => (
              <li key={c.slug}>
                <Link to={c.slug} className="text-sm text-ink-soft hover:text-cinnabar transition-colors">
                  <span className="font-mono text-[10px] text-cinnabar mr-1.5">{c.number}</span>
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Meta</p>
          <p className="mt-3 text-sm text-ink-soft leading-relaxed">
            {profile.course}<br />
            {profile.institution}<br />
            {profile.location}
          </p>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="container-editorial py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
          <span>© {year} Carlos Cavalcante. Dossiê de Carreira · Projeto Integrador V</span>
          <span>Set em Instrument Serif e Inter</span>
        </div>
      </div>
    </footer>
  );
}
