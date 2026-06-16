import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { chapters } from "@/content/chapters";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-paper/75 border-b border-rule"
          : "bg-transparent",
      )}
    >
      <div className="container-editorial flex items-center justify-between h-16">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl leading-none">Carlos Cavalcante</span>
          <span className="eyebrow hidden sm:inline">Dossiê · {profile.period}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {chapters.slice(0, 6).map((c) => (
            <NavItem key={c.slug} to={c.slug} num={c.number} label={c.title} />
          ))}
          <ChaptersDropdown />
        </nav>

        <button
          onClick={() => setOpen((s) => !s)}
          aria-label="Abrir menu"
          className="lg:hidden p-2 -mr-2 text-ink"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-rule bg-paper">
          <nav className="container-editorial py-4 grid gap-1">
            {chapters.map((c) => (
              <Link
                key={c.slug}
                to={c.slug}
                className="flex items-baseline gap-3 py-2 text-ink hover:text-cinnabar transition-colors"
              >
                <span className="font-mono text-xs text-muted-foreground w-8">{c.number}</span>
                <span className="font-display text-xl">{c.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function NavItem({ to, num, label }: { to: string; num: string; label: string }) {
  return (
    <Link
      to={to}
      className="group relative px-3 py-2 text-sm text-ink-soft hover:text-ink transition-colors"
      activeProps={{ className: "text-ink" }}
      activeOptions={{ exact: to === "/" }}
    >
      <span className="font-mono text-[10px] text-cinnabar mr-1.5 align-top">{num}</span>
      {label}
    </Link>
  );
}

function ChaptersDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        onMouseEnter={() => setOpen(true)}
        onClick={() => setOpen((s) => !s)}
        className="px-3 py-2 text-sm text-ink-soft hover:text-ink"
      >
        Mais ↓
      </button>
      {open && (
        <div className="absolute right-0 top-full pt-2 w-72">
          <div className="bg-paper border border-rule rounded-lg shadow-xl p-2">
            {chapters.slice(6).map((c) => (
              <Link
                key={c.slug}
                to={c.slug}
                className="flex items-baseline gap-3 px-3 py-2 rounded-md hover:bg-paper-2"
              >
                <span className="font-mono text-[10px] text-cinnabar">{c.number}</span>
                <span className="text-sm">{c.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
