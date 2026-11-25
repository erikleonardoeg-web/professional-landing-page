// Identidade tipográfica PROVISÓRIA. Troque por <img src="/logo.svg"> quando a logo oficial chegar.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 font-display uppercase leading-none tracking-wide ${className}`} aria-label="TDS GYM">
      <span className="text-foreground">TDS</span>
      <span className="h-[0.7em] w-[3px] -skew-x-12 self-center bg-primary" aria-hidden />
      <span className="text-primary">GYM</span>
    </span>
  );
}
