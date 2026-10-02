import { learningAreas } from "../lib/portfolio";
import SectionHeading from "./SectionHeading";
import Tag from "./Tag";
import Reveal from "./Reveal";

export default function GenAISection() {
  return (
    <section id="genai" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-ai/[0.15] blur-[80px]" />

      <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="GenAI trajectory"
            title="Going deeper into production AI engineering."
            description="Active learning aligned with the systems I build—retrieval, agents, LLM infrastructure, and backend reliability."
          />
        </Reveal>

        <div className="grid gap-4">
          {learningAreas.map((area, i) => (
            <Reveal key={area.title} delayMs={i * 70}>
              <article className="rounded-2xl border border-white/[0.08] bg-panel/40 p-6 transition duration-300 hover:border-ai/30 hover:bg-panel/70 sm:p-7">
                <h3 className="font-display text-xl tracking-[-0.03em] text-white sm:text-2xl">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">{area.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <Tag key={tag} label={tag} variant="accent" />
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
