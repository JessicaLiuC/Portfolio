export type ProjectTone = "surface-strong" | "sage" | "grey-sage" | "accent-soft";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  /** Tile artwork exported from Figma ("Tile" frame of each project). */
  image: string;
  tone: ProjectTone;
  /** Tile width in the 1320px Figma grid; sets the column ratio within its row. */
  width: number;
};

export const hero = {
  subtext:
    "Product Engineer who focuses on Tech and UX research. Dedicated in delivering smooth and clean user experience AI co-researcher platform.",
  cta: { label: "View work", href: "#work" },
};

export const work = {
  title: "Projects I’ve worked on recently",
  rows: [
    [
      { slug: "furniture-ecommerce", title: "Furniture E-commerce Mobile App", summary: "Self project, UI/UX design and development", image: "/work/furniture-ecommerce.png", tone: "surface-strong", width: 640 },
      { slug: "mark-and-snip", title: "Mark & Snip", summary: "UX case study, video editing platform for employee training", image: "/work/mark-and-snip.png", tone: "grey-sage", width: 640 },
    ],
    [
      { slug: "coin-toss", title: "Coin Toss", summary: "AI-powered travel inspiration app, design hackathon", image: "/work/coin-toss.png", tone: "sage", width: 420 },
      { slug: "info-student-social-life", title: "INFO Student Social Life", summary: "User research client project at the University of Maryland", image: "/work/info-student-social-life.png", tone: "accent-soft", width: 860 },
    ],
  ] satisfies Project[][],
};

export const contact = {
  title: "Let’s connect",
  subline: "I’m always up for a chat about design, code, or coffee :)",
  cta: "Send an email",
};
