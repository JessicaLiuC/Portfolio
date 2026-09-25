import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  args: { children: "View work", variant: "primary", size: "md" },
  argTypes: { variant: { control: "inline-radio" }, size: { control: "inline-radio" } },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary", children: "Shuffle the wall" } };
export const Inverse: Story = {
  args: { variant: "inverse", children: "Open Spotify" },
  globals: { backgrounds: { value: "inverse" } },
};
export const AsLink: Story = { args: { href: "/about", children: "About me" } };

export const Matrix: Story = {
  render: () => (
    <div className="inline-grid grid-cols-3 items-center gap-x-5xl gap-y-2xl rounded-lg bg-surface p-2xl">
      {(["md", "sm"] as const).flatMap((size) =>
        (["primary", "secondary", "inverse"] as const).map((variant) => (
          <Button key={variant + size} variant={variant} size={size}>
            Button
          </Button>
        )),
      )}
    </div>
  ),
};
