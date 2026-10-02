"use client";

import { useEffect, useState } from "react";
import { navLinks } from "../lib/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-canvas/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a
          href="#"
          className="group flex items-center gap-2 font-display text-lg font-semibold tracking-[-0.03em] text-white"
          aria-label="Dilip Asdeo home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-accent/[0.12] text-xs font-bold text-accent transition group-hover:bg-accent/[0.18]">
            DA
          </span>
          Dilip Asdeo
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-subtle transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition duration-200 hover:border-accent/35 hover:text-accent"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 items-center rounded-full border border-white/10 bg-white/[0.04] px-4 text-sm text-white md:hidden"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/[0.06] bg-canvas/95 px-5 py-4 backdrop-blur-xl md:hidden sm:px-8">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-subtle transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-ink"
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
