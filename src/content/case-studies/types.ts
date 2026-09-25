import type { IconName } from "@/components/ui/Icon";

/** An image exported from Figma; width/height are its size in the 1512px frame. */
export type Media = { src: string; width: number; height: number; alt?: string; rounded?: boolean };

export type Item = { title: string; description?: string; number?: string; icon?: IconName };

export type Block =
  /** Body/20 paragraph, max 800px. */
  | { kind: "text"; text: string }
  /** Stacked List items with hairlines. */
  | { kind: "list"; items: Item[] }
  /** List items without dividers, in equal columns. */
  | { kind: "grid"; items: Item[]; columns?: 2 | 3 }
  | { kind: "stats"; items: { value: string; label: string }[] }
  | { kind: "steps"; items: { number: string; title: string; description?: string }[] }
  /** One or more images in a row. */
  | { kind: "media"; items: Media[] }
  /** Image beside a column of blocks. */
  | { kind: "split"; media: Media; blocks: Block[]; reverse?: boolean };

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
  intro: string;
  meta: { label: string; value: string }[];
  hero: Media;
  sections: Section[];
};
