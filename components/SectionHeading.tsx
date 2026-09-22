type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-xl">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#737b74]">
        {eyebrow}
      </p>

      <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-[-0.045em] text-white sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-[#737b74]">{description}</p>
      )}
    </div>
  );
}
