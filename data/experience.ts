export type ExperienceItem = {
  period: string;
  title: string;
  role: string;
  institution: string;
  institutionUrl?: string;
  logo?: string;
  location?: string;
  advisor?: string;
  advisorUrl?: string;
  description?: string;
  kind: "education" | "research" | "visit";
};

export const experience: ExperienceItem[] = [
  {
    period: "2026.07 – 2026.08",
    title: "Summer Research",
    role: "Visiting Research Student",
    institution: "University of California, Davis",
    institutionUrl: "https://cs.ucdavis.edu/",
    logo: "/images/ucdavis.png",
    location: "Davis, CA, USA",
    advisor: "Prof. Dongyu Liu",
    advisorUrl: "https://dongyuliu.github.io/",
    kind: "visit",
  },
  {
    period: "2025.06 – 2025.07",
    title: "Summer Program",
    role: "Visiting Student",
    institution: "School of Computing, National University of Singapore",
    institutionUrl: "https://www.comp.nus.edu.sg/",
    logo: "/images/nus.png",
    location: "Singapore",
    advisor: "Prof. Bimlesh Wadhwa",
    advisorUrl: "https://www.comp.nus.edu.sg/~bimlesh/",
    kind: "visit",
  },
  {
    period: "2024 – Present",
    title: "Research Assistant",
    role: "Undergraduate Researcher",
    institution: "Data Visualization and Analysis Lab (DVA Lab), SUSTech",
    logo: "/images/sustech.png",
    location: "Shenzhen, China",
    advisor: "Prof. Yuxin Ma",
    advisorUrl: "https://cse.sustech.edu.cn/faculty/~mayx/",
    kind: "research",
  },
  {
    period: "2024 – 2028 (expected)",
    title: "B.Eng. in Computer Science and Engineering",
    role: "Undergraduate Student",
    institution:
      "Southern University of Science and Technology (SUSTech)",
    institutionUrl: "https://cse.sustech.edu.cn/",
    logo: "/images/sustech.png",
    location: "Shenzhen, China",
    kind: "education",
  },
];
