import Link from "next/link";
import { site, type Link as NavLink } from "@/content/site";
import { Text } from "@/components/ui/Text";
import { Container } from "./Container";

export type NavProps = { wordmark?: string; links?: NavLink[] };

export function Nav({ wordmark = site.name, links = site.nav }: NavProps) {
  return (
    <header className="border-b border-hairline">
      <Container as="nav" aria-label="Main" className="flex h-18 items-center justify-between">
        <Text as={Link} href="/" variant="wordmark-15">
          {wordmark}
        </Text>
        <ul className="flex gap-xl sm:gap-3xl">
          {links.map((l) => (
            <li key={l.href}>
              <Text as={Link} href={l.href} variant="label-15" tone="body" className="hover:text-primary">
                {l.label}
              </Text>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}
