import Image from "next/image";
import { cn } from "@/lib/cn";
import { Text } from "./Text";

export type PolaroidProps = {
  caption: string;
  /** Omit for the empty "Add a photo" slot. */
  src?: string;
  alt?: string;
  selected?: boolean;
  /** Tilt in degrees, for the travel wall. */
  rotate?: number;
  /** Rendered width in px; geometry scales with it (Figma master is 300). */
  width?: number;
  className?: string;
};

/** Photo card with caption. Insets are in cqw so any width keeps the Figma proportions (18/300, 40/300). */
export function Polaroid({ caption, src, alt = "", selected, rotate, width = 300, className }: PolaroidProps) {
  return (
    <figure
      style={{ width, rotate: rotate ? `${rotate}deg` : undefined }}
      className={cn(
        "@container rounded-sm bg-page shadow-card",
        selected && "outline-3 -outline-offset-3 outline-(--border-color-accent-strong)",
        className,
      )}
    >
      <div className="relative m-[6cqw] mb-0 grid aspect-square place-items-center overflow-hidden bg-surface-strong">
        {src ? (
          <Image src={src} alt={alt} fill sizes={`${width}px`} className="object-cover" />
        ) : (
          <Text as="span" variant="label-15" tone="muted">
            Add a photo
          </Text>
        )}
      </div>
      <Text as="figcaption" variant="label-16" tone={src ? "primary" : "muted"} className="px-[6cqw] pt-[6cqw] pb-[13.33cqw]">
        {caption}
      </Text>
    </figure>
  );
}
