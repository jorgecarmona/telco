import React from 'react';
import { Snackbar as MuiSnackbar, SnackbarProps as MuiSnackbarProps, SnackbarContent as MuiSnackbarContent, Collapse, Grow, } from '@mui/material';
import Button from './button';
import Alert from './alert';

interface SnackbarProps extends MuiSnackbarProps {
    duration?: number;
    message: string;
    onClose?: () => void;
    severity?: 'success' | 'info' | 'warning' | 'error';
    transient?: boolean;
    type?: 'default' | 'alert';
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'center' | 'right';
    open?: boolean;
}

export default function Snackbar({
    duration = 3000,
    message,
    onClose,
    severity = 'info',
    transient = true,
    type = 'default',
    vertical = 'bottom',
    horizontal = 'left',
    open = false,
    }: SnackbarProps) {

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        if (onClose) {
            onClose();
        }
    }

    return (
        <>
            <MuiSnackbar
                anchorOrigin={{ vertical, horizontal }}
                autoHideDuration={transient ? duration : null}
                onClose={handleClose}
                open={open}
                message={message}
                TransitionComponent={Collapse}
            >
                {type === 'alert' ? (
                    <Alert severity={severity} onClose={handleClose}> {message} </Alert>
                    ) : (
                    <MuiSnackbarContent message={message} action={<Button onClick={handleClose}>Close</Button>} />
                )}
            
            </MuiSnackbar>
        </>
    );
}