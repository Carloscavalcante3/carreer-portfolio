# Dossiê de Carreira — Carlos Cavalcante

Portfólio editorial + dossiê acadêmico do Projeto Integrador V (CESAR School).
Construído como uma narrativa em 10 capítulos, com identidade visual própria
(papel cru, vermelho cinábrio, tipografia serifada editorial) — sem cara de
trabalho universitário.

**Stack:** TanStack Start (React 19 + Vite 7) · Tailwind v4 · Framer Motion · TypeScript.
**Saída:** site 100% estático (HTML pré-renderizado para cada rota), pronto para GitHub Pages.

---

## Editar conteúdo

Todo o conteúdo do site fica isolado em `src/content/` — você nunca precisa
mexer em componentes para mudar texto.

| Arquivo | O que contém |
| --- | --- |
| `src/content/profile.ts` | Nome, bio, tagline, links, objetivos, interesses |
| `src/content/experiences.ts` | Estágios (Avantia, SCGE) — responsabilidades e aprendizados |
| `src/content/projects.ts` | Projetos integradores (SJCC, FH Data, ContagIA, LicitaME) |
| `src/content/timeline.ts` | Linha do tempo da formação |
| `src/content/skills.ts` | Hard e soft skills, agrupadas |
| `src/content/chapters.ts` | Metadados dos 10 capítulos (slug, título, descrição SEO) |
| `src/content/chapter-content.ts` | **Texto longo** de cada capítulo, em blocos |

Os blocos suportados em `chapter-content.ts` são: `paragraph`, `list`,
`quote`, `grid` (stats), `two-col` e `comparison`. Adicionar/remover blocos
não exige tocar nos componentes — basta editar o array do capítulo.

A foto de perfil é referenciada via `src/assets/carlos.asset.json`.

---

## Rodar localmente

```bash
bun install
bun run dev
# abre em http://localhost:8080
```

Build local idêntico ao de produção:

```bash
bun run build
bun run preview
```

---

## Publicar no GitHub Pages

O workflow `.github/workflows/deploy.yml` faz tudo automaticamente.

**Setup, uma única vez:**

1. Empurre o repositório para o GitHub (a integração nativa do Lovable já cuida disso).
2. No GitHub, abra **Settings → Pages** e selecione **Source: GitHub Actions**.
3. Ainda em **Settings → Actions → General**, garanta **Workflow permissions: Read and write**.

**Deploy:** todo push na branch `main` dispara o Action, que pré-renderiza
cada rota como HTML estático, adiciona `.nojekyll` e `404.html` (para deep
links funcionarem com refresh) e publica em `https://<seu-usuario>.github.io/<repo>/`.

### Sobre o caminho base

O Action seta automaticamente `GH_PAGES_BASE=/<nome-do-repo>/`, que o Vite
usa como `base`. Isso cobre o caso padrão de **project site**
(`https://carloscavalcante3.github.io/<repo>/`).

Se você usar um **user site** (repositório chamado `carloscavalcante3.github.io`),
edite a linha `GH_PAGES_BASE` no workflow para `/` (raiz).

No preview do Lovable e no build padrão, `GH_PAGES_BASE` não é definido e o
`base` permanece `/` — nada muda no editor.

---

## Continuar o desenvolvimento com outra IA

O projeto foi pensado para ser portável e legível por qualquer assistente.

- **Onde está cada coisa:** rotas em `src/routes/` (uma por capítulo, file-based
  routing do TanStack), componentes editoriais em `src/components/site/`,
  primitivas shadcn em `src/components/ui/`, tokens de cor/fonte em `src/styles.css`.
- **Tipos canônicos:** `src/types/dossier.ts` define as interfaces de
  `Profile`, `Experience`, `Project`, `ChapterMeta`, etc. Qualquer edição
  estrutural de conteúdo deve respeitar essas interfaces.
- **Adicionar uma rota nova:** crie `src/routes/<slug>.tsx` exportando uma
  `Route = createFileRoute("/<slug>")({...})`, adicione o slug ao array
  `ROUTES` em `vite.config.ts` (para ser pré-renderizada) e ao
  `src/content/chapters.ts` se for um capítulo do dossiê.
- **Não edite** `src/routeTree.gen.ts` — é gerado automaticamente.

---

## Estrutura de rotas

```
/                  Home — narrativa em 5 atos
/perfil            Capítulo 02 — Perfil profissional
/diagnostico       Capítulo 03 — Diagnóstico
/empregabilidade   Capítulo 04 — Mercado e empregabilidade
/hipoteses         Capítulo 05 — Hipóteses de desenvolvimento
/experimentacao    Capítulo 06 — Experimentação prática
/evidencias        Capítulo 07 — Evidências e aprendizados
/percurso          Capítulo 08 — Percurso acadêmico
/planejamento     Capítulo 09 — Planejamento pós-faculdade
/sintese           Capítulo 10 — Síntese / carta profissional
/sitemap.xml       Sitemap dinâmico (SEO)
```

---

## Links

- GitHub: <https://github.com/Carloscavalcante3>
- LinkedIn: <https://www.linkedin.com/in/carlos-cavalcante3/>
