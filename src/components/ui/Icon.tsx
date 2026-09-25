import { cn } from "@/lib/cn";

/** Icon name → file in /public/icons (exported from Figma "Design system / Icons"). */
const files = {
  "simplified-navigation": "simplified-navigation.svg",
  "search-bar": "search-bar.svg",
  "clear-cta-buttons": "clear-cta-buttons.svg",
  personalization: "personalization.svg",
  "clear-product-categories": "clear-product-categories.svg",
  "visual-hierarchy": "visual-hierarchy.svg",
  authentication: "authentication.png",
  stabilization: "stabilization.png",
  consistency: "consistency.png",
  performance: "performance.png",
  guidance: "guidance.png",
  instructions: "instructions.png",
  effects: "effects.png",
  motivation: "motivation.png",
  "content-creators": "content-creators.svg",
  employers: "employers.svg",
  employees: "employees.svg",
  "time-consuming": "time-consuming.svg",
  "mobile-editing": "mobile-editing.svg",
  "ai-limitations": "ai-limitations.svg",
  indecisiveness: "indecisiveness.svg",
  "information-overload": "information-overload.svg",
  "lack-of-personalization": "lack-of-personalization.svg",
  "travel-style": "travel-style.svg",
  "two-itineraries": "two-itineraries.svg",
  "flip-coin": "flip-coin.svg",
  "audio-guide": "audio-guide.svg",
  "city-safety": "city-safety.svg",
  "social-norms": "social-norms.svg",
} as const;

export type IconName = keyof typeof files;
export const iconNames = Object.keys(files) as IconName[];

export type IconProps = { name: IconName; size?: number; className?: string };

/** Decorative 28px accent icon. */
export function Icon({ name, size = 28, className }: IconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- tiny static icons, no optimisation needed
    <img src={`/icons/${files[name]}`} width={size} height={size} alt="" aria-hidden className={cn("shrink-0", className)} />
  );
}
