import type { Meta, StoryObj } from "@storybook/react-vite";
import SamplePage from "./SamplePage";

const meta: Meta<typeof SamplePage> = {
  title: "Features/SamplePage",
  component: SamplePage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
