import { socials } from "@/data/socials";
import { SocialIcon } from "./SocialIcon";

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-2">
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target={s.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-subtle bg-surface px-3 py-1.5 text-xs font-medium text-soft hover:border-[rgb(var(--brand))] hover:text-brand hover:-translate-y-0.5 transition-all"
            aria-label={s.label}
          >
            <SocialIcon
              name={s.icon}
              className="h-3.5 w-3.5 opacity-80 group-hover:opacity-100"
            />
            <span>{s.handle ?? s.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
