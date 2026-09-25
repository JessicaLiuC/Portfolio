import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { iconNames } from "./Icon";
import { ListItem } from "./ListItem";

const meta = {
  title: "Components/List item",
  component: ListItem,
  args: { title: "List item title", description: "Supporting description for the item, one or two lines.", divider: true },
  argTypes: { icon: { control: "select", options: [undefined, ...iconNames] } },
  decorators: [(Story) => <div className="max-w-150">{Story()}</div>],
} satisfies Meta<typeof ListItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {};
export const Numbered: Story = { args: { number: "01" } };
export const WithIcon: Story = { args: { icon: "indecisiveness" } };
export const NoDivider: Story = { args: { divider: false, number: "01" } };

export const StackedList: Story = {
  render: (args) => (
    <div>
      {["Information overload", "Indecisiveness", "Lack of personalization"].map((t, i) => (
        <ListItem key={t} {...args} number={`0${i + 1}`} title={t} />
      ))}
    </div>
  ),
};
