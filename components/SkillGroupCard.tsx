import type { SkillGroup } from "../lib/portfolio";
import Tag from "./Tag";
import Reveal from "./Reveal";

type SkillGroupCardProps = {
  group: SkillGroup;
  index?: number;
};

export default function SkillGroupCard({
  group,
  index = 0,
}: SkillGroupCardProps) {
  const highlighted = group.highlight;

  return (
    <Reveal delayMs={index * 50}>
      <article
        className={`h-full rounded-2xl border p-6 sm:p-7 transition duration-300 hover:-translate-y-0.5 ${
          highlighted
            ? "border-accent/20 bg-gradient-to-br from-accent/[0.06] via-panel to-ai/[0.08] shadow-glow-sm hover:border-accent/35"
            : "border-white/[0.08] bg-panel/50 hover:border-white/[0.14] hover:bg-panel"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl tracking-[-0.03em] text-white sm:text-2xl">
              {group.title}
            </h3>
            {highlighted && (
              <span className="mt-2 inline-flex rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                Core strength
              </span>
            )}
          </div>
        </div>

        <p className="mt-3 text-sm leading-7 text-muted">{group.description}</p>

        <div className="mt-6 space-y-5">
          {group.capabilities.map((capability) => (
            <div key={capability.name}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
                {capability.name}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {capability.skills.map((skill) => (
                  <Tag
                    key={skill}
                    label={skill}
                    variant={highlighted ? "accent" : "default"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </Reveal>
  );
}
