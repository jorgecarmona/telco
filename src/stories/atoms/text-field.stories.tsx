import { Meta, StoryObj } from '@storybook/react';
import TextField from '../../atoms/text-field';

const meta: Meta<typeof TextField> = {
  title: 'Global Components/TextField/All Stories',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: { table: { disable: true } },
    name: { table: { disable: true } },
    type: { table: { disable: true } },
    InputProps: { table: { disable: true } },
    onChangeTextField: { table: { disable: true }},
  },
  args: {
    error: false,
    fullWidth: true,
    helperText: '',
    id: '',
    icon: false,
    label: '',
    name: '',
    onChangeTextField: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log('TextField entered:', e.target.value);
    },
    placeholder: '',
    readOnly: false,
    required: false,
    value: '',
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Name',
    value: 'Massachusetts Paid Family & Medical Leave',
    fullWidth: true,
    onChangeTextField: (e) => {
      console.log('TextField entered:', e.target.value);
    },
    id: '123',
    name: 'text-field',
  },
};

export const IconTextField: Story = {
  args: {
    id: '123',
    label: 'Code',
    name: 'text-field',
    icon: true,
    onChangeTextField: (e) => {
      console.log('TextField entered:', e.target.value);
    },
    readOnly: true,
    value: 'PF-ML',
  },
};

export const ReadOnlyTextField: Story = {
  args: {
    id: '123',
    label: 'Code',
    name: 'text-field',
    readOnly: true,
    value: 'PF-ML',
    onChangeTextField: (e) => {
      console.log('TextField entered:', e.target.value);
    },
  },
};

export const ErrorsTextField: Story = {
  args: {
    error: true,
    id: '123',
    helperText: 'This field is required',
    label: 'Name',
    required: true,
    name: 'text-field',
    onChangeTextField: (e) => {
      console.log('TextField entered:', e.target.value);
    },
    value: '',
  },
};