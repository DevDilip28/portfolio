"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "GenAI", href: "#genai" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 mx-auto max-w-7xl px-5 py-5 sm:px-8 lg:px-12">
      <div className="flex items-center justify-between">
        <a
          href="#"
          className="font-display text-2xl font-semibold tracking-[-0.04em] text-white"
          aria-label="Dilip home"
        >
          Dilip
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-2 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:border-accent/40 hover:text-accent"
          >
            Let&apos;s connect
          </a>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 items-center rounded-full border border-white/10 bg-white/[0.025] px-4 text-sm text-white transition-colors hover:border-accent/40 hover:text-accent md:hidden"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute left-5 right-5 top-[76px] overflow-hidden rounded-2xl border border-white/10 bg-[#111512]/95 p-3 shadow-2xl backdrop-blur-xl sm:left-8 sm:right-8 md:hidden">
          <div className="grid gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-1 rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-ink"
            >
              Let&apos;s connect
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}