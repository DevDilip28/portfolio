import ButtonLink from "./ui/ButtonLink";
import Reveal from "./Reveal";
import { socialLinks } from "../lib/portfolio";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-5 pb-24 pt-8 sm:px-8 lg:px-10 lg:pb-32"
    >
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-accent/[0.06] blur-[90px]" />

      <Reveal>
        <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-panel via-canvas to-[#141a28] p-10 sm:p-12 lg:p-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Contact
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">useful and shippable.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-subtle sm:text-lg">
            Open to full-stack and GenAI-focused roles, internships, and
            collaborations. Reach out—I typically respond within a day.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={socialLinks.email} variant="primary" icon="arrow">
              dilipasdeo028@gmail.com
            </ButtonLink>
            <ButtonLink
              href={socialLinks.linkedin}
              variant="secondary"
              icon="arrow"
              external
            >
              LinkedIn
            </ButtonLink>
            <ButtonLink
              href={socialLinks.github}
              variant="secondary"
              icon="github"
              external
            >
              GitHub
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
