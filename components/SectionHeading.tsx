type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-display text-[2.35rem] font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.25rem]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-subtle sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
