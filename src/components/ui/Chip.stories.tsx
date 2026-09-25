import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Chip } from "./Chip";

const meta = {
  title: "Components/Chip",
  component: Chip,
  args: { children: "Figma", tone: "tint", selected: false },
  argTypes: { tone: { control: "inline-radio" } },
} satisfies Meta<typeof Chip>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Tint: Story = {};
export const TintSelected: Story = { args: { selected: true } };
export const Inverse: Story = { args: { tone: "inverse" }, globals: { backgrounds: { value: "inverse" } } };
export const InverseSelected: Story = { args: { tone: "inverse", selected: true }, globals: { backgrounds: { value: "inverse" } } };

/** Selectable options, as used for the vibe chips. */
export const Selectable: Story = {
  render: function Render() {
    const [value, setValue] = useState("Chill");
    return (
      <div className="flex gap-xs">
        {["Chill", "Adventurous", "Cultural", "Foodie"].map((v) => (
          <Chip key={v} selected={v === value} onClick={() => setValue(v)}>
            {v}
          </Chip>
        ))}
      </div>
    );
  },
};
