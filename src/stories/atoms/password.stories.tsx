import {Meta, StoryObj} from '@storybook/react';

import Password from '../../atoms/password';

const meta = {
  title: 'Atoms/Password',
  component: Password,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: '',
    value: '',
    helperText: '',
    onChangeCallback: (value: string) => {
      console.log('passeord entered:', value);
    },
    error: false,
    errorHelperText: '',
    fullWidth: false,
    icon: true,
    required: true,
  },
} satisfies Meta<typeof Password>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Password',
    value: '1234567',
    helperText: 'Ingresa tu contraseña',
    onChangeCallback: (value) => {
      console.log('Password entered:', value);
    },
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    value: '1234567',
    error: true,
    required: true,
    errorHelperText: 'Usuario o contraseña incorrectas',
    onChangeCallback: (value) => {
      console.log('Password entered:', value);
    },
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Password',
    value: '1234567',
    icon: true,
    onChangeCallback: (value) => {
      console.log('Password entered:', value);
    },
  },
};
