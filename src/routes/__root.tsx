import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404 · Página fora do dossiê</p>
        <h1 className="font-display text-6xl mt-4">Esse capítulo<br />ainda não existe.</h1>
        <p className="mt-4 text-ink-soft">A rota que você tentou abrir não faz parte da narrativa.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-ink text-paper px-5 py-3 text-sm hover:bg-cinnabar transition-colors"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Algo desalinhou</p>
        <h1 className="font-display text-4xl mt-3">Este capítulo não pôde carregar.</h1>
        <p className="mt-3 text-ink-soft">Tente recarregar — geralmente é instantâneo.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-ink text-paper px-5 py-3 text-sm hover:bg-cinnabar transition-colors"
          >
            Tentar de novo
          </button>
          <a href="/" className="rounded-full border border-ink px-5 py-3 text-sm hover:bg-ink hover:text-paper transition-colors">
            Ir ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Carlos Cavalcante — Dossiê & Portfólio" },
      { name: "description", content: "Dossiê de carreira e portfólio editorial de Carlos Cavalcante, estudante de Análise e Desenvolvimento de Sistemas na CESAR School com foco em Engenharia de Dados." },
      { name: "author", content: "Carlos Cavalcante" },
      { name: "theme-color", content: "#FFFFE3" },
      { property: "og:site_name", content: "Carlos Cavalcante · Dossiê" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Carlos Cavalcante — Dossiê & Portfólio" },
      { property: "og:description", content: "Engenharia de Dados, projetos integradores e trajetória — em formato editorial." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
