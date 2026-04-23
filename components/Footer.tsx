import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-subtle mt-8">
      <div className="mx-auto max-w-wide px-6 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted">
          <p>
            &copy; {year}{" "}
            <span className="font-semibold text-[rgb(var(--fg))]">
              {siteConfig.name}
            </span>
            . Designed & built with Next.js, Tailwind, and a little help from
            two cats.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-subtle bg-surface px-3 py-1.5 font-medium hover:border-[rgb(var(--brand))] hover:text-brand transition-all"
          >
            Back to top
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
