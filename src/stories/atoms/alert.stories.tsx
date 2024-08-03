import {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import { ThemeProvider } from '@emotion/react';

import theme from '../../theme/theme';

import Alert from '../../atoms/alert';

type AlertProps = {
  severity: 'error' | 'info' | 'success' | 'warning';
  children: React.ReactNode;
  title: ''
};

const meta: Meta<AlertProps> = {
  title: 'Global Components/Alert/All Stories',
  component: Alert,
  decorators: [(Story) => <ThemeProvider theme={theme}><Story /></ThemeProvider>],
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
    title: '',
  },
};

export const Info = {
  args: {
    severity: 'info',
    children: 'This is an info alert',
    onClose: action('onClose was called'),
    title: '',
  },
};

export const Success = {
  args: {
    severity: 'success',
    children: 'This is an success alert',
    onClose: action('onClose was called'),
    title: '',
  },
};

export const Warning = {
  args: {
    severity: 'warning',
    children: 'This is an warning alert',
    onClose: action('onClose was called'),
    title: '',
  },
};
