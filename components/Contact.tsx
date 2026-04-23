import { Section } from "./Section";
import { SocialLinks } from "./SocialLinks";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's talk"
      subtitle="I'm always happy to hear from students, researchers, or anyone curious about my work. The fastest way to reach me is email."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <a
          href={`mailto:${siteConfig.email}`}
          className="group relative overflow-hidden card p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_48px_-16px_rgb(var(--brand)/0.35)]"
        >
          <div
            className="absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
            style={{
              background:
                "radial-gradient(circle, rgb(var(--grad-a)) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <div className="section-label mb-3">Email</div>
            <p className="font-mono text-[15px] font-medium text-[rgb(var(--fg))] break-all">
              {siteConfig.email}
            </p>
            <p className="mt-4 text-sm text-muted inline-flex items-center gap-1 group-hover:text-brand transition-colors">
              Send a message
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </p>
          </div>
        </a>

        <div className="card p-7">
          <div className="section-label mb-3">Elsewhere</div>
          <SocialLinks />
          <div className="mt-6 pt-5 border-t border-subtle">
            <div className="section-label mb-3">Office</div>
            <p className="text-sm text-soft leading-relaxed">
              {siteConfig.lab}
              <br />
              {siteConfig.affiliation}
              <br />
              <span className="text-muted">{siteConfig.location}</span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
