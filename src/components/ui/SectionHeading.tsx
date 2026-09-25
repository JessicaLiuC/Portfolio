import type { ElementType } from "react";
import { cn } from "@/lib/cn";
import { Text, type TextVariant } from "./Text";

const sizes = {
  display: { title: "display-64", subline: "body-24", as: "h1" },
  h1: { title: "h1-56", subline: "body-20", as: "h1" },
  h2: { title: "h2-40", subline: "body-20", as: "h2" },
} as const satisfies Record<string, { title: TextVariant; subline: TextVariant; as: ElementType }>;

export type SectionHeadingProps = {
  title: string;
  subline?: string;
  /** Display for case-study titles, H1 for page titles, H2 for sections. */
  size?: keyof typeof sizes;
  as?: ElementType;
  className?: string;
};

export function SectionHeading({ title, subline, size = "h2", as, className }: SectionHeadingProps) {
  const s = sizes[size];
  return (
    <div className={cn("flex flex-col gap-sm", className)}>
      <Text as={as ?? s.as} variant={s.title}>
        {title}
      </Text>
      {subline && (
        <Text variant={s.subline} tone="secondary">
          {subline}
        </Text>
      )}
    </div>
  );
}
