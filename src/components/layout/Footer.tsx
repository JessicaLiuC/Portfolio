import { site, type Link } from "@/content/site";
import { Text } from "@/components/ui/Text";
import { Container } from "./Container";

export type FooterProps = { copyright?: string; links?: Link[] };

export function Footer({ copyright = `© ${new Date().getFullYear()} by ${site.name}`, links = site.social }: FooterProps) {
  return (
    <footer className="border-t border-hairline">
      <Container className="flex flex-col gap-md py-2xl sm:flex-row sm:items-center sm:justify-between">
        <Text variant="body-15" tone="secondary">
          {copyright}
        </Text>
        <ul className="flex gap-2xl">
          {links.map((l) => (
            <li key={l.href}>
              <Text as="a" href={l.href} target="_blank" rel="noopener noreferrer" variant="label-15" tone="body" className="hover:text-primary">
                {l.label}
              </Text>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
