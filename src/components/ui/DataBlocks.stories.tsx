import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Stat } from "./Stat";
import { Step } from "./Step";

const meta = {
  title: "Components/Data blocks",
  component: Stat,
  args: { value: "4/6", label: "users are concerned about safety when traveling" },
  decorators: [(Story) => <div className="w-75">{Story()}</div>],
} satisfies Meta<typeof Stat>;
export default meta;
type Story = StoryObj<typeof meta>;

export const StatBlock: Story = { name: "Stat" };

export const StepBlock: Story = {
  name: "Step",
  render: () => <Step number="01" title="Define" description="Short description of this step." />,
};

export const StatRow: Story = {
  decorators: [(Story) => <div className="w-[1000px]">{Story()}</div>],
  render: () => (
    <div className="grid grid-cols-3 gap-xl">
      <Stat value="4/6" label="users are concerned about safety when traveling" />
      <Stat value="5/6" label="users rely on social media to plan a trip" />
      <Stat value="3/6" label="users struggle to decide between options" />
    </div>
  ),
};

export const StepRow: Story = {
  decorators: [(Story) => <div className="w-[1200px]">{Story()}</div>],
  render: () => (
    <div className="grid grid-cols-5 gap-xl">
      {["Empathize", "Define", "Ideate", "Prototype", "Test"].map((t, i) => (
        <Step key={t} number={`0${i + 1}`} title={t} />
      ))}
    </div>
  ),
};
