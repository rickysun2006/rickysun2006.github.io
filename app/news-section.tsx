"use client";

import { useState } from "react";

const VISIBLE_COUNT = 3;

const NEWS_ITEMS = [
  {
    id: "uist-acceptance",
    date: "Jul 2026",
    content: (
      <>
        One first-author paper and one fourth-author paper received conditional acceptance to{" "}
        <a href="https://uist.acm.org/2026/" target="_blank" rel="noreferrer">
          ACM UIST 2026
        </a>{" "}
        (acceptance rate: 20.1%). Grateful to my collaborators!
      </>
    ),
  },
  {
    id: "uc-davis-intern",
    date: "Jul 2026",
    content: (
      <>
        Started my research internship at UC Davis, working with{" "}
        <a href="https://dongyu.tech/" target="_blank" rel="noreferrer">
          Prof. Dongyu Liu
        </a>
        . Hoping to do some cool work this summer!
      </>
    ),
  },
  {
    id: "chi-2026",
    date: "Apr 2026",
    content: (
      <>
        I&rsquo;ll be attending{" "}
        <a href="https://chi2026.acm.org/" target="_blank" rel="noreferrer">
          ACM CHI 2026
        </a>{" "}
        in Barcelona. Come find me and say hi!
      </>
    ),
  },
  {
    id: "uist-submit",
    date: "Mar 2026",
    content: (
      <>
        4 papers submitted to{" "}
        <a href="https://uist.acm.org/2026/" target="_blank" rel="noreferrer">
          ACM UIST 2026
        </a>
        . Good luck to us 🤞
      </>
    ),
  },
];

export function NewsSection() {
  const [expanded, setExpanded] = useState(false);
  const hasMore = NEWS_ITEMS.length > VISIBLE_COUNT;
  const visibleItems = expanded ? NEWS_ITEMS : NEWS_ITEMS.slice(0, VISIBLE_COUNT);

  return (
    <section id="news">
      <h2>News</h2>
      <ul className="news-list">
        {visibleItems.map((item) => (
          <li key={item.id} className="news-item">
            <span className="news-date">{item.date}</span>
            <div className="news-content">{item.content}</div>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          className="news-expand"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Expand"}
        </button>
      )}
    </section>
  );
}
