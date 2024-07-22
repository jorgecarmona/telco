import {Meta, StoryObj} from '@storybook/react';

import TextField from '../../atoms/text-field';

const meta: Meta<typeof TextField> = {
  title: 'Atoms/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {control: {disable: true}},
    name: {control: {disable: true}},
    inputProps: {control: {disable: true}},
    type: {control: {disable: true}},
    onChangeTextField: {
      action: 'changed',
      description: 'Callback function for text field changes',
    },
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
    id: "123",
    name: "Text Field",
  },
};

export const IconTextField: Story = {
  args: {
    id: "123",
    label: 'Code',
    name: "Text Field",
    icon: true,  // Added icon prop for demonstration
    onChangeTextField: (e) => {
      console.log('TextField entered:', e.target.value);
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
    id: "123",
    helperText: 'This field is required',
    label: 'Name',
    required: true,
    name: "Text Field",
    onChangeTextField: (e) => {
      console.log('TextField entered:', e.target.value);
    },
    value: '',
  },
};
