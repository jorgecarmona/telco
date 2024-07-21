import {Meta, StoryObj} from '@storybook/react';
import {Autocomplete} from '../../atoms';

type Story = StoryObj<typeof Autocomplete>;
export default {
  title: 'Atoms/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: '',
    value: '',
    error: false,
    errorHelperText: '',
    helperText: '',
    required: false,
  },
  argTypes: {
    id: {control: { disable: true}},
    name: {control: { disable: true}}
  }
} as Meta<typeof Autocomplete>;

export const Default: Story = {
  args: {
    value: '',
    options: [
      {label: 'English', value: 'english'},
      {label: 'Spanish', value: 'spanish'},
      {label: 'French', value: 'french'},
      {label: 'German', value: 'german'},
      {label: 'Chinese', value: 'chinese'},
    ],
  },
};

export const HintText: Story = {
  args: {
    value: '',
    options: [{label: 'City of Residence', value: 'cityOfResidence'}],
    helperText: 'This is a hint to help user.',
    label: 'Rule',
    required: true,
  },
};

export const RequiredWithErrors: Story = {
  args: {
    value: '',
    options: [{label: 'City of Residence', value: 'cityOfResidence'}],
    helperText: 'This is a hint to help user.',
    error: true,
    errorHelperText: 'This field is required',
    label: 'Rule',
    required: true,
  },
};
