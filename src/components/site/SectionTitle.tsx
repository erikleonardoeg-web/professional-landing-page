export function SectionTitle({ eyebrow, title, className = "" }: { eyebrow: string; title: string; className?: string }) {
  return (
    <div className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] text-foreground sm:text-5xl md:text-6xl">{title}</h2>
    </div>
  );
}
