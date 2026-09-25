import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Polaroid } from "./Polaroid";

const meta = {
  title: "Components/Polaroid",
  component: Polaroid,
  args: { caption: "Paris", src: "/image/social_life.svg" },
  argTypes: { rotate: { control: { type: "range", min: -8, max: 8 } } },
} satisfies Meta<typeof Polaroid>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Photo: Story = {};
export const PhotoSelected: Story = { args: { selected: true } };
export const Slot: Story = { args: { src: undefined } };
export const SlotSelected: Story = { args: { src: undefined, selected: true } };

/** Rescaled like the About card's mini polaroids — caption and insets scale too. */
export const Small: Story = { args: { className: "w-[130px]" } };

export const Wall: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2xl p-2xl">
      {[-4, 3, -2, 5].map((r, i) => (
        <Polaroid key={i} {...args} rotate={r} className="w-55" />
      ))}
    </div>
  ),
};
