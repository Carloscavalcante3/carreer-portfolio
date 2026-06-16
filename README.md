# Carlos Cavalcante — Dossiê de Carreira & Portfólio

Portfólio editorial premium que também cumpre os 10 requisitos do
Dossiê de Carreira (Projeto Integrador V — CESAR School, ADS).

> Editorial creme/baunilha com vermelho cinábrio como único acento.
> Tipografia: Instrument Serif (display) + Inter (corpo) + JetBrains Mono (meta).

## Stack

- **TanStack Start** (React 19 + Vite 7) com file-based routing
- **TypeScript** estrito
- **Tailwind CSS v4** (config CSS-first em `src/styles.css`)
- **shadcn/ui** + Radix primitives
- **Motion (Framer Motion)** para revelações e parallax
- **Lucide** para ícones
- Deploy gerenciado via Lovable (Cloudflare Workers).

## Como rodar localmente

```bash
bun install
bun run dev
```

Abre em `http://localhost:8080`.

## Estrutura

```
src/
├─ assets/            # Imagens / fotos (asset pointers Lovable)
├─ components/
│  ├─ site/           # Header, Footer, Reveal, ChapterLayout
│  └─ ui/             # shadcn/ui primitives
├─ content/           # ÚNICO lugar para editar texto/dados
│  ├─ profile.ts      # Nome, bio, links, interesses, objetivos
│  ├─ experiences.ts  # Estágios (SCGE, Avantia)
│  ├─ projects.ts     # Projetos integradores
│  ├─ skills.ts       # Mapa de competências
│  ├─ timeline.ts     # Linha do tempo
│  ├─ chapters.ts     # Os 10 capítulos do dossiê (rotas + meta)
│  └─ chapter-content.ts  # Blocos de conteúdo longo por capítulo
├─ hooks/
├─ routes/            # File-based routing TanStack
│  ├─ __root.tsx      # Shell: fontes, header, footer, SEO base
│  ├─ index.tsx       # Home narrativa (5 atos)
│  ├─ perfil.tsx      # 02 · Perfil Profissional
│  ├─ diagnostico.tsx # 03 · Diagnóstico
│  ├─ empregabilidade.tsx # 04 · Contexto e Empregabilidade
│  ├─ hipoteses.tsx   # 05 · Hipóteses de Desenvolvimento
│  ├─ experimentacao.tsx  # 06 · Experimentação Prática
│  ├─ evidencias.tsx  # 07 · Evidências e Aprendizados
│  ├─ percurso.tsx    # 08 · Projetos e Percurso Acadêmico
│  ├─ planejamento.tsx    # 09 · Planejamento Pós-Faculdade
│  ├─ sintese.tsx     # 10 · Síntese Final · Carta Profissional
│  └─ sitemap[.]xml.ts    # Sitemap dinâmico
├─ types/dossier.ts   # Tipagem central
└─ styles.css         # Design system (tokens, tipografia, utilities)
```

## Editar conteúdo (sem tocar em código)

Todo conteúdo textual vive em `src/content/*.ts`. Cada arquivo é
tipado por `src/types/dossier.ts`, então o TypeScript te diz se você
esqueceu um campo.

| Quero mudar... | Arquivo |
| --- | --- |
| Bio, foto, links sociais, interesses | `src/content/profile.ts` |
| Adicionar/editar um estágio | `src/content/experiences.ts` |
| Adicionar/editar projeto integrador | `src/content/projects.ts` |
| Skills e níveis (1–5) | `src/content/skills.ts` |
| Eventos da linha do tempo | `src/content/timeline.ts` |
| Texto longo de um capítulo do dossiê | `src/content/chapter-content.ts` |
| Título/descrição de um capítulo | `src/content/chapters.ts` |

A foto é um asset Lovable (`src/assets/carlos.asset.json`). Pra
trocar, suba uma nova via chat ou rode `lovable-assets create`.

## Publicar

### Pela Lovable (1 clique)

No editor, clique em **Publish**. Sai em `*.lovable.app`. Custom
domain opcional em Project Settings → Domains.

### GitHub

Conecte o projeto ao GitHub via menu `+` → GitHub → Connect project.
Sync bidirecional. Você pode hospedar fora também — o build é Vite
padrão (`bun run build`).

> Observação: este projeto roda em TanStack Start (SSR + Workers), e
> **não** é um export estático Next.js para GitHub Pages. Pra hospedar
> estaticamente, seria necessário reescrever para Next.js export ou
> Vite SPA + adapter.

## Continuar com outra IA

A arquitetura foi pensada para isso:

- Tipos centrais em `src/types/dossier.ts` — qualquer IA infere o
  schema rapidamente.
- Conteúdo isolado em `src/content/*` — IA edita texto sem mexer em
  componentes.
- Componentes de página em `src/components/site/*` — Reveal,
  ChapterLayout, Header, Footer já modulares.
- Cada capítulo do dossiê tem rota própria, meta SEO próprio e usa
  `ChapterLayout` que lê de `chapter-content.ts`. Para adicionar um
  capítulo: criar entrada em `chapters.ts`, blocos em
  `chapter-content.ts`, e um arquivo de rota copiando qualquer dos
  existentes.

## Cobertura dos requisitos acadêmicos

| # | Requisito | Onde está |
| --- | --- | --- |
| 01 | Página Inicial | `/` |
| 02 | Perfil Profissional | `/perfil` |
| 03 | Diagnóstico Profissional | `/diagnostico` |
| 04 | Contexto e Empregabilidade | `/empregabilidade` |
| 05 | Hipóteses de Desenvolvimento | `/hipoteses` |
| 06 | Experimentação Prática | `/experimentacao` |
| 07 | Evidências e Aprendizados | `/evidencias` |
| 08 | Projetos e Percurso Acadêmico | `/percurso` |
| 09 | Planejamento Pós-Faculdade | `/planejamento` |
| 10 | Síntese Final · Carta Profissional | `/sintese` |
