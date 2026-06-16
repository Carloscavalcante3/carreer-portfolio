// Os 10 capítulos do Dossiê de Carreira (Projeto Integrador V — CESAR School).
// Cada capítulo tem rota própria e meta SEO individual.

import type { ChapterMeta } from "@/types/dossier";

export const chapters: ChapterMeta[] = [
  { number: "01", slug: "/",                title: "Quem sou",                 kicker: "Página inicial",         description: "Apresentação, curso, interesses, objetivos e canais — o ponto de entrada da história." },
  { number: "02", slug: "/perfil",          title: "Perfil profissional",      kicker: "Formação e competências", description: "Formação, competências técnicas e comportamentais, projetos e aprendizados." },
  { number: "03", slug: "/diagnostico",     title: "Diagnóstico profissional", kicker: "Autoconhecimento",       description: "Como me vejo hoje: pontos fortes, dificuldades, grupo e direções de melhoria." },
  { number: "04", slug: "/empregabilidade", title: "Contexto e empregabilidade", kicker: "Mercado",              description: "Análise de vagas, requisitos, comparação com meu perfil atual e networking." },
  { number: "05", slug: "/hipoteses",       title: "Hipóteses de desenvolvimento", kicker: "Plano de carreira", description: "Plano de curto, médio e longo prazo — onde quero estar e como chego lá." },
  { number: "06", slug: "/experimentacao",  title: "Experimentação prática",   kicker: "Projeto integrador",     description: "Papel no projeto integrador, entregas, colaboração e soft skills em ação." },
  { number: "07", slug: "/evidencias",      title: "Evidências e aprendizados", kicker: "Provas",                description: "Prints, certificados, feedbacks e o contexto que transforma evidência em aprendizado." },
  { number: "08", slug: "/percurso",        title: "Projetos e percurso acadêmico", kicker: "Linha do tempo",    description: "Linha do tempo de disciplinas, projetos e evolução ao longo do curso." },
  { number: "09", slug: "/planejamento",    title: "Planejamento pós-faculdade", kicker: "Próximo capítulo",     description: "Leitura de mercado, especialização, certificações e plano após a graduação." },
  { number: "10", slug: "/sintese",         title: "Síntese final",            kicker: "Carta profissional",     description: "Comparação entre o ponto de partida e o ponto atual, em formato de carta profissional." },
];

export function chapterBySlug(slug: string) {
  return chapters.find((c) => c.slug === slug);
}
