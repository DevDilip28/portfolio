import { socialLinks } from "../lib/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <p>© {new Date().getFullYear()} Dilip Asdeo</p>
        <div className="flex flex-wrap gap-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={socialLinks.email}
            className="transition-colors hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
