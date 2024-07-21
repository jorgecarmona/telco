import {Meta, StoryObj} from '@storybook/react';

import TextField from '../../atoms/text-field';

const meta = {
  title: 'Atoms/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {control: {disable: true}},
    name: {control: {disable: true}}
  },
  args: {
    error: false,
    fullWidth: true,
    helperText: '',
    id: '',
    icon: false,
    label: '',
    name: '',
    onChangeTextField: (value: string) => {
      console.log('TextField entered:', value);
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
    onChangeTextField: (value) => {
      console.log('TextField entered:', value);
    },
    id: "123",
    name: "Text Field",
  },
};

export const IconTextField: Story = {
  args: {
    id: "123",
    label: 'Code',
    name: "Text Field",
    onChangeTextField: (value: string) => {
      console.log('TextField entered:', value);
    },
    readOnly: true,
    value: 'PF-ML',
  },
};

export const ReadOnlyTextField: Story = {
  args: {
    id: "123",
    label: 'Code',
    name: "Text Field",
    onChangeTextField: (value) => {
      console.log('TextField entered:', value);
    },
    readOnly: true,
    value: 'PF-ML',
  },
};

export const ErrorsTextField: Story = {
  args: {
    error: true,
    id: "123",
    helperText: 'This field is required',
    label: 'Name',
    required: true,
    name: "Text Field",
    onChangeTextField: (value) => {
      console.log('TextField entered:', value);
    },
    value: '',
  },
};
