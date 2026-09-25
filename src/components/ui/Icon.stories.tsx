import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon, iconNames } from "./Icon";
import { Text } from "./Text";

const meta = {
  title: "Components/Icon",
  component: Icon,
  args: { name: "indecisiveness" },
  argTypes: { name: { control: "select", options: iconNames } },
} satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const All: Story = {
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-xl">
      {iconNames.map((name) => (
        <div key={name} className="flex flex-col items-center gap-xs">
          <Icon name={name} />
          <Text variant="body-13" tone="muted" className="text-center">
            {name}
          </Text>
        </div>
      ))}
    </div>
  ),
};
