import type { Preview } from "@storybook/nextjs-vite";
import { montserrat } from "../src/fonts";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    backgrounds: {
      options: {
        page: { name: "page", value: "#fbf9f8" },
        surface: { name: "surface", value: "#f2ede8" },
        inverse: { name: "inverse", value: "#3e4436" },
      },
    },
    controls: { matchers: { color: /(background|color)$/i } },
  },
  initialGlobals: { backgrounds: { value: "page" } },
  decorators: [
    (Story) => (
      <div className={`${montserrat.variable} font-sans`}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default preview;
