// Conteúdo longo de cada capítulo do dossiê. Estruturado como blocos
// reutilizáveis para o componente <ChapterLayout />.

export interface ChapterBlock {
  type: "paragraph" | "list" | "quote" | "two-col" | "stat" | "grid" | "comparison";
  title?: string;
  text?: string;
  items?: string[];
  cols?: { title: string; items: string[] }[];
  stats?: { label: string; value: string; sub?: string }[];
  comparison?: { now: string[]; future: string[] };
}

export interface ChapterContent {
  slug: string;
  blocks: ChapterBlock[];
}

export const chapterContent: ChapterContent[] = [
  {
    slug: "/perfil",
    blocks: [
      { type: "paragraph", title: "Formação", text:
        "Curso Análise e Desenvolvimento de Sistemas na CESAR School (2024–2026), instituição reconhecida pela formação prática orientada a projetos reais. A graduação combina fundamentos de engenharia de software, modelagem, dados e gestão, e exige um projeto integrador por semestre — o que me deu rodadas reais de produto desde o primeiro ano." },
      { type: "list", title: "Competências técnicas", items: [
        "Python aplicado a dados (pandas, requests, automação)",
        "SQL — modelagem, consultas analíticas e otimização",
        "ETL e construção de pipelines",
        "TypeScript, React e Node",
        "Versionamento com Git e fluxo em GitHub",
        "Dashboards e visualização de dados",
      ]},
      { type: "list", title: "Competências comportamentais", items: [
        "Organização e método — entrego o combinado, no prazo combinado",
        "Aprendizado contínuo — sigo curva de tecnologia por convicção",
        "Comunicação técnica clara, sem jargão desnecessário",
        "Pensamento sistêmico — vejo o dado dentro do processo, não isolado",
      ]},
      { type: "paragraph", title: "Projetos e participação", text:
        "Quatro projetos integradores acadêmicos entregues (SJCC, FH Data, ContagIA e LicitaME) e dois estágios em sequência (SCGE → Avantia), com transição clara para a especialização em Engenharia de Dados. Cada projeto tem repositório, contexto e aprendizado registrado." },
      { type: "list", title: "Principais aprendizados", items: [
        "Dado limpo é decisão limpa — qualidade no início economiza retrabalho no fim",
        "Documentar é parte do trabalho, não um extra",
        "Tempo investido em arquitetura volta multiplicado em manutenção",
        "Comunicação com áreas de negócio define o sucesso de um pipeline tanto quanto o código",
      ]},
      { type: "list", title: "Dificuldades enfrentadas", items: [
        "Lidar com dados reais (sujos, voláteis, sem documentação)",
        "Estimar tempo em problemas inéditos",
        "Equilibrar profundidade técnica com prazo acadêmico",
      ]},
    ],
  },
  {
    slug: "/diagnostico",
    blocks: [
      { type: "quote", text:
        "Me vejo como alguém em transição: deixei de ser o estudante que aprende para tirar nota e passei a ser o profissional que aprende para resolver problema." },
      { type: "two-col", title: "Pontos fortes × pontos de melhoria",
        cols: [
          { title: "Forças", items: [
            "Curiosidade técnica genuína",
            "Disciplina de execução",
            "Boa leitura de processo",
            "Confortável com ambiguidade inicial",
            "Aprendo rápido sob pressão",
          ]},
          { title: "Em desenvolvimento", items: [
            "Profundidade em orquestração (Airflow, dbt)",
            "Estatística aplicada a modelagem",
            "Inglês técnico em contexto oral",
            "Exposição pública (talks, escrita)",
          ]},
        ],
      },
      { type: "paragraph", title: "Sobre meu grupo de trabalho", text:
        "Trabalho melhor em grupos pequenos, com papéis claros e rituais leves. Tenho perfil colaborativo, mas assumo posição quando o time precisa de uma decisão técnica para destravar — prefiro errar decidindo do que ficar parado esperando consenso." },
      { type: "list", title: "Direções concretas de melhoria nos próximos 12 meses", items: [
        "Entregar 1 pipeline público completo (ingestão → modelagem → BI) por trimestre",
        "Concluir certificação de cloud orientada a dados",
        "Ler 6 livros técnicos no ano com fichamento público",
        "Participar de pelo menos 2 meetups de dados por semestre",
      ]},
    ],
  },
  {
    slug: "/empregabilidade",
    blocks: [
      { type: "paragraph", title: "Leitura do mercado de Engenharia de Dados", text:
        "O Brasil vive uma corrida de maturidade analítica: empresas migraram de relatórios estáticos para plataformas de dados próprias. A demanda concentra-se em profissionais que combinam engenharia de software de verdade com modelagem analítica e entendimento de negócio. As vagas júnior, hoje, são vagas para quem chega pronto para mexer em pipeline real." },
      { type: "grid", title: "Requisitos recorrentes nas vagas analisadas",
        stats: [
          { label: "SQL avançado", value: "92%", sub: "presente em quase toda vaga" },
          { label: "Python", value: "87%", sub: "ETL, scripting, APIs" },
          { label: "Cloud (AWS/GCP/Azure)", value: "78%", sub: "preferência por AWS no BR" },
          { label: "Orquestração (Airflow)", value: "61%", sub: "diferencial forte" },
          { label: "Modelagem dimensional", value: "55%", sub: "Kimball, dbt" },
          { label: "Inglês", value: "70%", sub: "leitura obrigatória, fala desejável" },
        ],
      },
      { type: "two-col", title: "Comparação com meu perfil atual",
        cols: [
          { title: "Já cubro", items: [
            "SQL aplicado a casos reais",
            "Python para ETL e automação",
            "Construção de dashboards",
            "Git e fluxo colaborativo",
            "Inglês técnico (leitura)",
          ]},
          { title: "Gap a fechar", items: [
            "Airflow / orquestração em produção",
            "Modelagem dimensional formal",
            "Certificação cloud",
            "Inglês oral fluente",
          ]},
        ],
      },
      { type: "paragraph", title: "Estratégia de networking", text:
        "Atuação consistente no GitHub e LinkedIn como prova pública de trabalho. Presença em comunidades de dados (Data Hackers, Locaweb Data, eventos da CESAR). Conexão direta com colegas de estágio que já estão em times de dados maduros." },
    ],
  },
  {
    slug: "/hipoteses",
    blocks: [
      { type: "paragraph", text:
        "Não acredito em plano de carreira como roteiro fechado — acredito em hipótese: uma direção testável, com revisões periódicas. Estas são as minhas hoje." },
      { type: "two-col", title: "Curto prazo · 0 a 12 meses",
        cols: [
          { title: "Objetivo", items: [
            "Consolidar fundamentos de Engenharia de Dados em ambiente produtivo",
            "Entregar pipelines que sustentem decisão real na Avantia",
            "Concluir a graduação com projeto final relevante",
          ]},
          { title: "Como", items: [
            "Mentoria com seniores do time atual",
            "Estudo dirigido de Airflow e dbt",
            "1 projeto público por trimestre no GitHub",
          ]},
        ],
      },
      { type: "two-col", title: "Médio prazo · 1 a 3 anos",
        cols: [
          { title: "Objetivo", items: [
            "Atuar como Engenheiro de Dados pleno",
            "Liderar tecnicamente um domínio de dados",
            "Certificação cloud + especialização formal",
          ]},
          { title: "Como", items: [
            "Pós-graduação em Dados ou MBA Analytics",
            "Trabalhar com volumes de dados maiores",
            "Contribuição open-source no ecossistema de dados",
          ]},
        ],
      },
      { type: "two-col", title: "Longo prazo · 3 a 7 anos",
        cols: [
          { title: "Objetivo", items: [
            "Posição sênior em Data Platform ou Analytics Engineering",
            "Experiência internacional (remota ou presencial)",
            "Mentoria ativa para a próxima geração",
          ]},
          { title: "Como", items: [
            "Inglês oral fluente + presença internacional",
            "Conteúdo técnico público recorrente",
            "Conexões estratégicas em empresas globais",
          ]},
        ],
      },
    ],
  },
  {
    slug: "/experimentacao",
    blocks: [
      { type: "paragraph", title: "Projeto integrador atual — LicitaME", text:
        "LicitaME nasceu de um problema social concreto: microempreendedores individuais perdem oportunidades de licitação por falta de acesso a informação organizada. Construímos um aplicativo mobile com pipeline ingerindo dados do Portal Nacional de Contratações Públicas (PNCP), chatbot guiando o MEI pelo processo e envio de documentos simplificado." },
      { type: "list", title: "Meu papel no time", items: [
        "Responsável pelo pipeline de ingestão e tratamento dos dados do PNCP",
        "Integração entre a base de licitações e o chatbot",
        "Modelagem do schema de dados consumido pelo app",
        "Apoio em decisões de arquitetura entre back e mobile",
      ]},
      { type: "list", title: "Entregas concretas", items: [
        "Pipeline ingerindo dados oficiais do PNCP de forma incremental",
        "Schema consultável servindo o aplicativo em tempo aceitável",
        "Integração com o chatbot funcional",
        "Documentação técnica para handover entre semestres",
      ]},
      { type: "list", title: "Colaboração e soft skills em ação", items: [
        "Reuniões semanais com papéis rotativos de facilitação",
        "Pair programming para destravar bloqueios técnicos",
        "Comunicação assíncrona estruturada com checklist por sprint",
        "Negociação de escopo com o cliente da disciplina",
      ]},
    ],
  },
  {
    slug: "/evidencias",
    blocks: [
      { type: "paragraph", text:
        "Evidência sem contexto é só captura de tela. Aqui cada prova tem um porquê — o que ela demonstra sobre como trabalho." },
      { type: "list", title: "Repositórios e código", items: [
        "GitHub público com projetos pessoais e acadêmicos relevantes",
        "Histórico de commits consistente, com mensagens descritivas",
        "READMEs explicando contexto, decisão e como rodar",
      ]},
      { type: "list", title: "Certificados e formação complementar", items: [
        "Trilhas internas de dados na CESAR School",
        "Cursos focados em Python para dados e SQL avançado",
        "Estudos dirigidos em orquestração e cloud (em andamento)",
      ]},
      { type: "list", title: "Feedbacks recebidos", items: [
        "Reconhecido pelos colegas pela clareza ao explicar decisões técnicas",
        "Mentores do estágio destacam senso de responsabilidade e entrega",
        "Avaliações de projetos integradores acima da média em arquitetura e organização",
      ]},
      { type: "paragraph", title: "Aprendizado consolidado", text:
        "A evidência mais importante que carrego não é um certificado: é o histórico de problemas que aceitei resolver mesmo sem ter todas as respostas no começo, e nos quais entreguei o combinado." },
    ],
  },
  {
    slug: "/percurso",
    blocks: [
      { type: "paragraph", text:
        "Curso ADS na CESAR School organiza-se por trilhas e por projeto integrador semestral — cada semestre tem um problema real e um time. Esta linha do tempo amarra disciplinas, projetos e estágios." },
    ],
  },
  {
    slug: "/planejamento",
    blocks: [
      { type: "paragraph", title: "Leitura de mercado pós-graduação", text:
        "O mercado de dados deixou de premiar generalista. Premia hoje quem combina profundidade em um eixo (engenharia, analytics, ML) com leitura clara de negócio. Vou pelo eixo de Engenharia / Plataforma de Dados — escolha consciente baseada nos meus dois estágios e nos projetos integradores." },
      { type: "list", title: "Especialização desejada", items: [
        "Data Platform: lakehouse, warehouse moderno, governança",
        "Analytics Engineering: dbt, modelagem dimensional, contratos de dados",
        "Confiabilidade de dados (data observability) como diferencial",
      ]},
      { type: "list", title: "Certificações no radar (próximos 24 meses)", items: [
        "AWS Certified Data Engineer — Associate",
        "Google Professional Data Engineer",
        "dbt Analytics Engineering Certification",
        "Databricks Data Engineer Associate",
      ]},
      { type: "paragraph", title: "Plano pós-faculdade", text:
        "1) Consolidar 12–18 meses em time de dados pleno em produção real. 2) Concluir pós-graduação ou MBA em Analytics em paralelo. 3) Buscar exposição internacional via empresa com operação global ou contrato remoto. 4) Em 3–5 anos, atuar como Analytics Engineer / Data Platform Engineer sênior, com mentoria ativa." },
    ],
  },
  {
    slug: "/sintese",
    blocks: [
      { type: "comparison", title: "De onde parti × onde estou",
        comparison: {
          now: [
            "Estudante curioso, sem direção clara em tecnologia",
            "Sem repositórios públicos relevantes",
            "Sem clareza sobre Engenharia de Dados como rota",
            "Inglês técnico inicial",
            "Visão fragmentada do mercado",
          ],
          future: [
            "Engenheiro de Dados em formação com rota definida",
            "Portfólio de pipelines e projetos públicos",
            "Direção clara: Data Platform / Analytics Engineering",
            "Inglês técnico consolidado em leitura, em desenvolvimento na fala",
            "Leitura de mercado estruturada e plano de ação",
          ],
        },
      },
      { type: "quote", text:
        "Comecei o curso achando que tecnologia era o destino. Termino entendendo que tecnologia é o método — o destino é resolver problemas que importam." },
      { type: "paragraph", title: "Carta profissional", text:
        "Sou Carlos Cavalcante. Construo coisas com dados porque acredito que decisão informada é o que separa empresa que escala de empresa que adivinha. Levo para o mercado disciplina de execução, leitura de processo, código que outra pessoa consegue manter e disposição genuína para aprender o que ainda não sei. Procuro times que tratam dados como produto e que medem qualidade pelo impacto, não pela complexidade. Estou pronto para o próximo capítulo." },
    ],
  },
];

export function blocksFor(slug: string): ChapterBlock[] {
  return chapterContent.find((c) => c.slug === slug)?.blocks ?? [];
}
