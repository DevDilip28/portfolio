import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Tag from "../components/Tag";

const projects = [
  {
    title: "ContextIQ",
    category: "Generative AI · RAG",
    description:
      "A full-stack AI knowledge workspace that turns PDFs, websites, and YouTube videos into searchable knowledge and context-aware conversations.",
    details:
      "Built an end-to-end RAG system covering source ingestion, document processing, chunking, embeddings, semantic retrieval, conversation memory, and grounded LLM responses.",
    stack: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "LangChain",
      "LangGraph",
      "FAISS",
      "Groq",
    ],
    live: "https://contextiq-ten.vercel.app/",
    github: "https://github.com/DevDilip28/ContextIQ",
    featured: true,
  },
  {
    title: "TriggerFlow",
    category: "Full-stack · Workflow Automation",
    description:
      "A visual workflow automation platform for designing trigger-to-action pipelines and executing them automatically.",
    details:
      "Built a node-based workflow system with event-driven backend services, real-time execution updates, external API integrations, and a TurboRepo monorepo architecture.",
    stack: [
      "React",
      "TypeScript",
      "React Flow",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSockets",
    ],
    live: "https://trigger-flow-client.vercel.app/",
    github: "https://github.com/DevDilip28/TriggerFlow",
  },
  {
    title: "DropVault",
    category: "Full-stack · Cloud Storage",
    description:
      "A modern cloud storage application for securely uploading, previewing, and managing photos and PDF files.",
    details:
      "Built around Clerk authentication, ImageKit uploads, PostgreSQL metadata, Drizzle ORM, and a responsive Next.js dashboard.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "ImageKit",
      "Drizzle",
      "PostgreSQL",
    ],
    live: "https://www.dropvault.site/",
    github: "https://github.com/DevDilip28/DropVault",
  },
  {
    title: "AlgoHol!c",
    category: "Full-stack · Developer Platform",
    description:
      "A developer learning platform built around problem solving, progress tracking, streaks, achievements, and an interactive code editor.",
    details:
      "Built a production-oriented application with JWT authentication, modular backend architecture, Prisma, PostgreSQL, multi-language execution, and user progress systems.",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
    ],
    live: "https://algoholic.site",
    github: "https://github.com/DevDilip28/AlGoHolic",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces, product UI, and responsive web experiences.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    description:
      "APIs, authentication, databases, and application architecture.",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "JWT",
    ],
  },
  {
    title: "Generative AI",
    description:
      "AI applications built around models, retrieval, and orchestration.",
    skills: [
      "LLMs",
      "LLM APIs",
      "RAG",
      "Embeddings",
      "Semantic Search",
      "LangChain",
      "LangGraph",
      "AI Agents",
    ],
  },
  {
    title: "Data & Infrastructure",
    description: "The systems that support reliable applications.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Drizzle",
      "Docker",
      "Git",
      "TurboRepo",
    ],
  },
];

