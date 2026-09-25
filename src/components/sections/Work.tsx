import { Container } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { work } from "@/content/home";
import { ProjectCard } from "./ProjectCard";

export function Work() {
  return (
    <Container as="section" id="work" className="flex scroll-mt-xl flex-col gap-4xl pt-xl pb-section">
      <SectionHeading title={work.title} />
      <div className="flex flex-col gap-3xl">
        {work.rows.map((row, i) => (
          <div
            key={i}
            className="grid gap-3xl md:grid-cols-(--cols)"
            style={{ "--cols": row.map((p) => `${p.width}fr`).join(" ") } as React.CSSProperties}
          >
            {row.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
}
