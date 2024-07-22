import {Meta, StoryObj} from '@storybook/react';

import Password from '../../atoms/password';

const meta = {
  title: 'Atoms/Password',
  component: Password,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {table: { disable: true}},
    name: {table: { disable: true}}
  },
  args: {
    error: false,
    errorHelperText: '',
    fullWidth: false,
    helperText: '',
    icon: true,
    id: '',
    label: '',
    name: '',
    onChangeCallback: (value: string) => {
      console.log('passeord entered:', value);
    },
    required: true,
    value: '',
  },
} satisfies Meta<typeof Password>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: false,
    id: 'password',
    name: 'password',
    helperText: 'Ingresa tu contraseña',
    label: 'Password',
    value: '1234567',
    onChangeCallback: (value) => {
      console.log('Password entered:', value);
    },
    required: false,
  },
};

export const WithError: Story = {
  args: {
    error: true,
    errorHelperText: 'Usuario o contraseña incorrectas',
    id: 'password',
    label: 'Password',
    name: 'password',
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
    id: 'password',
    label: 'Password',
    name: 'password',
    onChangeCallback: (value) => {
      console.log('Password entered:', value);
    },
    value: '1234567',
    required: false,
  },
};