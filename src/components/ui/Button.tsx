import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-inverse text-inverse hover:bg-inverse-strong",
  secondary: "border border-strong text-body hover:bg-surface-strong",
  inverse: "bg-page text-primary hover:bg-surface",
} as const;

const sizes = {
  md: "px-xl py-md text-label-16",
  sm: "px-lg py-sm text-label-15",
} as const;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Renders a link instead of a button. */
  href?: string;
};

export function Button({ variant = "primary", size = "md", href, className, type = "button", ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full whitespace-nowrap transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--border-color-accent-strong)",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    // External links (Spotify, etc.) open in a new tab so the visitor keeps their place on the site.
    const external = /^https?:\/\//.test(href);
    return (
      <Link href={href} className={classes} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
        {props.children}
      </Link>
    );
  }
  return <button type={type} className={classes} {...props} />;
}
