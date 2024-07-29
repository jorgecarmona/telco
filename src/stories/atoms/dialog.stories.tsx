import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '@mui/material/Button';

import { Dialog } from '../../atoms';

const meta: Meta<typeof Dialog> = {
  title: 'Atoms/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open Dialog
        </Button>
        <Dialog {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
  args: {
    actions: '',
    content: '',
  },
};

export const AlertDialog: Story = {
  ...Template,
  args: {
    ...Template.args,
    content: '',
  },
};

export const FormDialog: Story = {
  ...Template,
  args: {
    ...Template.args,
    content: '',
    actions: '',
  },
};

export const SizeDialog: Story = {
  ...Template,
  args: {
    ...Template.args,
    content: '',
  },
};