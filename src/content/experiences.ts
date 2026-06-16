import type { Experience } from "@/types/dossier";

export const experiences: Experience[] = [
  {
    company: "Avantia",
    role: "Estagiário em Engenharia de Dados",
    period: "Abril 2026 — atual",
    summary:
      "Atuação direta em engenharia de dados aplicada ao ambiente produtivo, com responsabilidade sobre pipelines que sustentam decisões comerciais.",
    responsibilities: [
      "Construção e manutenção de pipelines de ETL em larga escala",
      "Modelagem e processamento de dados para áreas de negócio",
      "Desenvolvimento de dashboards comerciais e operacionais",
      "Otimização de cargas e custos de processamento",
      "Documentação técnica e padronização de práticas de dados",
    ],
    learnings: [
      "Escalabilidade e custo: pensar dado como produto",
      "Trabalho com dados reais, sujos e voláteis",
      "Arquitetura de plataforma de dados",
      "Tradução de KPI de negócio em modelo analítico",
    ],
    stack: ["Python", "SQL", "ETL", "Dashboards", "Cloud"],
  },
  {
    company: "SCGE — Secretaria da Controladoria Geral do Estado",
    role: "Estagiário",
    period: "2025 — Abril 2026",
    summary:
      "Atuação em atividades de dados, automação e melhoria de processos no setor público, com forte componente de organização e visão sistêmica.",
    responsibilities: [
      "Manipulação e tratamento de bases de dados",
      "Automação de rotinas repetitivas",
      "Apoio analítico a demandas internas",
      "Acompanhamento operacional de processos",
      "Geração de informação para tomada de decisão",
    ],
    learnings: [
      "Disciplina de processo e rastreabilidade",
      "Visão sistêmica do fluxo de informação",
      "Comunicação clara entre técnico e não-técnico",
    ],
    stack: ["Python", "Excel", "Automação", "SQL"],
  },
];
