import { cn } from "@/lib/cn";

/** Icons from Figma "Design system / Icons", exported as /public/icons/<name>.svg. */
export const iconNames = [
  "simplified-navigation",
  "search-bar",
  "clear-cta-buttons",
  "personalization",
  "clear-product-categories",
  "visual-hierarchy",
  "authentication",
  "stabilization",
  "consistency",
  "performance",
  "guidance",
  "instructions",
  "effects",
  "motivation",
  "content-creators",
  "employers",
  "employees",
  "time-consuming",
  "mobile-editing",
  "ai-limitations",
  "indecisiveness",
  "information-overload",
  "lack-of-personalization",
  "travel-style",
  "two-itineraries",
  "flip-coin",
  "audio-guide",
  "city-safety",
  "social-norms",
] as const;

export type IconName = (typeof iconNames)[number];

export type IconProps = { name: IconName; size?: number; className?: string };

/** Decorative 28px accent icon. */
export function Icon({ name, size = 28, className }: IconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- tiny static icons, no optimisation needed
    <img src={`/icons/${name}.svg`} width={size} height={size} alt="" aria-hidden className={cn("shrink-0", className)} />
  );
}
