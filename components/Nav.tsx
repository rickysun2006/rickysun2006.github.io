"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { siteConfig } from "@/data/site";

const sections = [
  { id: "about", label: "About" },
  { id: "news", label: "News" },
  { id: "publications", label: "Publications" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : ""
      }`}
    >
      <div className="mx-auto max-w-wide px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-2 text-sm font-bold tracking-tight transition-opacity hover:opacity-80"
          >
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-[0_4px_12px_rgb(var(--brand)/0.35)]">
              <span className="text-[11px] font-black">R</span>
            </span>
            <span>{siteConfig.shortName}</span>
          </a>

          <nav className="hidden md:flex items-center">
            <div
              className="flex items-center gap-1 rounded-full border px-1.5 py-1"
              style={{
                borderColor: "rgb(var(--border))",
                backgroundColor: "rgb(var(--surface) / 0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`relative px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-colors ${
                    active === id
                      ? "text-white"
                      : "text-soft hover:text-[rgb(var(--fg))]"
                  }`}
                >
                  {active === id && (
                    <span
                      className="absolute inset-0 rounded-full -z-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgb(var(--grad-a)), rgb(var(--grad-b)))",
                        boxShadow:
                          "0 4px 14px rgb(var(--brand) / 0.35), inset 0 1px 0 rgb(255 255 255 / 0.2)",
                      }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.cvPath}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-full border border-subtle bg-surface hover:border-[rgb(var(--brand))] hover:text-brand transition-all"
            >
              CV
              <span className="text-[10px]">↗</span>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
