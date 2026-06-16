// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// All routes of the dossier — explicitly prerendered to plain HTML so the
// output can be served as a fully static site (GitHub Pages compatible).
const ROUTES = [
  "/",
  "/perfil",
  "/diagnostico",
  "/empregabilidade",
  "/hipoteses",
  "/experimentacao",
  "/evidencias",
  "/percurso",
  "/planejamento",
  "/sintese",
];

// When building for GitHub Pages project sites (https://user.github.io/<repo>/),
// the GitHub Action sets GH_PAGES_BASE=/<repo>/. For user/organization sites
// and for the Lovable preview/Cloudflare build, base stays as "/".
const base = process.env.GH_PAGES_BASE ?? "/";

export default defineConfig({
  vite: { base },
  tanstackStart: {
    server: { entry: "server" },
    pages: ROUTES.map((path) => ({ path, prerender: { enabled: true } })),
  },
});
