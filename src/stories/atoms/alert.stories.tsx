import type {Meta, StoryObj} from '@storybook/react';

import Alert from '../../atoms/alert';
import {action} from '@storybook/addon-actions';

const meta = {
    title: 'Atoms/Alert',
    component: Alert,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered',
    },
    argTypes: {
      severity: {
        control: 'select',
        options: ['error', 'info', 'success', 'warning'],
      },
      open: {
        control: 'boolean',
        defaultValue: true,
      },
      title: {
        control: 'text',
      },
    },
}satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Error: Story = {
  args: {
    children: 'This is an error alert',
    onClose: action('onClose was called'),
    open: true,
    severity: 'error',
    title: '',
  },
};

export const Info: Story = {
  args: {
    children: 'This is an info alert',
    onClose: action('onClose was called'),
    open: true,
    severity: 'info',
    title: '',    
  },
};

export const Success: Story = {
  args: {
    children: 'This is a success alert',
    onClose: action('onClose was called'),
    open: true,
    severity: 'success',
    title: '',    
  },
};

export const Warning: Story = {
  args: {
    children: 'This is a warning alert',
    onClose: action('onClose was called'),
    open: true,
    severity: 'warning',
    title: '',    
  },
};