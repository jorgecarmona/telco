import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '@mui/material/Button';

import { Dialog } from '../../atoms';

const meta: Meta<typeof Dialog> = {
  title: 'Global Components/Dialog/All Stories',
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
    footer: '',
    content: '',
  },
};

export const AlertDialog: Story = {
  ...Template,
  args: {
    ...Template.args,
    content: '',
    footer: '',
    header: '',
  },
};

export const FormDialog: Story = {
  ...Template,
  args: {
    ...Template.args,
    content: '',
    footer: '',
    header: '',
  },
};

export const SizeDialog: Story = {
  ...Template,
  args: {
    ...Template.args,
    content: '',
    footer: '',
    header: '',
  },
};