// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// All routes of the dossier — prerendered to plain HTML when building for
// GitHub Pages (static deploy). In the regular Lovable build (Cloudflare),
// prerender stays off and TanStack Start does normal SSR.
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

const isPagesBuild = process.env.GH_PAGES === "1";
const base = process.env.GH_PAGES_BASE ?? "/";

export default defineConfig({
  vite: { base },
  tanstackStart: {
    server: { entry: "server" },
    ...(isPagesBuild
      ? { pages: ROUTES.map((path) => ({ path, prerender: { enabled: true } })) }
      : {}),
  },
});
