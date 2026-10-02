import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const pillars = [
  {
    title: "Ship",
    description: "End-to-end products—from schema design to polished UI.",
  },
  {
    title: "Engineer AI",
    description: "RAG, agents, and LLM workflows built for real use cases.",
  },
  {
    title: "Iterate",
    description: "Clear architecture, measurable improvements, maintainable code.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="border-y border-white/[0.06] bg-elevated/50">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="Engineer who builds products, not just features."
            />
          </Reveal>

          <Reveal delayMs={80}>
            <div className="max-w-3xl space-y-6 text-lg leading-8 text-subtle sm:text-xl sm:leading-9">
              <p className="text-[#e2e8ef]">
                I&apos;m a full-stack developer focused on dependable
                applications across frontend, backend, and Generative AI. I care
                about clarity for users and clarity for the next engineer reading
                the codebase.
              </p>
              <p>
                My recent work centers on agentic coding tools, RAG assistants,
                and full-stack platforms—combining strong API design with
                thoughtful product experience.
              </p>
              <p>
                I&apos;m especially interested in context engineering, tool-using
                agents, and the backend patterns that make AI systems trustworthy
                in production.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delayMs={120 + i * 60}>
                  <div className="rounded-xl border border-white/[0.08] bg-panel/60 p-5">
                    <p className="font-display text-xl tracking-[-0.02em] text-white">
                      {pillar.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
