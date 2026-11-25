import type { ReactNode } from "react";
export function CtaLink({ href, children, variant = "primary", className = "", external = true }: { href: string; children: ReactNode; variant?: "primary" | "outline"; className?: string; external?: boolean }) {
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${variant === "primary" ? "btn-primary" : "btn-outline"} ${className}`}>{children}</a>
  );
}
