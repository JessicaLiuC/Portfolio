import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MetaItem } from "./MetaItem";
import { SectionHeading } from "./SectionHeading";

const meta = {
  title: "Components/Section heading",
  component: SectionHeading,
  args: { title: "Section title", subline: "Optional one-line subline for the section.", size: "h2" },
  argTypes: { size: { control: "inline-radio" } },
} satisfies Meta<typeof SectionHeading>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = { args: { size: "display" } };
export const H1: Story = { args: { size: "h1" } };
export const H2: Story = {};
export const WithoutSubline: Story = { args: { subline: undefined } };

export const MetaRow: Story = {
  name: "Meta item row",
  render: () => (
    <div className="grid max-w-[960px] grid-cols-2 gap-xl md:grid-cols-4">
      <MetaItem label="Duration" value="3 months" />
      <MetaItem label="My role" value="UX designer, researcher" />
      <MetaItem label="Tools" value="Figma, Miro" />
      <MetaItem label="Project" value="School project" />
    </div>
  ),
};
