import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { GYM, NAV, WA_MESSAGES, waLink } from "@/config/gym";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-border bg-background/95 backdrop-blur" : "bg-transparent"}`}>
      <div className="container-site flex h-16 items-center justify-between md:h-20">
        <a href="#inicio" className="inline-flex items-center" onClick={() => setOpen(false)}><Logo className="h-11 w-auto md:h-14" /></a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV.map((n) => <a key={n.href} href={n.href} className="nav-link">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-1 lg:gap-4">
        <a href={GYM.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da TDS GYM" className="p-2 text-foreground transition-colors hover:text-primary">
          <Instagram className="h-6 w-6" />
        </a>
        <a href={waLink(WA_MESSAGES.contato)} target="_blank" rel="noopener noreferrer" className="btn-primary hidden !px-5 !py-2.5 lg:inline-flex">Quero treinar</a>
        <button className="p-2 text-foreground lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
        </div>
      </div>
      {open && (
        <div className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto bg-background lg:hidden">
          <nav className="container-site flex flex-col gap-1 pt-6" aria-label="Menu mobile">
            {NAV.map((n, i) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} style={{ animationDelay: `${i * 50}ms` }}
                className="animate-in fade-in slide-in-from-right-4 fill-mode-both border-b border-border py-4 font-display text-4xl uppercase text-foreground">{n.label}</a>
            ))}
            <a href={waLink(WA_MESSAGES.contato)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 w-full">Quero treinar</a>
          </nav>
        </div>
      )}
    </header>
  );
}
