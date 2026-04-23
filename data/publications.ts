export type PublicationCategory =
  | "conference"
  | "journal"
  | "workshop"
  | "preprint";

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  venueShort?: string;
  year: number;
  category: PublicationCategory;
  links?: {
    pdf?: string;
    arxiv?: string;
    code?: string;
    project?: string;
    doi?: string;
  };
  bibtex?: string;
  award?: string;
  abstract?: string;
};

// Publications will be listed here once available.
// Example template (kept commented-out for future reference):
//
// {
//   id: "example-2026",
//   title: "An Example Paper Title That Describes the Contribution",
//   authors: ["Ruqi Sun", "Co-Author Name", "Senior Author"],
//   venue: "Proceedings of the ACM Conference on Human Factors in Computing Systems",
//   venueShort: "CHI",
//   year: 2026,
//   category: "conference",
//   links: {
//     arxiv: "https://arxiv.org/abs/xxxx.xxxxx",
//     code: "https://github.com/rickysun2006/example",
//   },
//   bibtex: `@inproceedings{sun2026example,
//   title={An Example Paper Title That Describes the Contribution},
//   author={Sun, Ruqi and Co-Author, Name and Senior, Author},
//   booktitle={Proceedings of CHI},
//   year={2026}
// }`,
// },

export const publications: Publication[] = [];
