import Image from "next/image";
import { cn } from "@/lib/cn";

export type PolaroidProps = {
  caption: string;
  /** Omit for the empty "Add a photo" slot. */
  src?: string;
  alt?: string;
  selected?: boolean;
  /** Tilt in degrees, for the travel wall. */
  rotate?: number;
  /** Set the width here (default 300px, the Figma master). */
  className?: string;
};

/**
 * Photo card with caption. Everything inside is sized in cqw of the card, so any
 * width is an exact rescale of the 300×360 Figma master (18px inset, Label/16 caption).
 */
export function Polaroid({ caption, src, alt = "", selected, rotate, className }: PolaroidProps) {
  return (
    <figure
      style={rotate ? { rotate: `${rotate}deg` } : undefined}
      className={cn(
        // Own-box props can't use cqw (it resolves against an ancestor); % radius = 8px on 300×360.
        "@container w-75 shrink-0 rounded-[2.667%/2.222%] bg-page font-medium leading-[1.25] shadow-card",
        selected && "outline-3 -outline-offset-3 outline-(--border-color-accent-strong)",
        className,
      )}
    >
      <div className="relative m-[6cqw] mb-0 grid aspect-square place-items-center overflow-hidden bg-surface-strong">
        {src ? (
          <Image src={src} alt={alt} fill sizes="300px" className="object-cover" />
        ) : (
          <span className="text-[length:5cqw] text-muted">Add a photo</span>
        )}
      </div>
      <figcaption className={cn("px-[6cqw] pt-[6cqw] pb-[13.33cqw] text-[length:5.333cqw]", src ? "text-primary" : "text-muted")}>
        {caption}
      </figcaption>
    </figure>
  );
}
