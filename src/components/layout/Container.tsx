import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type ContainerProps = HTMLAttributes<HTMLElement> & { as?: ElementType };

/** Page-width wrapper with the 96px gutter (24px on small screens). */
export function Container({ as: Tag = "div", className, ...props }: ContainerProps) {
  return <Tag className={cn("mx-auto w-full max-w-page px-xl lg:px-gutter", className)} {...props} />;
}
