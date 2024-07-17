import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {fn} from '@storybook/test';
import Chip from '../../atoms/chip';
const meta: Meta = {
  title: 'Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['pending', 'open', 'approved', 'denied', 'outlined', 'default'],
      description: 'Selects the chip type',
      table: {
        defaultValue: {summary: 'default'},
      },
    },
  },
  args: {
    type: 'default',
    label: 'Default Chip',
    deletable: true,
    onClick: fn(),
    // onDelete: fn(),
  },
};

type Story = StoryObj<typeof meta>;

export default meta;

export const NotDeletable: Story = {
  args: {
    type: 'default',
    label: 'Default',
    deletable: false,
    onClick: action('chip was clicked'),
  },
};

export const Pending: Story = {
  args: {
    type: 'pending',
    label: 'Pending Chip',
    onDelete: action('chip deleted'),
    onClick: action('chip was clicked'),
  },
};
export const Open: Story = {
  args: {
    type: 'open',
    label: 'Open Chip',
    onDelete: action('chip deleted'),
    onClick: action('chip was clicked'),
  },
};
export const Approved: Story = {
  args: {
    type: 'approved',
    label: 'Approved Chip',
    onDelete: action('chip deleted'),
    onClick: action('chip was clicked'),
  },
};
export const Denied: Story = {
  args: {
    type: 'denied',
    label: 'Denied Chip',
    onDelete: action('chip deleted'),
    onClick: action('chip was clicked'),
  },
};
export const Outlined: Story = {
  args: {
    type: 'outlined',
    label: 'Outlined Chip',
    onDelete: action('chip deleted'),
    onClick: action('chip was clicked'),
  },
};
export const Default: Story = {
  args: {
    type: 'default',
    label: 'Default Chip',
    onDelete: action('chip deleted'),
    onClick: action('chip was clicked'),
  },
};
export const EnabledOutlined: Story = {
  args: {
    label: 'Enabled Outlined',
    type: 'enabled',
    onDelete: action('chip deleted'),
    onClick: action('chip was clicked'),
  },
};
export const DisabledOutlined: Story = {
  args: {
    label: 'Disabled Outlined',
    type: 'disabled',
    onDelete: action('chip deleted'),
    onClick: action('chip was clicked'),
  },
};
export const RejectedOutlined: Story = {
  args: {
    label: 'Rejected Outlined',
    type: 'rejected',
    onDelete: action('chip deleted'),
    onClick: action('chip was clicked'),
  },
};
