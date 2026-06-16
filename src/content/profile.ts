import type { Profile } from "@/types/dossier";
import carlosAsset from "@/assets/carlos.asset.json";

export const profile: Profile = {
  name: "Carlos Cavalcante",
  role: "Engenheiro de Dados em formação",
  course: "Análise e Desenvolvimento de Sistemas",
  institution: "CESAR School",
  period: "2024 — 2026",
  location: "Recife, Brasil",
  email: "carlos.cavalcante@cesar.school",
  photoUrl: carlosAsset.url,
  tagline:
    "Transformo problemas em pipelines, painéis e decisões — com pensamento analítico, dado limpo e código que dura.",
  bio:
    "Estudante de tecnologia movido por curiosidade e método. Aprendo construindo: pipelines, dashboards, automações e produtos que tiram fricção de processos reais. Hoje minha rota é Engenharia de Dados — onde código, estatística e negócio se encontram.",
  interests: [
    "Engenharia de Dados",
    "ETL & Orquestração",
    "Automação de Processos",
    "Visualização de Dados",
    "IA Aplicada",
    "Arquitetura de Software",
  ],
  objectives: [
    "Consolidar fundamentos de engenharia de dados em produção real",
    "Dominar orquestração (Airflow), warehousing moderno e modelagem dimensional",
    "Construir um portfólio público de pipelines end-to-end",
    "Trilhar carreira internacional em Data Platform / Analytics Engineering",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/Carloscavalcante3", handle: "@Carloscavalcante3" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/carlos-cavalcante3/", handle: "carlos-cavalcante3" },
    { label: "E-mail", href: "mailto:carlos.cavalcante@cesar.school", handle: "carlos.cavalcante@cesar.school" },
  ],
};
