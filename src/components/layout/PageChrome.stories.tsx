import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

const meta = {
  title: "Layout/Page chrome",
  component: Nav,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Nav>;
export default meta;
type Story = StoryObj<typeof meta>;

export const NavBar: Story = { name: "Nav" };
export const FooterBar: Story = { name: "Footer", render: () => <Footer /> };
export const Mobile: Story = {
  globals: { viewport: { value: "mobile1" } },
  render: () => (
    <>
      <Nav />
      <div className="h-40" />
      <Footer />
    </>
  ),
};
