import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

/** One entry per Figma text style. */
const variants = {
  "display-64": "text-display-64",
  "h1-56": "text-h1-56",
  "stat-44": "text-stat-44",
  "h2-40": "text-h2-40",
  "h2-36": "text-h2-36",
  "h2-32": "text-h2-32",
  "h3-28": "text-h3-28",
  "quote-28": "text-quote-28",
  "h4-24": "text-h4-24",
  "title-22": "text-title-22",
  "title-20": "text-title-20",
  "title-16": "text-title-16",
  "body-24": "text-body-24",
  "body-20": "text-body-20",
  "body-18": "text-body-18",
  "body-17": "text-body-17",
  "body-16": "text-body-16",
  "body-15": "text-body-15",
  "body-14": "text-body-14",
  "body-13": "text-body-13",
  "label-16": "text-label-16",
  "label-15": "text-label-15",
  "label-14": "text-label-14",
  "label-13": "text-label-13",
  "overline-13": "text-overline-13 uppercase",
  "wordmark-15": "text-wordmark-15 uppercase",
} as const;

const tones = {
  primary: "text-primary",
  body: "text-body",
  secondary: "text-secondary",
  muted: "text-muted",
  accent: "text-accent",
  "accent-strong": "text-accent-strong",
  dev: "text-dev",
  inverse: "text-inverse",
  "inverse-soft": "text-inverse-soft",
  "inverse-muted": "text-inverse-muted",
  "inverse-subtle": "text-inverse-subtle",
  inherit: "",
} as const;

export type TextVariant = keyof typeof variants;
export type TextTone = keyof typeof tones;
export const textVariants = Object.keys(variants) as TextVariant[];

export type TextProps<T extends ElementType = "p"> = {
  as?: T;
  variant?: TextVariant;
  tone?: TextTone;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/** Renders any element in a Figma text style. Defaults to <p> in Body/17, primary. */
export function Text<T extends ElementType = "p">({ as, variant = "body-17", tone = "primary", className, ...props }: TextProps<T>) {
  const Tag: ElementType = as ?? "p";
  return <Tag className={cn(variants[variant], tones[tone], className)} {...props} />;
}
