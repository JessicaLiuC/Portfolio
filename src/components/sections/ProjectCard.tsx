import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/ui";
import type { Project, ProjectTone } from "@/content/home";
import { cn } from "@/lib/cn";

const tones: Record<ProjectTone, string> = {
  "surface-strong": "bg-surface-strong",
  sage: "bg-sage",
  "grey-sage": "bg-grey-sage-200",
  "accent-soft": "bg-accent-soft",
};

/** Project tile (fixed 520px-tall artwork in Figma) with title and summary. */
export function ProjectCard({ slug, title, summary, image, tone, width }: Project) {
  return (
    <Link href={`/work/${slug}`} className="group flex flex-col gap-lg">
      <div className={cn("relative overflow-hidden rounded-[10px]", tones[tone])} style={{ aspectRatio: `${width} / 520` }}>
        <Image src={image} alt="" fill sizes={`(min-width: 1512px) ${width}px, 100vw`} className="object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
      </div>
      <div className="flex flex-col gap-2xs">
        <Text as="h3" variant="title-22">
          {title}
        </Text>
        <Text variant="body-15" tone="secondary">
          {summary}
        </Text>
      </div>
    </Link>
  );
}
