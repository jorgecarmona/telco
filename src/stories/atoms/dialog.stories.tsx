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
    type: {
      control: 'radio',
      options: ['alert', 'form', 'size'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Open {args.type.charAt(0).toUpperCase() + args.type.slice(1)} Dialog
        </Button>
        <Dialog {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
  args: {
    actions: <Button onClick={() => alert('Cancel')}>Cancelar</Button>,
    content: 'Este es un mensaje.',
    label: 'OK',
    size: 'md',
    title: 'Dialog',
    type: 'alert',
  },
};

export const AlertDialog: Story = {
  ...Template,
  args: {
    ...Template.args,
    content: 'Este es un mensaje de alerta.',
    label: 'AGREE',
    title: 'Alert',
    type: 'alert',
  },
};

export const FormDialog: Story = {
  ...Template,
  args: {
    ...Template.args,
    content: 'Este es un formulario.',
    label: 'Submit',
    title: 'Form',
    type: 'form',
  },
};

export const SizeDialog: Story = {
  ...Template,
  args: {
    ...Template.args,
    content: 'Este es un mensaje de tamaño personalizado.',
    label: 'Close',
    title: 'Size',
    type: 'size',
  },
};
