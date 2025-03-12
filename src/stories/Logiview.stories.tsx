import type { Meta, StoryObj } from '@storybook/react';

import Logview from '@savorui/logview';
import simple from './mock/logview/simple';
import bigdata from './mock/logview/bigdata';
import grouping from './mock/logview/grouping';
import advices from './mock/logview/advices';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Logview',
  component: Logview,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Logview>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DarkTheme: Story = {
  args: {
    theme: 'dark',
    logs: simple,
  },
};

export const LightTheme: Story = {
  args: {
    theme: 'light',
    logs: simple,
  },
};

export const BigData: Story = {
  args: {
    theme: 'dark',
    logs: bigdata,
  },
};

export const Grouping: Story = {
  args: {
    theme: 'dark',
    logs: grouping,
  },
};

export const Adivices: Story = {
  args: {
    theme: 'dark',
    logs: simple,
    advices,
  },
};

export const RightPanel: Story = {
  args: {
    theme: 'dark',
    logs: simple,
    renderRightPanelContent: () => (
      <div className="p-2">
        <h2>Custom Right Panel Title</h2>
        <p>This is a custom right panel content.</p>
      </div>
    ),
  },
};

export const TextSelection: Story = {
  args: {
    theme: 'dark',
    logs: simple,
    renderTextSelectionBubble: (text) => (
      <div
        onClick={(e) => e.stopPropagation()}
        className="border-solid border-red-200 p-2 bg-slate-300 text-slate-900 cursor-pointer"
      >
        Text Selection Bubble
      </div>
    ),
  },
};
