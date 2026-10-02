import { skillGroups } from "../lib/portfolio";
import SectionHeading from "./SectionHeading";
import SkillGroupCard from "./SkillGroupCard";
import Reveal from "./Reveal";

export default function SkillsSection() {
  const highlighted = skillGroups.filter((g) => g.highlight);
  const supporting = skillGroups.filter((g) => !g.highlight);

  return (
    <section
      id="skills"
      className="border-y border-white/[0.06] bg-elevated/50"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Skills organized by what I deliver."
            description="Capability groups—not flat lists—so recruiters and hiring managers can map experience to GenAI, agents, backend, and full-stack ownership."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {highlighted.map((group, i) => (
            <SkillGroupCard key={group.title} group={group} index={i} />
          ))}
        </div>

        {supporting.length > 0 && (
          <div className="mt-5 grid gap-5 lg:grid-cols-1">
            {supporting.map((group, i) => (
              <SkillGroupCard
                key={group.title}
                group={group}
                index={highlighted.length + i}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
