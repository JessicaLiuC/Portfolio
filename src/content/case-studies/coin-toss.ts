import type { CaseStudy } from "./types";

const dir = "/work/coin-toss";

export const coinToss: CaseStudy = {
  slug: "coin-toss",
  title: "Coin Toss",
  subline: "An AI-powered travel inspiration app",
  intro:
    "People spend hours researching destinations, comparing activities, and struggling to create an itinerary, which can turn the exciting prospect of travel into a stressful chore. To solve this, we built Coin Toss.",
  meta: [
    { label: "Duration", value: "1 month" },
    { label: "My role", value: "Interviewer, UI/UX designer" },
    { label: "Project", value: "Design hackathon, team of six" },
    { label: "Tools", value: "Figma, Miro" },
  ],
  hero: { src: `${dir}/hero.png`, width: 494, height: 427, alt: "Coin Toss onboarding and home screens" },
  sections: [
    {
      title: "Problem",
      aside: true,
      blocks: [
        {
          kind: "list",
          items: [
            { icon: "indecisiveness", title: "Indecisiveness", description: "Friend groups or individuals often struggle to reach a consensus on where to travel and what to do." },
            { icon: "information-overload", title: "Information overload", description: "The abundance of travel information online can be overwhelming and frustrating." },
            { icon: "lack-of-personalization", title: "Lack of personalization", description: "Generic travel recommendations may not align with individual preferences, resulting in suboptimal experiences." },
          ],
        },
      ],
    },
    {
      title: "Research",
      blocks: [
        { kind: "text", text: "We interviewed 6 people to understand their experiences with trip planning, their travel preferences and behaviors. Our questions focused on their past experiences, the travel apps they use, and the challenges they face." },
        { kind: "media", items: [{ src: `${dir}/interview-board.png`, width: 1320, height: 548, alt: "Affinity board of interview notes" }] },
        {
          kind: "stats",
          items: [
            { value: "4/6", label: "users are concerned about safety when traveling" },
            { value: "5/6", label: "users would like to learn cultural norms and customs" },
            { value: "3+", label: "apps are used to plan a single trip from start to end" },
            { value: "100%", label: "of users are interested in trying AI for travel" },
          ],
        },
      ],
    },
    {
      title: "Application design",
      blocks: [
        {
          kind: "media",
          items: [
            { src: `${dir}/color.png`, width: 600, height: 541, alt: "Coin Toss color palette" },
            { src: `${dir}/typography.png`, width: 563, height: 693, alt: "Coin Toss type scale" },
          ],
        },
      ],
    },
    {
      title: "Wireframing",
      blocks: [
        { kind: "text", text: "Each team member created low-fidelity wireframes to explore different design directions. We then reviewed them together, combined the strongest elements from each, and delivered the final solution." },
        { kind: "media", items: [{ src: `${dir}/sketches.png`, width: 964, height: 946, alt: "Paper wireframe sketches" }] },
      ],
    },
    {
      title: "Final design",
      blocks: [
        {
          kind: "split",
          media: { src: `${dir}/final.png`, width: 365, height: 719, alt: "Coin Toss upcoming plan screen", rounded: false },
          blocks: [
            {
              kind: "grid",
              items: [
                { icon: "travel-style", title: "Input travel style", description: "Input preferred travel styles to generate a customized travel itinerary." },
                { icon: "two-itineraries", title: "Generate two itineraries", description: "The AI proposes two itineraries so users can make the final call." },
                { icon: "flip-coin", title: "Flip a coin to decide", description: "Whenever it is hard to choose, toss a coin!" },
                { icon: "audio-guide", title: "Audio guide", description: "Explore destinations with insightful narration tailored to the specific locations you visit." },
                { icon: "city-safety", title: "City safety and check-in", description: "The app shows the crime rate of each city and gives solo travelers a safety check-in during the trip." },
                { icon: "social-norms", title: "Social norms and local prices", description: "An AI-powered social norms feature uses Gemini to inform users about local customs and etiquette." },
              ],
            },
          ],
        },
      ],
    },
  ],
};
