import {Meta, StoryObj} from '@storybook/react';

import Link from '../../atoms/link';

const meta = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Forgot Password?',
    underline: 'always',
  },
};

export const Secondary: Story = {
  render: (args) => (
    <>
      Texto adicional &nbsp; <Link {...args}>Sign up</Link>
    </>
  ),
  args: {
    children: 'Sign up',
    underline: 'hover',
  },
};

export const Default: Story = {
  args: {
    children: 'Terms & Conditions',
    underline: 'none',
  },
};
