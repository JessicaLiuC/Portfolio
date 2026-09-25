import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Blocks } from "./Blocks";

const img = "/image/social_life.svg";

const meta = {
  title: "Case study/Blocks",
  component: Blocks,
  parameters: { layout: "padded" },
  decorators: [(Story) => <div className="flex max-w-330 flex-col gap-3xl">{Story()}</div>],
} satisfies Meta<typeof Blocks>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = { args: { blocks: [{ kind: "text", text: ["First paragraph of body copy.", "Second paragraph.\nWith a line break."] }] } };
export const Quote: Story = { args: { blocks: [{ kind: "quote", text: "“How might we enable the user to upload and manage multiple videos?”" }] } };
export const Tags: Story = { args: { blocks: [{ kind: "tags", items: ["Log in page", "Data entry", "Data display"] }] } };
export const List: Story = {
  args: {
    blocks: [
      {
        kind: "list",
        items: [
          { number: "01", title: "Limited accessibility", description: "Customers are restricted to shopping on desktop." },
          { icon: "indecisiveness", title: "Indecisiveness", description: "Groups struggle to reach a consensus." },
        ],
      },
    ],
  },
};
export const Grid: Story = {
  args: {
    blocks: [
      {
        kind: "grid",
        items: [
          { icon: "search-bar", title: "Search bar", description: "Above the fold." },
          { icon: "personalization", title: "Personalization", description: "Recommendations from history." },
        ],
      },
    ],
  },
};
export const StatsAndSteps: Story = {
  args: {
    blocks: [
      { kind: "stats", items: [{ value: "4/6", label: "users worry about safety" }, { value: "100%", label: "want to try AI" }] },
      { kind: "steps", items: ["Define", "Ideate", "Prototype", "Test"].map((title, i) => ({ number: `0${i + 1}`, title })) },
    ],
  },
};
export const Media: Story = {
  args: {
    blocks: [
      {
        kind: "media",
        items: [
          { src: img, width: 560, height: 417, title: "Titled image" },
          { src: img, width: 720, height: 547 },
        ],
      },
    ],
  },
};
export const Split: Story = {
  args: {
    blocks: [{ kind: "split", gap: "6xl", media: { src: img, width: 400, height: 400 }, blocks: [{ kind: "text", text: "Copy beside a fixed-width image." }] }],
  },
};
export const SubsectionAndColumns: Story = {
  args: {
    blocks: [
      { kind: "sub", title: "Job availability", blocks: [{ kind: "text", text: "An H4 subsection with its own blocks." }] },
      { kind: "columns", items: [{ title: "Challenges", text: "Research misalignment." }, { title: "Solution", text: "Thematic analysis." }] },
    ],
  },
};
export const SlotAndLink: Story = {
  args: { blocks: [{ kind: "slot", label: "Final screens (website and mobile)", height: 640 }, { kind: "link", label: "See the prototype →" }] },
};
