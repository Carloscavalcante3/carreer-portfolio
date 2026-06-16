import type { SkillGroup } from "@/types/dossier";

export const skills: SkillGroup[] = [
  {
    group: "Dados & Engenharia",
    items: [
      { name: "Python", level: 4 },
      { name: "SQL", level: 4 },
      { name: "ETL / Pipelines", level: 4 },
      { name: "Modelagem de dados", level: 3 },
      { name: "Airflow / Orquestração", level: 3 },
    ],
  },
  {
    group: "Desenvolvimento",
    items: [
      { name: "TypeScript", level: 3 },
      { name: "React / Next", level: 3 },
      { name: "Node", level: 3 },
      { name: "Git / GitHub", level: 4 },
    ],
  },
  {
    group: "Visualização & Análise",
    items: [
      { name: "Dashboards", level: 4 },
      { name: "Storytelling com dados", level: 3 },
      { name: "Estatística aplicada", level: 3 },
    ],
  },
  {
    group: "Soft Skills",
    items: [
      { name: "Organização", level: 5 },
      { name: "Aprendizado contínuo", level: 5 },
      { name: "Comunicação técnica", level: 4 },
      { name: "Pensamento sistêmico", level: 4 },
      { name: "Colaboração", level: 4 },
    ],
  },
];
