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
    error: false,
    errorHelperText: '',
    fullWidth: false,
    helperText: '',
    icon: true,
    label: '',
    onChangeCallback: (value: string) => {
      console.log('password entered:', value);
    },
    required: true,
    value: '',
  },
  argTypes: {
    id: { table: { disable: true } },
    name: { table: { disable: true } },
    onChangeCallback: { table: { disable: true } },
  },
} satisfies Meta<typeof Password>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    helperText: 'Ingresa tu contraseña',
    icon: false,
    id: 'Password',
    label: 'Password',
    name: 'Password',
    onChangeCallback: (value) => {
      console.log('Password entered:', value);
    },
    required: false,
    value: '1234567',
  },
};

export const WithError: Story = {
  args: {
    error: true,
    errorHelperText: 'Usuario o contraseña incorrectas',
    icon: false,
    id: 'Password',
    label: 'Password',
    name: 'Password',
    onChangeCallback: (value) => {
      console.log('Password entered:', value);
    },
    required: true,
    value: '1234567',
  },
};

export const WithIcon: Story = {
  args: {
    icon: true,
    id: 'Password',
    label: 'Password',
    name: 'Password',
    onChangeCallback: (value) => {
      console.log('Password entered:', value);
    },
    value: '1234567',
  },
};