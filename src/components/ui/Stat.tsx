import { cn } from "@/lib/cn";
import { Text } from "./Text";

export type StatProps = { value: string; label: string; className?: string };

/** Research statistic: big accent number over a plain-language label. */
export function Stat({ value, label, className }: StatProps) {
  return (
    <div className={cn("flex flex-col gap-xs border-t border-hairline pt-xl", className)}>
      <Text variant="stat-44" tone="accent">
        {value}
      </Text>
      <Text variant="body-17" tone="secondary">
        {label}
      </Text>
    </div>
  );
}
