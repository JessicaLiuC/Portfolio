"use client";

import Image from "next/image";
import { useState } from "react";
import { Button, Polaroid, SectionHeading, Text } from "@/components/ui";
import { playground, wallSlots, type Place } from "@/content/playground";

const { title, hint, shuffle, note, places: initial } = playground.wall;
const spotify = (q: string) => `https://open.spotify.com/search/${encodeURIComponent(q)}`;

export function TravelWall() {
  const [places, setPlaces] = useState(initial);
  const [playing, setPlaying] = useState<Place>(initial.find((p) => p.caption === "Tokyo") ?? initial[0]);

  const reshuffle = () => setPlaces((ps) => [...ps].sort(() => Math.random() - 0.5));

  return (
    <div className="flex flex-col gap-xl">
      <div className="flex items-center justify-between gap-xl">
        <SectionHeading title={title} />
        <Button variant="secondary" size="sm" onClick={reshuffle}>
          {shuffle}
        </Button>
      </div>
      <Text variant="body-18" tone="secondary">
        {hint}
      </Text>

      <div className="grid grid-cols-2 gap-xl rounded-xl bg-surface p-xl md:relative md:block md:aspect-[1320/900] md:overflow-hidden md:p-0">
        {places.map((place, i) => {
          const slot = wallSlots[i];
          const card = <Polaroid {...place} rotate={slot.rotate} selected={place === playing} className="w-full" />;
          return (
            <div key={i} className="md:absolute md:w-[22.727%]" style={{ left: `${slot.left}%`, top: `${slot.top}%` }}>
              {place.src ? (
                <button type="button" aria-pressed={place === playing} aria-label={`Play the song for ${place.caption}`} onClick={() => setPlaying(place)} className="block w-full cursor-pointer">
                  {card}
                </button>
              ) : (
                card
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-xl rounded-lg bg-inverse py-lg pr-xl pl-lg">
        {playing.src && (
          <div className="relative size-22 shrink-0 overflow-hidden rounded-[10px]">
            <Image src={playing.src} alt="" fill sizes="88px" className="object-cover" />
          </div>
        )}
        <div className="flex min-w-0 flex-1 flex-col gap-2xs">
          <Text variant="label-13" tone="inverse-muted">
            Playing for {playing.caption}
          </Text>
          <Text variant="title-22" tone="inverse">
            {playing.track}
          </Text>
          <Text variant="body-14" tone="inverse-subtle">
            {note}
          </Text>
        </div>
        <div className="flex items-center gap-lg">
          <Text as="a" href={spotify(playing.track ?? playing.caption)} target="_blank" rel="noopener noreferrer" variant="label-15" tone="inverse-muted" className="hover:text-inverse">
            Open in Spotify
          </Text>
          <Button variant="inverse" size="sm" href={spotify(playing.track ?? playing.caption)}>
            Play preview
          </Button>
        </div>
      </div>
    </div>
  );
}
