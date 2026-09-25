import Image from "next/image";
import { Container } from "@/components/layout";
import { SectionHeading, Text } from "@/components/ui";
import { about } from "@/content/about";

/** Two overlapping photos; positions are % of the 600×744 Figma frame. */
const photos = [
  { src: about.photos.paris, alt: "Chien-Chi in Paris", className: "top-0 left-0 h-[60.09%] w-[63.33%]" },
  { src: about.photos.tokyo, alt: "Chien-Chi in Tokyo", className: "top-[40.61%] left-[43.33%] h-[59.39%] w-[56.67%]" },
];

export function AboutIntro() {
  return (
    <Container as="section" className="flex flex-col gap-4xl py-[88px] lg:flex-row lg:justify-between lg:gap-0">
      <div className="flex flex-1 flex-col gap-2xl">
        <SectionHeading size="h1" title={about.title} />
        <div className="flex flex-col gap-lg">
          {about.body.map((p) => (
            <Text key={p} variant="body-20" tone="body">
              {p}
            </Text>
          ))}
        </div>
      </div>
      <div className="relative aspect-[600/744] w-full max-w-150 shrink-0">
        {photos.map((p) => (
          <div key={p.src} className={`absolute overflow-hidden rounded-lg bg-surface-strong ${p.className}`}>
            <Image src={p.src} alt={p.alt} fill sizes="380px" className="object-cover" />
          </div>
        ))}
      </div>
    </Container>
  );
}