const learningAreas = [
  {
    title: "RAG & Context Engineering",
    text: "Improving retrieval, embeddings, context selection, and grounded generation.",
    tags: ["RAG", "Embeddings", "Context"],
  },
  {
    title: "Agentic AI",
    text: "Building systems that use tools, maintain state, and handle multi-step workflows.",
    tags: ["LangGraph", "Tools", "Agents"],
  },
  {
    title: "LLM Systems",
    text: "Going deeper into model APIs, structured outputs, orchestration, memory, and reliability.",
    tags: ["LLM APIs", "Orchestration", "Memory"],
  },
  {
    title: "AI Backend Engineering",
    text: "Strengthening APIs, async processing, databases, authentication, and scalable architecture.",
    tags: ["FastAPI", "Node.js", "PostgreSQL"],
  },
];

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
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.35-3.87-1.35-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46-.11-3.05 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.35.78 1.05.78 2.12v3.14c0 .3.21.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#0b0d10] text-white">
      <Navbar />

      <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-12 lg:pb-24 lg:pt-8">
        <div className="pointer-events-none absolute right-[-12%] top-[4%] h-[500px] w-[500px] rounded-full bg-accent/[0.045] blur-[130px]" />

        <div className="relative grid w-full gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.035] px-4 py-2.5 text-xs uppercase tracking-[0.16em] text-[#9ca4ad]">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(182,243,107,0.65)]" />
              Full-stack developer
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(182,243,107,0.65)]" />
              GenAI builder
            </div>

            <h1 className="max-w-5xl font-display text-[4.2rem] font-medium leading-[0.88] tracking-[-0.075em] sm:text-8xl lg:text-[8.4rem]">
              Dilip Asdeo
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#aeb5bd] sm:text-xl sm:leading-9">
              Full-stack developer building modern web applications and AI systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-1"
              >
                View my work
                <ArrowUpRight />
              </a>

              <a
                href="https://github.com/DevDilip28"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white transition duration-200 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <GithubIcon />
                GitHub
              </a>
            </div>
          </div>

          <div className="lg:pb-2">
            <div className="border-l border-white/[0.1] pl-6 sm:pl-8">
              <p className="text-xs uppercase tracking-[0.18em] text-[#7f8790]">
                Currently exploring
              </p>

              <p className="mt-4 max-w-sm text-base leading-7 text-[#d1d6dc] sm:text-lg sm:leading-8">
                Advanced GenAI systems, backend engineering, and the
                architecture behind AI-powered products.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["FastAPI", "RAG", "LangGraph", "LLM Systems"].map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/[0.07] bg-[#101318]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <SectionHeading eyebrow="About me" title="I build products." />

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-[#d7dbe0] sm:text-2xl sm:leading-10">
                I&apos;m a software engineer focused on building reliable,
                user-focused applications across the full stack.
              </p>

              <p className="mt-6 text-lg leading-8 text-[#929aa5] sm:text-xl sm:leading-9">
                My work spans modern web development, backend systems, and
                Generative AI. I enjoy taking an idea from architecture and APIs
                all the way to a polished product.
              </p>

              <p className="mt-6 text-lg leading-8 text-[#929aa5] sm:text-xl sm:leading-9">
                Right now, I&apos;m going deeper into RAG, AI agents, LLM
                systems, and the engineering needed to make AI applications
                actually useful in production.
              </p>

              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
                <div className="bg-[#15181d] p-6">
                  <p className="font-display text-2xl tracking-tight text-white">
                    Build
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#89919c]">
                    Full-stack products from idea to deployment.
                  </p>
                </div>

                <div className="bg-[#15181d] p-6">
                  <p className="font-display text-2xl tracking-tight text-white">
                    Explore
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#89919c]">
                    LLMs, RAG, agents, and emerging AI systems.
                  </p>
                </div>

                <div className="bg-[#15181d] p-6">
                  <p className="font-display text-2xl tracking-tight text-white">
                    Improve
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#89919c]">
                    Turning working software into better systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects that show how I build."
          />

          <p className="max-w-md text-base leading-7 text-[#87909b] lg:justify-self-end lg:text-right">
            From full-stack products to AI systems, these are some of the
            projects I&apos;ve built.
          </p>
        </div>

        <div className="mt-14 grid gap-7">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="border-y border-white/[0.07] bg-[#101318]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <SectionHeading
                eyebrow="Tech stack"
                title="The tools behind the work."
              />

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#7f8791]">
                A practical stack across frontend, backend, data, and Generative
                AI.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="group rounded-2xl border border-white/[0.08] bg-[#15181d] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-[#181c22] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="font-display text-2xl tracking-[-0.03em] text-white">
                      {group.title}
                    </h3>

                    <span className="text-accent opacity-70 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      ↗
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-[#87909b]">
                    {group.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Tag key={skill} label={skill} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="genai"
        className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="pointer-events-none absolute left-[20%] top-[15%] h-72 w-72 rounded-full bg-accent/[0.035] blur-[120px]" />

        <div className="relative grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Currently learning"
              title="Going deeper into GenAI engineering."
            />

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#7f8791]">
              Learning beyond simple API calls and building a stronger
              understanding of AI systems.
            </p>
          </div>

          <div className="grid gap-3">
            {learningAreas.map((area) => (
              <article
                key={area.title}
                className="group rounded-2xl border border-white/[0.08] bg-[#101318] p-6 transition duration-300 hover:border-accent/20 hover:bg-[#15181d] sm:p-7"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-xl">
                    <h3 className="font-display text-xl tracking-[-0.03em] text-white sm:text-2xl">
                      {area.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#87909b]">
                      {area.text}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-2 sm:max-w-[240px] sm:justify-end">
                    {area.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="pointer-events-none absolute left-[25%] top-[20%] h-72 w-72 rounded-full bg-accent/[0.035] blur-[120px]" />

        <div className="relative">
          <p className="text-xs uppercase tracking-[0.2em] text-[#7f8791]">
            Contact
          </p>

          <h2 className="mt-6 max-w-4xl font-display text-[3.8rem] font-medium leading-[0.92] tracking-[-0.065em] text-white sm:text-7xl lg:text-[6.5rem]">
            Let&apos;s build
            <span className="block text-accent">something useful.</span>
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:dilipasdeo028@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-1"
            >
              dilipasdeo028@gmail.com
              <ArrowUpRight />
            </a>

            <a
              href="https://www.linkedin.com/in/dilipasdeo/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-white transition duration-200 hover:border-accent/30 hover:text-accent"
            >
              LinkedIn
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 text-sm text-[#6f7782] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>© 2026 Dilip Asdeo.</p>

          <div className="flex gap-6">
            <a
              href="https://github.com/DevDilip28"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/dilipasdeo/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
