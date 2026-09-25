import type { IconName } from "@/components/ui/Icon";

/** An image exported from Figma; width/height are its size in the 1512px frame. */
export type Media = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  rounded?: boolean;
  /** H4 title shown above the image in a media row. */
  title?: string;
};

export type Item = { title: string; description?: string; number?: string; icon?: IconName };

export type Block =
  /** Body/20 paragraphs, max 800px; "\n" breaks a line without a paragraph gap. */
  | { kind: "text"; text: string | string[] }
  /** Quote/28 pull quote, max 1000px. */
  | { kind: "quote"; text: string }
  /** Video player; without a src it renders the Figma placeholder slot. */
  | { kind: "video"; label: string; src?: string }
  /** Row of tint Chips. */
  | { kind: "tags"; items: string[] }
  /** Stacked List items with hairlines. */
  | { kind: "list"; items: Item[] }
  /** List items without dividers, in equal columns. */
  | { kind: "grid"; items: Item[]; columns?: 1 | 2 | 3 }
  | { kind: "stats"; items: { value: string; label: string }[] }
  | { kind: "steps"; items: { number: string; title: string; description?: string }[] }
  /** One or more images in a row. */
  | { kind: "media"; items: Media[] }
  /** H4 subsection with its own blocks. */
  | { kind: "sub"; title: string; blocks: Block[] }
  /** Image(s) beside a column of blocks. Gap defaults to the 96px gutter. */
  | { kind: "split"; media: Media | Media[]; blocks: Block[]; reverse?: boolean; gap?: "5xl" | "6xl" | "gutter" };

export type Section = {
  title: string;
  /** Heading sits in a 320px column left of the content instead of above it. */
  aside?: boolean;
  blocks: Block[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  subline: string;
  /** Without an intro, the hero runs full width under the meta row. */
  intro?: string;
  meta: { label: string; value: string }[];
  hero: Media;
  sections: Section[];
};
