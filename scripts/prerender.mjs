// Post-build static prerender for GitHub Pages.
//
// Runs AFTER `NITRO_PRESET=node-server bun run build`. The node-server build
// emits a runnable Node server at dist/server/index.mjs (TanStack Start +
// nitro) plus the client assets at dist/client/. We:
//
//   1. boot the server on a free local port
//   2. fetch every route in ROUTES and pipe the HTML into dist/client/<route>/index.html
//   3. copy the home as 404.html so GitHub Pages deep-link refreshes still work
//   4. write .nojekyll so GH Pages serves files starting with underscore
//
// The result in dist/client/ is a 100% static site ready to upload to Pages.

import { spawn } from "node:child_process";
import { mkdir, writeFile, copyFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { setTimeout as sleep } from "node:timers/promises";

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

const PORT = process.env.PRERENDER_PORT ?? "4173";
const BASE = (process.env.GH_PAGES_BASE ?? "/").replace(/\/$/, "") || "";
const OUT = "dist/client";

async function waitForServer(url, timeoutMs = 30_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const r = await fetch(url);
      if (r.status < 500) return;
    } catch {}
    await sleep(250);
  }
  throw new Error(`Server did not become ready at ${url} within ${timeoutMs}ms`);
}

async function fileExists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function main() {
  const serverEntry = "dist/server/index.mjs";
  if (!(await fileExists(serverEntry))) {
    throw new Error(`Missing ${serverEntry}. Build first with NITRO_PRESET=node-server.`);
  }

  console.log(`▸ Booting SSR server on port ${PORT}...`);
  const proc = spawn(process.execPath, [serverEntry], {
    env: { ...process.env, PORT, HOST: "127.0.0.1", NITRO_PORT: PORT },
    stdio: ["ignore", "inherit", "inherit"],
  });

  const cleanup = () => { try { proc.kill("SIGTERM"); } catch {} };
  process.on("exit", cleanup);
  process.on("SIGINT", () => { cleanup(); process.exit(1); });

  try {
    await waitForServer(`http://127.0.0.1:${PORT}/`);
    console.log("▸ Server up. Prerendering routes...");

    for (const route of ROUTES) {
      const url = `http://127.0.0.1:${PORT}${route}`;
      const res = await fetch(url, { headers: { accept: "text/html" } });
      if (!res.ok) throw new Error(`Failed ${route}: ${res.status} ${res.statusText}`);
      let html = await res.text();

      // Vite already injected the configured `base` into asset URLs at build
      // time; nothing to rewrite here.

      const outPath = route === "/"
        ? join(OUT, "index.html")
        : join(OUT, route.replace(/^\//, ""), "index.html");
      await mkdir(dirname(outPath), { recursive: true });
      await writeFile(outPath, html, "utf8");
      console.log(`  ✓ ${route}  →  ${outPath}`);
    }

    // GitHub Pages SPA-style fallback: serve the home as 404.html so direct
    // hits on a nested URL return real content instead of GH's default 404.
    await copyFile(join(OUT, "index.html"), join(OUT, "404.html"));
    await writeFile(join(OUT, ".nojekyll"), "", "utf8");

    console.log(`▸ Done. Static site at ${OUT}/  (base="${BASE || "/"}")`);
  } finally {
    cleanup();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
