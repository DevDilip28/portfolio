import { projects } from "../lib/portfolio";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function ProjectsSection() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <Reveal>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects that show depth across AI and full-stack."
            description="ForgeAI leads with agentic engineering; the rest span RAG, automation, developer platforms, and cloud products—with live demos where available."
          />
        </div>
      </Reveal>

      {featured && (
        <div className="mt-12">
          <ProjectCard project={featured} index={0} />
        </div>
      )}

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {rest.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i + 1} />
        ))}
      </div>
    </section>
  );
}
