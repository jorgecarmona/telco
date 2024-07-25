import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '../../atoms';
import Button from '@mui/material/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Atoms/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['alert', 'form', 'size'] },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AlertDialog: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open Alert Dialog
        </Button>
        <Dialog {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
  args: {
    actions: <Button onClick={() => alert('Cancel')}>Cancelar</Button>,
    content: 'Este es un mensaje de alerta.',
    label: 'AGREE',
    size: 'md',
    title: 'Alert',
    type: 'alert',
  },
};

export const FormDialog: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open Form Dialog
        </Button>
        <Dialog {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
  args: {
    actions: <Button onClick={() => alert('Cancel')}>Cancelar</Button>,
    content: 'Este es un mensaje.',
    label: 'Subscribe',
    size: 'md',
    title: 'Subscribe',
    type: 'form',  
  },
};

export const SizeDialog: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open Size Dialog
        </Button>
        <Dialog {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
  args: {
    actions: <Button onClick={() => alert('Cancel')}>Cancelar</Button>,
    content: 'Este es un mensaje.',
    label: 'Close',
    size: 'md',
    title: 'Optional Size',
    type: 'size',  
  },
};
