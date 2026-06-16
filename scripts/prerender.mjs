// Post-build static prerender for GitHub Pages.
//
// Runs AFTER `bun run build`. The Lovable build emits a Cloudflare Worker
// module at dist/server/index.mjs (default export with a fetch(req, env, ctx)
// signature) plus the client assets at dist/client/. We:
//
//   1. Import that module directly into Node (no HTTP server boot needed)
//   2. Call its fetch() for every route in ROUTES and write the HTML into
//      dist/client/<route>/index.html
//   3. Copy home as 404.html so deep-link refreshes work on GitHub Pages
//   4. Write .nojekyll so files starting with underscore are served
//
// The result in dist/client/ is a 100% static site ready to upload to Pages.

import { mkdir, writeFile, copyFile, access } from "node:fs/promises";
import { join, dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

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

const OUT = "dist/client";
// In the published GH Pages site, requests arrive at e.g. /<repo>/perfil, but
// the TanStack router was built with base=/<repo>/ baked into client assets.
// For SSR we just need to give the handler the path WITHOUT the base prefix.
const BASE = (process.env.GH_PAGES_BASE ?? "/").replace(/\/+$/, "");

async function fileExists(p) {
  try { await access(p); return true; } catch { return false; }
}

// Stub Cloudflare env. The handler checks env.ASSETS for static asset URLs;
// returning a 404 forces it to fall through to SSR for the HTML routes we want.
const ASSETS = {
  fetch: () => new Response("not found", { status: 404 }),
};
const env = { ASSETS };
const ctx = {
  waitUntil: () => {},
  passThroughOnException: () => {},
};

async function main() {
  const entryRel = "dist/server/index.mjs";
  if (!(await fileExists(entryRel))) {
    throw new Error(`Missing ${entryRel}. Run \`bun run build\` first.`);
  }
  const entryUrl = pathToFileURL(resolve(entryRel)).href;
  const mod = await import(entryUrl);
  const handler = mod.default ?? mod;
  if (typeof handler.fetch !== "function") {
    throw new Error("Server bundle has no default.fetch(); cannot prerender.");
  }

  console.log(`▸ Prerendering ${ROUTES.length} routes (base="${BASE || "/"}")`);

  for (const route of ROUTES) {
    // Request through the same base path Vite baked into the client bundle —
    // otherwise the router 307-redirects us to the prefixed URL.
    const pathWithBase = BASE
      ? (route === "/" ? `${BASE}/` : `${BASE}${route}`)
      : route;
    const url = `http://localhost${pathWithBase}`;
    const req = new Request(url, { headers: { accept: "text/html", "accept-encoding": "identity" } });
    const res = await handler.fetch(req, env, ctx);
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`Route ${route} failed: ${res.status} ${res.statusText}\n${body.slice(0, 500)}`);
    }
    const html = await res.text();
    const outPath = route === "/"
      ? join(OUT, "index.html")
      : join(OUT, route.replace(/^\//, ""), "index.html");
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, "utf8");
    console.log(`  ✓ ${route}  →  ${outPath}  (${html.length.toLocaleString()} bytes)`);
  }

  await copyFile(join(OUT, "index.html"), join(OUT, "404.html"));
  await writeFile(join(OUT, ".nojekyll"), "", "utf8");
  console.log(`▸ Done. Static site at ${OUT}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
