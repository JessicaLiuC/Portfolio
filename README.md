# Portfolio

A personal portfolio website showcasing my projects, skills, and experience. Built with **Next.js** and **TailwindCSS**, this site serves as a central hub for potential employers, collaborators, and anyone interested in my work.

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
npm run dev
```

Browse the design system in Storybook:

```bash
npm run storybook
```

Images and icons are exported from the Figma file (see `scripts/figma-assets.json`):

```bash
FIGMA_TOKEN=<personal access token> npm run figma:assets
```

## Project structure

```
src/
  styles/tokens.css          design tokens (Figma "Foundations") as a Tailwind v4 theme
  components/ui/             design-system components + stories
  components/layout/         Container, Nav, Footer
  components/sections/       page sections built from ui/
  components/case-study/     case-study template and content blocks
  content/                   all copy and data (pages, case studies)
  app/                       thin route files
```

To add a case study, write a `CaseStudy` object in `src/content/case-studies/` and register it in `index.ts`; the `/work/[slug]` route renders it.

## Live Demo
👉 [View Portfolio Here](https://chienchiliu.com)



## Features
- **Responsive Design** – Optimized for mobile, tablet, and desktop.
- **Modern UI** – Clean, minimal design with TailwindCSS.
- **Project Showcase** – Highlights selected projects with descriptions and links.
- **Design system** – Tokens and components mirrored from Figma, browsable in Storybook.



## Tech Stack
- **Frontend:** Next.js, React, TailwindCSS v4, Storybook
- **Deployment:** Vercel
- **Other Tools:** GitHub, Figma (for design)
