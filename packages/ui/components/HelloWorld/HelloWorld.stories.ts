import type { Meta, StoryObj } from '@storybook/react';

import { HelloWorld } from './HelloWorld';

const meta: Meta<typeof HelloWorld> = {
  component: HelloWorld,
};

export default meta;

type Story = StoryObj<typeof HelloWorld>;

export const Default: Story = {
  args: {
    children: 'Hello world',
  },
};