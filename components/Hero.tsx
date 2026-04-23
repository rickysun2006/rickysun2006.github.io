import Image from "next/image";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "./SocialLinks";
import { MeshBackground } from "./MeshBackground";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 sm:pt-28 pb-20 sm:pb-28"
    >
      <MeshBackground />

      <div className="relative mx-auto max-w-wide px-6 sm:px-8">
        <div className="grid gap-10 sm:gap-14 lg:gap-20 lg:grid-cols-[1fr_auto] items-center">
          <div className="min-w-0 animate-fade-up">
            <div className="section-label mb-5">
              <span>{siteConfig.role}</span>
            </div>

            <h1 className="font-display font-bold tracking-tight leading-[1.02] text-[2.75rem] sm:text-6xl lg:text-7xl">
              <span className="block text-[rgb(var(--fg))]">Hi, I&rsquo;m</span>
              <span className="block gradient-text">Ruqi Sun.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted font-medium">
              <span className="font-mono text-brand">Ricky</span>
              <span className="mx-2 text-[rgb(var(--border-strong))]">·</span>
              <span>{siteConfig.pronouns}</span>
            </p>

            <p className="mt-7 max-w-xl text-soft leading-[1.7] text-[15px] sm:text-base">
              Undergrad at{" "}
              <a
                href="https://www.sustech.edu.cn/"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                SUSTech
              </a>{" "}
              · Researcher in the{" "}
              <span className="font-semibold text-[rgb(var(--fg))]">
                {siteConfig.lab}
              </span>{" "}
              with{" "}
              <a
                href={siteConfig.advisor.url}
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                {siteConfig.advisor.name}
              </a>
              . I build tools that help people think, create, and see in new
              ways.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {siteConfig.researchInterests.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">
                Get in touch
                <span aria-hidden>→</span>
              </a>
              <a
                href={siteConfig.cvPath}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                View CV
                <span aria-hidden className="text-[11px]">
                  ↗
                </span>
              </a>
            </div>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          <div className="relative mx-auto lg:mx-0 animate-fade-up [animation-delay:120ms]">
            <div className="portrait-wrap">
              <div className="relative aspect-[2/3] w-[18rem] sm:w-[22rem] lg:w-[24rem] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/portrait.jpg"
                  alt={siteConfig.name}
                  fill
                  sizes="(max-width: 640px) 18rem, (max-width: 1024px) 22rem, 24rem"
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
              </div>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] opacity-70 blur-3xl"
              style={{
                background:
                  "conic-gradient(from 200deg, rgb(var(--grad-a) / 0.55), rgb(var(--grad-b) / 0.55), rgb(var(--grad-c) / 0.55), rgb(var(--grad-a) / 0.55))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
