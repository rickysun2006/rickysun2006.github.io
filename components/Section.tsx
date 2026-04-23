import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  action?: ReactNode;
};

export function Section({ id, label, title, subtitle, children, action }: Props) {
  return (
    <section id={id} className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-wide px-6 sm:px-8">
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="section-label mb-3">{label}</div>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-soft max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          {action && <div className="shrink-0 text-xs text-muted">{action}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}
