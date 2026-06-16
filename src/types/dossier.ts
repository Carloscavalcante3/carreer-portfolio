// Tipagem central do Dossiê / Portfólio. Todo conteúdo editável
// vive em src/content/* e é validado por estas interfaces.

export interface SocialLink {
  label: string;
  href: string;
  handle?: string;
}

export interface Profile {
  name: string;
  role: string;
  course: string;
  institution: string;
  period: string;
  location: string;
  email: string;
  photoUrl: string;
  tagline: string;
  bio: string;
  interests: string[];
  objectives: string[];
  links: SocialLink[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
  learnings: string[];
  stack?: string[];
}

export interface Project {
  slug: string;
  title: string;
  period: string;
  problem: string;
  solution: string;
  role: string;
  outcomes: string[];
  stack: string[];
  kind: "Acadêmico" | "Profissional" | "Pessoal";
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  kind: "academic" | "work" | "milestone";
}

export interface SkillGroup {
  group: string;
  items: { name: string; level: 1 | 2 | 3 | 4 | 5 }[];
}

export interface ChapterMeta {
  number: string;          // "01" .. "10"
  slug: string;            // route segment
  title: string;
  kicker: string;
  description: string;     // for meta + cards
}
