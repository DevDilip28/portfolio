type Project = {
  title: string;
  category: string;
  description: string;
  details: string;
  stack: string[];
  live?: string;
  github: string;
  featured?: boolean;
};

type ProjectCardProps = {
  project: Project;
};

function ArrowUpRight() {
  return (
    <span aria-hidden="true" className="text-lg leading-none">
      ↗
    </span>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.35-3.87-1.35-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.35.78 1.05.78 2.12v3.14c0 .3.21.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d100e] transition duration-300 hover:border-white/[0.15]">
      <div className="relative min-h-[240px] overflow-hidden bg-gradient-to-br from-[#18201a] via-[#121713] to-[#253c2b] p-7 sm:min-h-[280px] sm:p-9">
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#b6f36b]/[0.08] blur-3xl transition duration-500 group-hover:bg-[#b6f36b]/[0.14]" />

        <div className="relative min-h-[190px] sm:min-h-[220px]">
          <p className="absolute left-0 top-0 text-xs uppercase tracking-[0.18em] text-[#8e968f]">
            {project.category}
          </p>

          <div className="flex min-h-[190px] flex-col items-center justify-center text-center sm:min-h-[220px]">
            <h3 className="font-display text-5xl font-medium tracking-[-0.06em] text-white sm:text-6xl">
              {project.title}
            </h3>

            <div className="mt-5 flex max-w-2xl flex-wrap justify-center gap-2">
              {project.stack.slice(0, 5).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-xs text-[#dce1dc]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-7 sm:p-9">
        <p className="text-lg leading-8 text-[#dce1dc]">
          {project.description}
        </p>

        <p className="mt-4 max-w-4xl text-sm leading-7 text-[#737b74]">
          {project.details}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-[#89928b]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#b6f36b] px-5 py-3 text-sm font-semibold text-[#10130f] transition duration-200 hover:-translate-y-1"
            >
              Live project
              <ArrowUpRight />
            </a>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition duration-200 hover:border-[#b6f36b]/40 hover:text-[#b6f36b]"
          >
            <GithubIcon />
            Source code
          </a>
        </div>
      </div>
    </article>
  );
}
