import Image from "next/image";
import { Chip, ListItem, Stat, Step, Text } from "@/components/ui";
import type { Block, Media } from "@/content/case-studies/types";
import { cn } from "@/lib/cn";

const cols = { 1: "gap-xl", 2: "gap-3xl md:grid-cols-2", 3: "gap-3xl md:grid-cols-3" } as const;
const splitGaps = { "5xl": "lg:gap-5xl", "6xl": "lg:gap-6xl", gutter: "lg:gap-gutter" } as const;

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
        <div className="flex max-w-200 flex-col gap-2xl">
          {[b.text].flat().map((t) => (
            <Text key={t} variant="body-20" tone="body" className="whitespace-pre-line">
              {t}
            </Text>
          ))}
        </div>
      );
    case "quote":
      return (
        <Text as="blockquote" variant="quote-28" tone="body" className="max-w-250">
          {b.text}
        </Text>
      );
    case "video":
      return b.src ? (
        <video src={b.src} controls className="aspect-[1320/742] w-full rounded-lg bg-surface-strong" aria-label={b.label} />
      ) : (
        <div className="grid aspect-[1320/742] w-full place-items-center rounded-lg bg-surface-strong">
          <Text as="span" variant="body-20" tone="muted" className="leading-[1.3] font-medium">
            {b.label}
          </Text>
        </div>
      );
    case "tags":
      return (
        <div className="flex flex-wrap gap-sm">
          {b.items.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
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
        <div className={cn("grid", cols[b.columns ?? 2])}>
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
            <div key={m.src} className="flex w-full max-w-(--w) min-w-0 flex-col gap-3xl lg:basis-0" style={{ "--w": `${m.width}px`, flexGrow: m.width } as React.CSSProperties}>
              {m.title && (
                <Text as="h3" variant="h4-24">
                  {m.title}
                </Text>
              )}
              <Figure {...m} />
            </div>
          ))}
        </div>
      );
    case "sub":
      return (
        <div className="flex flex-col gap-xl">
          <Text as="h3" variant="h4-24">
            {b.title}
          </Text>
          <Blocks blocks={b.blocks} />
        </div>
      );
    case "split": {
      const media = [b.media].flat();
      return (
        <div className={cn("flex flex-col items-center gap-3xl", splitGaps[b.gap ?? "gutter"], b.reverse ? "lg:flex-row-reverse" : "lg:flex-row")}>
          {media.length === 1 ? (
            <FixedFigure {...media[0]} />
          ) : (
            <div className="flex flex-1 flex-col gap-2xl">
              {media.map((m) => (
                <Figure key={m.src} {...m} />
              ))}
            </div>
          )}
          <div className="flex w-full flex-1 flex-col gap-3xl">
            <Blocks blocks={b.blocks} />
          </div>
        </div>
      );
    }
  }
}
