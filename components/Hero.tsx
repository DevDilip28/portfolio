import ButtonLink from "./ui/ButtonLink";
import Tag from "./Tag";
import Reveal from "./Reveal";
import { SparkIcon } from "./icons";
import { socialLinks } from "../lib/portfolio";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-90" />
      <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-accent/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-ai/[0.12] blur-[90px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-subtle">
              <SparkIcon className="h-4 w-4 text-accent" />
              Full-stack · GenAI · Agentic systems
            </div>

            <h1 className="mt-8 max-w-4xl font-display text-[2.75rem] font-medium leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.5rem]">
              Building reliable products with{" "}
              <span className="text-gradient">modern AI</span> at the core.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-subtle sm:text-xl sm:leading-9">
              I&apos;m{" "}
              <span className="font-medium text-white">Dilip Asdeo</span>
              —a software engineer shipping full-stack web apps, backend
              systems, and production-minded GenAI experiences recruiters and
              teams can evaluate quickly.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#work" variant="primary" icon="arrow">
                View projects
              </ButtonLink>
              <ButtonLink
                href={socialLinks.github}
                variant="secondary"
                icon="github"
                external
              >
                GitHub
              </ButtonLink>
              <ButtonLink
                href="#skills"
                variant="secondary"
                icon="arrow"
              >
                Skills
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="rounded-2xl border border-white/[0.08] bg-panel/80 p-6 shadow-panel backdrop-blur-sm sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Focus areas
              </p>

              <ul className="mt-5 space-y-4">
                {[
                  {
                    title: "Agentic AI",
                    text: "LangGraph agents, MCP tools, durable session state",
                  },
                  {
                    title: "RAG & LLM apps",
                    text: "Grounded chat, retrieval pipelines, orchestration",
                  },
                  {
                    title: "Full-stack delivery",
                    text: "Next.js, APIs, auth, data layers, deployment",
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="border-l-2 border-accent/40 pl-4"
                  >
                    <p className="font-display text-lg tracking-[-0.02em] text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["LangGraph", "RAG", "MCP", "FastAPI", "Next.js"].map(
                  (item) => (
                    <Tag key={item} label={item} variant="accent" />
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
