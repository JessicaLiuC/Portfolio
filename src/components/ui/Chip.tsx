import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const styles = {
  tint: { default: "bg-surface-strong text-body", selected: "bg-inverse text-inverse" },
  inverse: { default: "border border-inverse text-inverse-soft", selected: "bg-page text-primary" },
} as const;

export type ChipProps = {
  children: ReactNode;
  /** `tint` for light surfaces, `inverse` for dark cards. */
  tone?: keyof typeof styles;
  selected?: boolean;
  /** Makes the chip a toggle button. */
  onClick?: () => void;
  className?: string;
};

export function Chip({ children, tone = "tint", selected = false, onClick, className }: ChipProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-md py-xs text-label-15 whitespace-nowrap transition-colors",
    styles[tone][selected ? "selected" : "default"],
    className,
  );

  return onClick ? (
    <button type="button" aria-pressed={selected} onClick={onClick} className={classes}>
      {children}
    </button>
  ) : (
    <span className={classes}>{children}</span>
  );
}
