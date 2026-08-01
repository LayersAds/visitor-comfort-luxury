import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { NAV, WHATSAPP_COMPANY } from "./data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const solid = scrolled || !isHome;
  const link = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "glass-bar shadow-[0_10px_30px_-25px_rgba(0,0,0,0.6)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <a href={link("#home")} className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="شعار شركة راحة الزائر للسياحة"
            width={56}
            height={56}
            className="h-12 w-12 rounded-xl object-cover ring-1 ring-accent/40"
          />
          <span className="leading-tight">
            <span
              className={`block text-base font-extrabold ${solid ? "text-primary" : "text-primary-foreground"}`}
            >
              شركة راحة الزائر
            </span>
            <span
              className={`block text-[11px] tracking-wide ${solid ? "text-muted-foreground" : "text-primary-foreground/75"}`}
            >
              للسياحة والضيافة
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={link(n.href)}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                solid
                  ? "text-primary/80 hover:bg-secondary hover:text-primary"
                  : "text-primary-foreground/85 hover:bg-white/15 hover:text-primary-foreground"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={link("#contact")} className="btn-gold hidden !px-5 !py-2.5 text-sm sm:inline-flex">
            احجز الآن
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_COMPANY}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="اتصال عبر واتساب"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors sm:hidden ${
              solid ? "border-border text-primary" : "border-white/50 text-primary-foreground"
            }`}
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="فتح القائمة"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
              solid ? "border-border text-primary" : "border-white/50 text-primary-foreground"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass-bar lg:hidden">
          <div className="container-x grid gap-1 py-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={link(n.href)}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-primary hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
            <a href={link("#contact")} onClick={() => setOpen(false)} className="btn-gold mt-2">
              احجز الآن
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
