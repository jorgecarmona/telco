import React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import { Button, Snackbar } from '../../atoms';

const meta = {
    title: 'Atoms/Snackbar',
    component: Snackbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        duration: {
            description: 'Set duration',
            control: 'number',
            if: { arg: 'transient', eq: true },
        },
        horizontal: {
            description: 'Select horizontal position',
            control: 'select',
            options: ['left', 'center', 'right'],
        },
        message: {
            description: 'Message to display', 
            control:'text'
        },
        severity: {
            description: 'Select severity',
            control: 'select',
            options: ['success', 'info', 'warning', 'error'],
            if: { arg: 'type', eq: 'alert' },
        },
        transient: {
            description: 'Set transient',
            control: 'boolean',
        },
        type: {
            description: 'Select type',
            control: 'select',
            options: ['default', 'alert'],
        },
        vertical: {
            description: 'Select vertical position',
            control: 'select',
            options: ['top', 'bottom'],
        },
        open: { table: { disable: true } },
        onClose: { table: { disable: true } },
    },

} satisfies Meta<typeof Snackbar>;

export default meta;

type Story = StoryObj<typeof meta>;

const SnackbarTemplate = (args: any) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Show Snackbar</Button>
            <Snackbar {...args} open={open} onClose={() => setOpen(false)} />
        </div>
    );
};

export const Default: Story = {
    render: (args) => <SnackbarTemplate {...args} />,
    args: {
        message: 'This is a default message',
        type: 'default',
        duration: 3000,
        transient: true,
        vertical: 'bottom',
        horizontal: 'left',
    },
};

export const SuccessAlert: Story = {
    render: (args) => <SnackbarTemplate {...args} />,
    args: {
        message: 'Operation was successful!',
        severity: 'success',
        type: 'alert',
        duration: 3000,
        transient: true,
        vertical: 'bottom',
        horizontal: 'center'
    },
};

export const ErrorAlert: Story = {
    render: (args) => <SnackbarTemplate {...args} />,
    args: {
        message: 'Something went wrong!',
        severity: 'error',
        type: 'alert',
        duration: 5000,
        transient: true,
        vertical: 'top',
        horizontal: 'right'
    },
};

export const InfoAlert: Story = {
    render: (args) => <SnackbarTemplate {...args} />,
    args: {
        message: 'Here is some information.',
        severity: 'info',
        type: 'alert',
        duration: 4000,
        transient: true,
        vertical: 'bottom',
        horizontal: 'left'
    },
};

export const WarningAlert: Story = {
    render: (args) => <SnackbarTemplate {...args} />,
    args: {
        message: 'Warning!',
        severity: 'warning',
        type: 'alert',
        duration: 6000,
        transient: true,
        vertical: 'top',
        horizontal: 'center'
    },
};