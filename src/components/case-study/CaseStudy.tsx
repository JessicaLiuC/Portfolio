import { Container } from "@/components/layout";
import { MetaItem, SectionHeading, Text } from "@/components/ui";
import type { CaseStudy as CaseStudyData, Section } from "@/content/case-studies/types";
import { cn } from "@/lib/cn";
import { Blocks, Figure, FixedFigure } from "./Blocks";

function Header({ title, subline, intro, meta, hero }: CaseStudyData) {
  const metaRow = (
    <div className="grid grid-cols-2 gap-3xl sm:grid-flow-col sm:grid-cols-none sm:auto-cols-fr">
      {meta.map((m) => (
        <MetaItem key={m.label} {...m} />
      ))}
    </div>
  );
  return (
    <header className="flex flex-col gap-4xl pt-[88px] pb-[112px]">
      <SectionHeading size="display" title={title} subline={subline} />
      {intro ? (
        <div className="flex flex-col items-center gap-3xl lg:flex-row lg:gap-6xl">
          <div className="flex flex-1 flex-col gap-3xl">
            <Text variant="body-20" tone="body">
              {intro}
            </Text>
            {metaRow}
          </div>
          <FixedFigure {...hero} rounded={hero.rounded ?? false} />
        </div>
      ) : (
        <>
          {metaRow}
          <Figure {...hero} />
        </>
      )}
    </header>
  );
}

function CaseSection({ title, aside, blocks }: Section) {
  // Sections made of H4 subsections breathe more (56px), as in Figma.
  const gap = blocks.some((b) => b.kind === "sub") ? "gap-[56px]" : "gap-3xl";
  return (
    <section className={cn("flex flex-col pb-section", gap, aside && "lg:flex-row lg:gap-6xl")}>
      <SectionHeading title={title} className={cn(aside && "lg:w-80 lg:shrink-0")} />
      <div className={cn("flex min-w-0 flex-1 flex-col", gap)}>
        <Blocks blocks={blocks} />
      </div>
    </section>
  );
}

export function CaseStudy(data: CaseStudyData) {
  return (
    <Container as="article">
      <Header {...data} />
      {data.sections.map((s) => (
        <CaseSection key={s.title} {...s} />
      ))}
    </Container>
  );
}
