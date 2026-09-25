"use client";

import { useState } from "react";
import { Button, Chip, Text } from "@/components/ui";
import { about } from "@/content/about";

const { title, subline, vibes, note } = about.music;

export function MusicCard() {
  const [vibe, setVibe] = useState(vibes[0]);

  return (
    <div className="flex flex-col gap-xl rounded-xl bg-inverse p-3xl lg:w-160 lg:shrink-0">
      <div className="flex flex-col gap-xs">
        <Text as="h3" variant="h3-28" tone="inverse">
          {title}
        </Text>
        <Text variant="body-17" tone="inverse-muted">
          {subline}
        </Text>
      </div>
      <div className="flex flex-wrap gap-[10px]">
        {vibes.map((v) => (
          <Chip key={v} tone="inverse" selected={v === vibe} onClick={() => setVibe(v)}>
            {v}
          </Chip>
        ))}
      </div>
      <div className="flex items-center gap-lg rounded-md bg-inverse-strong py-md pr-lg pl-md">
        <div className="size-30 shrink-0 rounded-sm bg-accent-swatch" />
        <div className="flex min-w-0 flex-1 flex-col gap-2xs">
          <Text variant="label-13" tone="inverse-muted">
            Playlist
          </Text>
          <Text variant="title-20" tone="inverse">
            {vibe}
          </Text>
          <Text variant="body-13" tone="inverse-subtle">
            {note}
          </Text>
        </div>
        <Button variant="inverse" size="sm" href={`https://open.spotify.com/search/${encodeURIComponent(vibe)}/playlists`}>
          Play
        </Button>
      </div>
    </div>
  );
}
