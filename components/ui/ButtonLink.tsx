import type { ReactNode } from "react";
import { ArrowUpRight, GithubIcon } from "../icons";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  icon?: "arrow" | "github" | "none";
  className?: string;
};

export default function ButtonLink({
  href,
  children,
  variant = "secondary",
  external = false,
  icon = "none",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const variants = {
    primary:
      "bg-accent text-ink shadow-glow-sm hover:-translate-y-0.5 hover:brightness-105 font-semibold",
    secondary:
      "border border-white/10 bg-white/[0.03] text-white hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]",
    ghost:
      "border border-transparent text-muted hover:text-white hover:border-white/10",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon === "github" && <GithubIcon />}
      {children}
      {icon === "arrow" && <ArrowUpRight className="text-base leading-none" />}
    </a>
  );
}
