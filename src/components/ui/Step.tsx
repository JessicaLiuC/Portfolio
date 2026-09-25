import { cn } from "@/lib/cn";
import { Text } from "./Text";

export type StepProps = { number: string; title: string; description?: string; className?: string };

/** Process step: accent number, title, optional description. */
export function Step({ number, title, description, className }: StepProps) {
  return (
    <div className={cn("flex flex-col gap-xs border-t border-hairline pt-lg", className)}>
      <Text variant="label-15" tone="accent">
        {number}
      </Text>
      <Text as="h3" variant="title-20">
        {title}
      </Text>
      {description && (
        <Text variant="body-16" tone="secondary">
          {description}
        </Text>
      )}
    </div>
  );
}
