import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";
import { Text } from "./Text";

export type ListItemProps = {
  title: string;
  description?: string;
  /** Leading accent number, e.g. "01". */
  number?: string;
  /** Leading icon; ignored when `number` is set. */
  icon?: IconName;
  /** Hairline + vertical padding for stacked lists; turn off for grids. */
  divider?: boolean;
  className?: string;
};

export function ListItem({ title, description, number, icon, divider = true, className }: ListItemProps) {
  return (
    <div className={cn("flex items-start gap-lg", divider && "border-t border-hairline py-xl", className)}>
      {number ? (
        <Text as="span" variant="title-16" tone="accent" className="tabular-nums">
          {number}
        </Text>
      ) : (
        icon && <Icon name={icon} />
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-2xs">
        <Text as="h3" variant="title-20">
          {title}
        </Text>
        {description && (
          <Text variant="body-17" tone="secondary" className="whitespace-pre-line">
            {description}
          </Text>
        )}
      </div>
    </div>
  );
}
