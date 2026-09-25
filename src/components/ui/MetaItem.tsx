import { cn } from "@/lib/cn";
import { Text } from "./Text";

export type MetaItemProps = { label: string; value: string; className?: string };

/** Label over value, used in the meta row of case-study headers. */
export function MetaItem({ label, value, className }: MetaItemProps) {
  return (
    <div className={cn("flex flex-col gap-xs", className)}>
      <Text variant="overline-13" tone="muted">
        {label}
      </Text>
      <Text variant="body-17">{value}</Text>
    </div>
  );
}
