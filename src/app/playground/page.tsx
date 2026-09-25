import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { GuessPlace, TravelWall } from "@/components/sections";
import { SectionHeading } from "@/components/ui";
import { playground } from "@/content/playground";

export const metadata: Metadata = { title: "Playground" };

export default function Playground() {
  return (
    <Container className="flex flex-col pb-section">
      <SectionHeading size="display" title={playground.title} subline={playground.subline} className="pt-[88px] pb-[72px]" />
      <div className="flex flex-col gap-section">
        <TravelWall />
        <GuessPlace />
      </div>
    </Container>
  );
}
