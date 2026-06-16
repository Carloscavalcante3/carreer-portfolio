import type { Project } from "@/types/dossier";

export const projects: Project[] = [
  {
    slug: "sjcc",
    title: "SJCC — Redação assistida por IA",
    period: "Ago — Dez 2024",
    kind: "Acadêmico",
    problem:
      "Redatores precisam produzir notícias em ritmo alto e simultaneamente acompanhar tendências de pauta.",
    solution:
      "Aplicativo web com IA generativa para apoio na criação de matérias e painel de acompanhamento de trends em tempo real.",
    role: "Desenvolvimento full-stack e integração com modelos de linguagem.",
    outcomes: [
      "Fluxo editorial com sugestão automática de pauta",
      "Painel de tendências com filtros por tema",
      "Primeira imersão em produto com IA aplicada",
    ],
    stack: ["React", "Node", "LLM", "REST"],
  },
  {
    slug: "fh-data",
    title: "FH Data — Plataforma de Customer Success",
    period: "Fev — Jun 2025",
    kind: "Acadêmico",
    problem:
      "Operação de Customer Success descentralizada, com comunicação dispersa e baixa visibilidade do estado dos clientes.",
    solution:
      "Plataforma centralizada para acompanhamento de clientes, registro de interações e comunicação direcionada.",
    role: "Modelagem de dados, backend e arquitetura de telas.",
    outcomes: [
      "Visão única do cliente para o time de CS",
      "Histórico estruturado de interações",
      "Redução de retrabalho na comunicação",
    ],
    stack: ["React", "TypeScript", "Postgres", "API"],
  },
  {
    slug: "contagia",
    title: "ContagIA — Globo",
    period: "Ago — Dez 2025",
    kind: "Acadêmico",
    problem:
      "Pagamento e rastreamento de trilhas jornalísticas dependiam de processos manuais sujeitos a falha.",
    solution:
      "Pipeline de detecção automática de áudio para identificar trechos musicais e rastrear uso para fins de pagamento.",
    role: "Engenharia de dados de áudio, modelagem e integração com pipeline.",
    outcomes: [
      "Detecção automática com alta precisão",
      "Rastreamento auditável de uso",
      "Redução drástica do esforço manual",
    ],
    stack: ["Python", "Audio Fingerprinting", "Pipelines", "ML"],
  },
  {
    slug: "licitame",
    title: "LicitaME — Licitações para MEIs",
    period: "Fev — Jun 2026",
    kind: "Acadêmico",
    problem:
      "Microempreendedores individuais têm enorme dificuldade em participar de licitações públicas: linguagem, prazos e documentação são barreiras reais.",
    solution:
      "Aplicativo mobile com integração ao pipeline do PNCP, chatbot de orientação e envio guiado de arquivos.",
    role: "Engenharia de dados (PNCP), arquitetura e integração do chatbot.",
    outcomes: [
      "Pipeline ingerindo dados oficiais do PNCP",
      "Chatbot guiando o MEI por etapa",
      "Submissão de documentos simplificada",
    ],
    stack: ["React Native", "Python", "PNCP API", "LLM"],
  },
];
