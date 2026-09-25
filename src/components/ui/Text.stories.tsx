import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Text, textVariants } from "./Text";

const meta = {
  title: "Components/Text",
  component: Text,
  args: { children: "Creative like designer, logical like dev", variant: "body-17", tone: "primary" },
  argTypes: { variant: { control: "select", options: textVariants } },
} satisfies Meta<typeof Text>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Heading: Story = { args: { as: "h1", variant: "h1-56" } };
export const Overline: Story = { args: { variant: "overline-13", tone: "muted", children: "My role" } };
export const Accent: Story = { args: { variant: "stat-44", tone: "accent", children: "4/6" } };
