type TagProps = {
  label: string;
  variant?: "default" | "accent" | "muted";
};

export default function Tag({ label, variant = "default" }: TagProps) {
  const styles = {
    default:
      "border-white/[0.09] bg-white/[0.03] text-subtle hover:border-white/[0.16] hover:text-white",
    accent:
      "border-accent/25 bg-accent/[0.08] text-accent hover:border-accent/40",
    muted: "border-transparent bg-white/[0.04] text-muted",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-200 ${styles[variant]}`}
    >
      {label}
    </span>
  );
}
