import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GALLERY } from "@/config/gym";

export function Gallery() {
  const [i, setI] = useState<number | null>(null);
  const n = GALLERY.length;
  useEffect(() => {
    if (i === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") setI((v) => (v === null ? v : (v + 1) % n));
      if (e.key === "ArrowLeft") setI((v) => (v === null ? v : (v - 1 + n) % n));
    };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [i, n]);
  const cur = i === null ? null : GALLERY[i];
  return (
    <>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
        {GALLERY.map((g, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Ampliar: ${g.alt}`}
            className={`group relative overflow-hidden bg-card ${idx === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
            <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover grayscale-[30%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0" />
            <span className="absolute inset-0 bg-background/20 transition group-hover:bg-transparent" />
          </button>
        ))}
      </div>
      {cur && i !== null && (
        <div role="dialog" aria-modal="true" aria-label="Galeria ampliada" className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 animate-in fade-in" onClick={() => setI(null)}>
          <button className="absolute right-4 top-4 p-2 text-foreground" aria-label="Fechar" onClick={() => setI(null)}><X className="h-8 w-8" /></button>
          <button className="absolute left-2 p-3 text-foreground hover:text-primary md:left-6" aria-label="Anterior" onClick={(e) => { e.stopPropagation(); setI((i - 1 + n) % n); }}><ChevronLeft className="h-9 w-9" /></button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={cur.src.replace("w=1200", "w=1800")} alt={cur.alt} className="max-h-[80vh] w-auto object-contain" />
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">{cur.alt} · {i + 1}/{n}</figcaption>
          </figure>
          <button className="absolute right-2 p-3 text-foreground hover:text-primary md:right-6" aria-label="Próxima" onClick={(e) => { e.stopPropagation(); setI((i + 1) % n); }}><ChevronRight className="h-9 w-9" /></button>
        </div>
      )}
    </>
  );
}
