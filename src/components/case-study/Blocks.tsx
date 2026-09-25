import Image from "next/image";
import { ListItem, Stat, Step, Text } from "@/components/ui";
import type { Block, Media } from "@/content/case-studies/types";
import { cn } from "@/lib/cn";

const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-3" } as const;

export function Figure({ src, width, height, alt = "", rounded = true }: Media) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      sizes={`(min-width: 1512px) ${width}px, 100vw`}
      className={cn("h-auto w-full", rounded && "rounded-lg bg-surface")}
    />
  );
}

/** Keeps a figure at its Figma width beside flexible content (shrinks on small screens). */
export function FixedFigure(m: Media) {
  return (
    <div className="w-full max-w-(--w) lg:w-(--w) lg:shrink-0" style={{ "--w": `${m.width}px` } as React.CSSProperties}>
      <Figure {...m} />
    </div>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return blocks.map((b, i) => <BlockView key={i} {...b} />);
}

function BlockView(b: Block) {
  switch (b.kind) {
    case "text":
      return (
        <Text variant="body-20" tone="body" className="max-w-200">
          {b.text}
        </Text>
      );
    case "list":
      return (
        <div>
          {b.items.map((it) => (
            <ListItem key={it.title} {...it} />
          ))}
        </div>
      );
    case "grid":
      return (
        <div className={cn("grid gap-3xl", cols[b.columns ?? 2])}>
          {b.items.map((it) => (
            <ListItem key={it.title} {...it} divider={false} />
          ))}
        </div>
      );
    case "stats":
      return (
        <div className="grid gap-3xl sm:grid-cols-2 lg:grid-flow-col lg:grid-cols-none lg:auto-cols-fr">
          {b.items.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      );
    case "steps":
      return (
        <div className="grid gap-xl sm:grid-cols-2 lg:grid-flow-col lg:grid-cols-none lg:auto-cols-fr">
          {b.items.map((s) => (
            <Step key={s.number} {...s} />
          ))}
        </div>
      );
    case "media":
      return (
        <div className="flex flex-col items-start gap-3xl lg:flex-row">
          {b.items.map((m) => (
            // Grow in proportion to the Figma widths so a row keeps its layout at any width.
            <div key={m.src} className="w-full max-w-(--w) min-w-0 lg:basis-0" style={{ "--w": `${m.width}px`, flexGrow: m.width } as React.CSSProperties}>
              <Figure {...m} />
            </div>
          ))}
        </div>
      );
    case "split":
      return (
        <div className={cn("flex flex-col items-center gap-3xl lg:gap-gutter", b.reverse ? "lg:flex-row-reverse" : "lg:flex-row")}>
          <FixedFigure {...b.media} />
          <div className="flex w-full flex-1 flex-col gap-3xl">
            <Blocks blocks={b.blocks} />
          </div>
        </div>
      );
  }
}
