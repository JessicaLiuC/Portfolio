import { Button, Text } from "@/components/ui";
import { Container } from "@/components/layout";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <Container as="section" className="flex flex-col items-start gap-[36px] py-6xl lg:py-[180px]">
      {/* Display headline is unique to the hero: 96px SemiBold, 106%, -2.5%. */}
      <h1 className="text-[clamp(48px,6.35vw,96px)] leading-[1.06] font-semibold tracking-[-0.025em] text-primary">
        Creative like <em className="text-desert-clay-600">designer</em>,<br />
        logical like <em className="text-dev">&lt;/dev&gt;</em>.
      </h1>
      <Text variant="body-24" tone="secondary" className="max-w-[996px]">
        {hero.subtext}
      </Text>
      <Button href={hero.cta.href}>{hero.cta.label}</Button>
    </Container>
  );
}
