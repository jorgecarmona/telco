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
            control: 'number',
            description: 'Set duration',
            if: { arg: 'transient', eq: true },
        },
        horizontal: {
            control: 'select',
            description: 'Select horizontal position',
            options: ['left', 'center', 'right'],
        },
        message: {
            control:'text',
            description: 'Message to display', 
        },
        onClose: { table: { disable: true } },
        open: { table: { disable: true } },
        severity: {
            control: 'select',
            description: 'Select severity',
            options: ['success', 'info', 'warning', 'error'],
            if: { arg: 'type', eq: 'alert' },
        },
        transient: {
            control: 'boolean',
            description: 'Set transient',
        },
        type: {
            control: 'select',
            description: 'Select type',
            options: ['default', 'alert'],
        },
        vertical: {
            control: 'select',
            description: 'Select vertical position',
            options: ['top', 'bottom'],
        },
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
            <Snackbar onClose={() => setOpen(false)} open={open} {...args}/>
        </div>
    );
};

export const Default: Story = {
    render: (args) => <SnackbarTemplate {...args} />,
    args: {
        duration: 3000,
        horizontal: 'left',
        message: 'This is a default message',
        transient: true,
        type: 'default',
        vertical: 'bottom',
    },
};

export const SuccessAlert: Story = {
    render: (args) => <SnackbarTemplate {...args} />,
    args: {
        duration: 3000,
        horizontal: 'center',
        message: 'Operation was successful!',
        transient: true,
        type: 'alert',
        severity: 'success',
        vertical: 'bottom',
    },
};

export const ErrorAlert: Story = {
    render: (args) => <SnackbarTemplate {...args} />,
    args: {
        duration: 5000,
        horizontal: 'right',
        message: 'Something went wrong!',
        transient: true,
        type: 'alert',
        severity: 'error',
        vertical: 'top',
    },
};

export const InfoAlert: Story = {
    render: (args) => <SnackbarTemplate {...args} />,
    args: {
        duration: 4000,
        horizontal: 'left',
        message: 'Here is some information.',
        transient: true,
        type: 'alert',
        severity: 'info',
        vertical: 'bottom',
    },
};

export const WarningAlert: Story = {
    render: (args) => <SnackbarTemplate {...args} />,
    args: {
        duration: 6000,
        horizontal: 'center',
        message: 'Warning!',
        transient: true,
        type: 'alert',
        severity: 'warning',
        vertical: 'top',
    },
};