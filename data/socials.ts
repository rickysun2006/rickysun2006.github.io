export type SocialLink = {
  label: string;
  href: string;
  handle?: string;
  icon: "email" | "github" | "linkedin" | "scholar" | "rednote" | "cv";
};

export const socials: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:sunrq2024@mail.sustech.edu.cn",
    handle: "sunrq2024@mail.sustech.edu.cn",
    icon: "email",
  },
  {
    label: "GitHub",
    href: "https://github.com/rickysun2006",
    handle: "rickysun2006",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ruqi-%EF%BC%88ricky%EF%BC%89-sun-13161a307/",
    handle: "Ruqi (Ricky) Sun",
    icon: "linkedin",
  },
  {
    label: "RedNote",
    href: "https://www.xiaohongshu.com/user/profile/",
    handle: "rickysun21",
    icon: "rednote",
  },
];
