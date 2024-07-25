import React from 'react';

import { Snackbar as MuiSnackbar, SnackbarProps as MuiSnackbarProps, SnackbarContent as MuiSnackbarContent, Collapse,} from '@mui/material';

import Button from './button';
import Alert from './alert';

interface BaseSnackbarProps extends MuiSnackbarProps {
    horizontal?: 'left' | 'center' | 'right';
    message: string;
    onClose?: () => void;
    open?: boolean;
    vertical?: 'top' | 'bottom';
}

interface TransientSnackbarProps extends BaseSnackbarProps {
    duration: number;
    transient: true;
}

interface NonTransientSnackbarProps extends BaseSnackbarProps {
    duration?: never;
    transient: false;
}

interface AlertSnackbarProps extends BaseSnackbarProps {
    severity: 'success' | 'info' | 'warning' | 'error';
    type: 'alert';
}

interface DefaultSnackbarProps extends BaseSnackbarProps {
    severity?: never;
    type?: 'default';
}

type SnackbarProps =
    | (TransientSnackbarProps & (AlertSnackbarProps | DefaultSnackbarProps))
    | (NonTransientSnackbarProps & (AlertSnackbarProps | DefaultSnackbarProps));

function Snackbar({
    duration = 3000,
    horizontal = 'left',
    message,
    onClose,
    open = false,
    severity = 'info',
    transient = true,
    type = 'default',
    vertical = 'bottom',
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