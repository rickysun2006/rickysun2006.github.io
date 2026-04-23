"use client";

import { useMemo, useState } from "react";
import { Section } from "./Section";
import { publications, type Publication } from "@/data/publications";
import { siteConfig } from "@/data/site";

type YearFilter = "all" | number;
type CategoryFilter = "all" | Publication["category"];

const CATEGORY_LABELS: Record<Publication["category"], string> = {
  conference: "Conference",
  journal: "Journal",
  workshop: "Workshop",
  preprint: "Preprint",
};

export function Publications() {
  const [year, setYear] = useState<YearFilter>("all");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const years = useMemo(
    () =>
      Array.from(new Set(publications.map((p) => p.year))).sort(
        (a, b) => b - a
      ),
    []
  );

  const categories = useMemo(
    () => Array.from(new Set(publications.map((p) => p.category))),
    []
  );

  const filtered = useMemo(() => {
    return publications
      .filter((p) => (year === "all" ? true : p.year === year))
      .filter((p) => (category === "all" ? true : p.category === category))
      .sort((a, b) => b.year - a.year);
  }, [year, category]);

  const hasPubs = publications.length > 0;

  return (
    <Section
      id="publications"
      label="Publications"
      title="Selected papers"
      subtitle={hasPubs ? undefined : "Nothing published yet — the list will light up here as soon as something goes out."}
      action={hasPubs ? <span>* indicates equal contribution</span> : undefined}
    >
      {!hasPubs ? (
        <EmptyState />
      ) : (
        <>
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-muted mr-1">
              Year
            </span>
            <FilterChip
              active={year === "all"}
              onClick={() => setYear("all")}
              label="All"
            />
            {years.map((y) => (
              <FilterChip
                key={y}
                active={year === y}
                onClick={() => setYear(y)}
                label={String(y)}
              />
            ))}

            {categories.length > 1 && (
              <>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-muted ml-5 mr-1">
                  Type
                </span>
                <FilterChip
                  active={category === "all"}
                  onClick={() => setCategory("all")}
                  label="All"
                />
                {categories.map((c) => (
                  <FilterChip
                    key={c}
                    active={category === c}
                    onClick={() => setCategory(c)}
                    label={CATEGORY_LABELS[c]}
                  />
                ))}
              </>
            )}
          </div>

          <ol className="space-y-4">
            {filtered.map((pub) => (
              <PublicationItem key={pub.id} pub={pub} />
            ))}
            {filtered.length === 0 && (
              <li className="text-sm text-muted">
                No publications match the current filter.
              </li>
            )}
          </ol>
        </>
      )}
    </Section>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`chip ${active ? "chip-active" : ""}`}
    >
      {label}
    </button>
  );
}

function EmptyState() {
  return (
    <div className="relative overflow-hidden card p-10 sm:p-14 text-center">
      <div
        className="absolute inset-0 opacity-50 dark:opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgb(var(--grad-a) / 0.18) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgb(var(--grad-c) / 0.15) 0%, transparent 50%)",
        }}
      />
      <div className="relative">
        <div
          className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgb(var(--grad-a)), rgb(var(--grad-b)))",
            boxShadow: "0 10px 30px rgb(var(--brand) / 0.35)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          </svg>
        </div>
        <p className="text-[15px] font-semibold text-[rgb(var(--fg))]">
          No publications yet &mdash; stay tuned.
        </p>
        <p className="mt-2 text-sm text-muted">
          Works in progress will appear here as soon as they&rsquo;re public.
        </p>
      </div>
    </div>
  );
}

function PublicationItem({ pub }: { pub: Publication }) {
  const [showBib, setShowBib] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyBib = async () => {
    if (!pub.bibtex) return;
    try {
      await navigator.clipboard.writeText(pub.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <li className="card p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_rgb(var(--shadow-color)/0.15)]">
      {pub.venueShort && (
        <span
          className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider mb-2"
          style={{
            background: "rgb(var(--brand-soft))",
            color: "rgb(var(--brand))",
          }}
        >
          {pub.venueShort} {pub.year}
        </span>
      )}
      <h3 className="text-[17px] leading-snug font-semibold text-[rgb(var(--fg))]">
        {pub.title}
      </h3>
      <p className="mt-2 text-sm text-soft leading-relaxed">
        {pub.authors.map((a, i) => {
          const isMe =
            a.replace(/\*/g, "").trim() === siteConfig.highlightName;
          return (
            <span key={i}>
              {isMe ? (
                <span className="font-semibold gradient-text">{a}</span>
              ) : (
                a
              )}
              {i < pub.authors.length - 1 ? ", " : ""}
            </span>
          );
        })}
      </p>
      <p className="mt-1 text-sm text-muted">
        {pub.venue}
        {pub.award && (
          <span className="ml-2 text-xs text-brand font-semibold">
            · {pub.award}
          </span>
        )}
      </p>

      {(pub.links || pub.bibtex) && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {pub.links?.pdf && <LinkPill href={pub.links.pdf} label="PDF" />}
          {pub.links?.arxiv && (
            <LinkPill href={pub.links.arxiv} label="arXiv" />
          )}
          {pub.links?.code && <LinkPill href={pub.links.code} label="Code" />}
          {pub.links?.project && (
            <LinkPill href={pub.links.project} label="Project" />
          )}
          {pub.links?.doi && <LinkPill href={pub.links.doi} label="DOI" />}
          {pub.bibtex && (
            <button
              type="button"
              onClick={() => setShowBib((v) => !v)}
              className="inline-flex items-center gap-1 rounded-full border border-subtle bg-surface px-3 py-1.5 text-[11px] font-semibold text-soft hover:border-[rgb(var(--brand))] hover:text-brand transition-all"
            >
              BibTeX {showBib ? "▾" : "▸"}
            </button>
          )}
        </div>
      )}

      {showBib && pub.bibtex && (
        <div className="mt-4 relative">
          <pre className="font-mono text-[11px] leading-relaxed bg-soft border border-subtle rounded-xl p-4 overflow-x-auto">
            {pub.bibtex}
          </pre>
          <button
            type="button"
            onClick={copyBib}
            className="absolute top-2 right-2 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-subtle bg-surface hover:text-brand hover:border-[rgb(var(--brand))] transition-all"
          >
            {copied ? "Copied ✓" : "Copy"}
          </button>
        </div>
      )}
    </li>
  );
}

function LinkPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-full border border-subtle bg-surface px-3 py-1.5 text-[11px] font-semibold text-soft hover:border-[rgb(var(--brand))] hover:text-brand transition-all"
    >
      {label}
      <span className="text-[9px]">↗</span>
    </a>
  );
}
