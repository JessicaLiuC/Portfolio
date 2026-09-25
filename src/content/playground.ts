import { about } from "./about";

export type Place = {
  caption: string;
  src?: string;
  /** "Title, Artist" of the song for this place. */
  track?: string;
};

/** Wall slots: top-left of the unrotated 300×360 card as % of the 1320×900 Figma wall, plus tilt. */
export const wallSlots = [
  { left: 7.35, top: 10.0, rotate: 4 },
  { left: 38.58, top: 12.43, rotate: -3 },
  { left: 67.7, top: 8.35, rotate: 2 },
  { left: 22.89, top: 51.01, rotate: -4 },
  { left: 49.27, top: 50.84, rotate: 3 },
  { left: 74.33, top: 54.96, rotate: -2 },
];

const next: Place = { caption: "Somewhere next" };

export const playground = {
  title: "Playground",
  subline: "A loose collection of travel memories. Mostly photos, occasionally a game.",
  wall: {
    title: "Places I have been",
    hint: "Tap a photo to hear what I was listening to there.",
    shuffle: "Shuffle the wall",
    note: "One song per place. Guests hear a 30-second preview.",
    places: [
      { caption: "Paris", src: about.photos.paris, track: "Track title, Artist" },
      next,
      next,
      next,
      { caption: "Tokyo", src: about.photos.tokyo, track: "Track title, Artist" },
      next,
    ] satisfies Place[],
  },
  quiz: {
    title: "Guess where this was taken",
    subline: "Three guesses, one photo. No pressure.",
    photo: about.photos.tokyo,
    options: ["Kyoto", "Tokyo", "Taipei"],
    answer: "Tokyo",
  },
};
