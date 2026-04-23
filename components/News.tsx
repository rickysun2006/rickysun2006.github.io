"use client";

import { useState } from "react";
import { Section } from "./Section";
import { news } from "@/data/news";

function renderInline(content: string) {
  const parts = content.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <span key={i} className="font-semibold text-[rgb(var(--fg))]">
        {part.slice(2, -2)}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

const INITIAL = 5;

export function News() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? news : news.slice(0, INITIAL);
  const hasMore = news.length > INITIAL;

  return (
    <Section
      id="news"
      label="News"
      title="What's new"
      subtitle="Recent updates, travel, and things I'm up to."
    >
      <div className="card p-2 sm:p-3">
        <ol>
          {visible.map((item, idx) => (
            <li
              key={`${item.date}-${item.content.slice(0, 20)}`}
              className={`group grid grid-cols-[5.5rem_1fr] sm:grid-cols-[7rem_1fr] gap-4 sm:gap-6 items-start p-4 sm:p-5 rounded-xl transition-colors hover:bg-soft ${
                idx < visible.length - 1
                  ? "border-b border-subtle"
                  : ""
              }`}
            >
              <span className="text-xs font-mono font-medium text-brand pt-[3px] whitespace-nowrap">
                {item.dateLabel}
              </span>
              <span className="text-[15px] text-soft leading-[1.7]">
                {renderInline(item.content)}
              </span>
            </li>
          ))}
        </ol>
      </div>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="mt-5 text-xs font-medium text-muted hover:text-brand transition-colors"
        >
          {expanded ? "Show less ↑" : `Show all (${news.length}) →`}
        </button>
      )}
    </Section>
  );
}
