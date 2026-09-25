import { Container } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { about } from "@/content/about";
import { MusicCard } from "./MusicCard";
import { TravelCard } from "./TravelCard";

export function OutsideOfWork() {
  return (
    <Container as="section" className="flex flex-col gap-3xl pb-section">
      <SectionHeading title={about.outside.title} subline={about.outside.subline} />
      <div className="flex flex-col gap-3xl lg:flex-row">
        <MusicCard />
        <TravelCard />
      </div>
    </Container>
  );
}
