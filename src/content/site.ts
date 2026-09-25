export type Link = { label: string; href: string };

export const site = {
  name: "Chien-Chi Liu",
  email: "jessicaliu4011@gmail.com",
  nav: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/#work" },
    { label: "Resume", href: "/resume" },
  ],
  social: [
    { label: "Github", href: "https://github.com/JessicaLiuC" },
    { label: "Email", href: "mailto:jessicaliu4011@gmail.com" },
    { label: "Linkedin", href: "https://www.linkedin.com/in/chienchi/" },
  ],
} satisfies { name: string; email: string; nav: Link[]; social: Link[] };
