import logoAsset from "@/assets/tds-gym-logo.png.asset.json";

// Logo oficial da TDS GYM (PNG com fundo transparente).
export function Logo({ className = "h-12 w-auto md:h-16" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="TDS GYM"
      width={1393}
      height={965}
      decoding="async"
      className={`object-contain ${className}`}
    />
  );
}
