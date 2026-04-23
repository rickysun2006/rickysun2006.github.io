export type NewsItem = {
  date: string;
  dateLabel: string;
  content: string;
};

export const news: NewsItem[] = [
  {
    date: "2026-04",
    dateLabel: "Apr 2026",
    content:
      "I will attend **ACM CHI 2026** in person — looking forward to seeing everyone in Barcelona!",
  },
  {
    date: "2026-07",
    dateLabel: "Jul 2026",
    content:
      "Starting a **summer research visit** at UC Davis with Prof. Dongyu Liu (through Aug 2026).",
  },
  {
    date: "2025-07",
    dateLabel: "Jul 2025",
    content:
      "Wrapped up a summer program at the **School of Computing, NUS** with Prof. Bimlesh Wadhwa.",
  },
];
