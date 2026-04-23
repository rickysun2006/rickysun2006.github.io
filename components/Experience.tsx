import Image from "next/image";
import { Section } from "./Section";
import { experience } from "@/data/experience";

const KIND_LABELS: Record<(typeof experience)[number]["kind"], string> = {
  education: "Education",
  research: "Research",
  visit: "Visit",
};

export function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I've been">
      <ol className="relative space-y-4 sm:space-y-5">
        {experience.map((item, idx) => (
          <li
            key={`${item.period}-${item.institution}-${idx}`}
            className="relative grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7.5rem_1fr] gap-4 sm:gap-6 items-start"
          >
            <div className="pt-5 text-right">
              <div className="text-xs font-mono text-muted whitespace-nowrap">
                {item.period.split("–")[0].trim()}
              </div>
              <div className="text-[10px] font-mono text-muted whitespace-nowrap">
                {item.period.includes("–") && (
                  <>–&nbsp;{item.period.split("–")[1]?.trim()}</>
                )}
              </div>
            </div>

            <div className="card p-5 sm:p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgb(var(--shadow-color)/0.15)]">
              <div className="flex items-start gap-4">
                {item.logo && (
                  <div className="shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-white dark:bg-white/95 border border-subtle p-1.5 shadow-sm">
                    <Image
                      src={item.logo}
                      alt={`${item.institution} logo`}
                      width={40}
                      height={40}
                      className="object-contain h-full w-full"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <KindBadge kind={item.kind}>
                      {KIND_LABELS[item.kind]}
                    </KindBadge>
                  </div>
                  <h3 className="text-[16px] sm:text-[17px] font-semibold text-[rgb(var(--fg))] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-soft">
                    {item.institutionUrl ? (
                      <a
                        href={item.institutionUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline"
                      >
                        {item.institution}
                      </a>
                    ) : (
                      <span className="font-medium text-[rgb(var(--fg))]">
                        {item.institution}
                      </span>
                    )}
                    {item.location && (
                      <span className="text-muted"> · {item.location}</span>
                    )}
                  </p>
                  {item.advisor && (
                    <p className="mt-1 text-sm text-muted">
                      Advisor:{" "}
                      {item.advisorUrl ? (
                        <a
                          href={item.advisorUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="link-underline"
                        >
                          {item.advisor}
                        </a>
                      ) : (
                        item.advisor
                      )}
                    </p>
                  )}
                  {item.description && (
                    <p className="mt-3 text-sm text-soft leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function KindBadge({
  kind,
  children,
}: {
  kind: "education" | "research" | "visit";
  children: React.ReactNode;
}) {
  const styles: Record<typeof kind, string> = {
    education: "bg-[rgb(var(--brand-soft))] text-brand",
    research: "bg-[rgb(var(--brand-soft))] text-brand",
    visit: "bg-[rgb(var(--brand-soft))] text-brand",
  };
  const icon: Record<typeof kind, string> = {
    education: "🎓",
    research: "🔬",
    visit: "✈️",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${styles[kind]}`}
    >
      <span className="text-[11px]">{icon[kind]}</span>
      {children}
    </span>
  );
}
