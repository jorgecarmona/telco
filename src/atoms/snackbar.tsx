import React from 'react';
import { Snackbar as MuiSnackbar, SnackbarProps as MuiSnackbarProps, SnackbarContent as MuiSnackbarContent, Collapse, Grow, } from '@mui/material';
import Button from './button';
import Alert from './alert';

interface BaseSnackbarProps extends MuiSnackbarProps {
    message: string;
    onClose?: () => void;
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'center' | 'right';
    open?: boolean;
}

interface TransientSnackbarProps extends BaseSnackbarProps {
    transient: true;
    duration: number;
}

interface NonTransientSnackbarProps extends BaseSnackbarProps {
    transient: false;
    duration?: never;
}

interface AlertSnackbarProps extends BaseSnackbarProps {
    type: 'alert';
    severity: 'success' | 'info' | 'warning' | 'error';
}

interface DefaultSnackbarProps extends BaseSnackbarProps {
    type?: 'default';
    severity?: never;
}

type SnackbarProps =
    | (TransientSnackbarProps & (AlertSnackbarProps | DefaultSnackbarProps))
    | (NonTransientSnackbarProps & (AlertSnackbarProps | DefaultSnackbarProps));

function Snackbar({
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

export default Snackbar;