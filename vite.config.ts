// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// In the Lovable build the cloudflare preset is the default. In the GitHub Pages
// Action we set NITRO_PRESET=node-server + GH_PAGES_BASE=/<repo>/ and run the
// extra `scripts/prerender.mjs` step to flatten every route into static HTML.
const base = process.env.GH_PAGES_BASE ?? "/";

export default defineConfig({
  vite: { base },
  tanstackStart: {
    server: { entry: "server" },
  },
});
