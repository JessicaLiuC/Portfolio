import { Container } from "@/components/layout";
import { Button, SectionHeading } from "@/components/ui";
import { contact } from "@/content/home";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section className="bg-surface">
      <Container className="flex flex-col items-start gap-xl py-gutter md:flex-row md:items-center md:justify-between">
        <SectionHeading title={contact.title} subline={contact.subline} />
        <Button href={`mailto:${site.email}`}>{contact.cta}</Button>
      </Container>
    </section>
  );
}
