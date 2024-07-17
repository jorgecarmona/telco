import {Meta, StoryObj} from '@storybook/react';

import Alert from '../../atoms/alert';
import {action} from '@storybook/addon-actions';

type AlertProps = {
  severity: 'error' | 'info' | 'success' | 'warning';
  children: React.ReactNode;
};

const meta: Meta<AlertProps> = {
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
  },
};

export default meta;

export const Error = {
  args: {
    severity: 'error',
    children: 'This is an error alert',
    onClose: action('onClose was called'),
  },
};

export const Info = {
  args: {
    severity: 'info',
    children: 'This is an info alert',
    onClose: action('onClose was called'),
  },
};

export const Success = {
  args: {
    severity: 'success',
    children: 'This is an success alert',
    onClose: action('onClose was called'),
  },
};

export const Warning = {
  args: {
    severity: 'warning',
    children: 'This is an warning alert',
    onClose: action('onClose was called'),
  },
};
