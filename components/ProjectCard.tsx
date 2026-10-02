import type { Project } from "../lib/portfolio";
import ButtonLink from "./ui/ButtonLink";
import Tag from "./Tag";
import Reveal from "./Reveal";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const featured = project.featured;

  if (featured) {
    return (
      <Reveal delayMs={index * 60}>
        <article className="group relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-br from-panel via-canvas to-[#12182a] shadow-panel">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.15),transparent_45%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(182,243,107,0.12),transparent_40%)]" />

          <div className="relative grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-between border-b border-white/[0.06] p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  Featured · {project.category}
                </p>
                <h3 className="mt-4 font-display text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-5 text-lg leading-8 text-[#dce3ea]">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  href={project.github}
                  variant="primary"
                  icon="github"
                  external
                >
                  Source code
                </ButtonLink>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <p className="text-sm leading-7 text-muted">{project.details}</p>

              <div className="mt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  Tech stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Tag key={item} label={item} variant="accent" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </Reveal>
    );
  }

  return (
    <Reveal delayMs={index * 60}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-panel/60 transition duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-panel">
        <div className="border-b border-white/[0.06] px-6 py-5 sm:px-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
            {project.category}
          </p>
          <h3 className="mt-2 font-display text-2xl tracking-[-0.03em] text-white sm:text-3xl">
            {project.title}
          </h3>
        </div>

        <div className="flex flex-1 flex-col px-6 py-6 sm:px-7">
          <p className="text-base leading-7 text-[#d5dce4]">
            {project.description}
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">{project.details}</p>

          <div className="mt-6 flex-1">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.live && (
              <ButtonLink href={project.live} variant="primary" icon="arrow" external>
                Live demo
              </ButtonLink>
            )}
            <ButtonLink
              href={project.github}
              variant="secondary"
              icon="github"
              external
            >
              GitHub
            </ButtonLink>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
