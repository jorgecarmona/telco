import React from 'react';

import {Alert as MuiAlert, AlertTitle as MuiAlertTitle} from '@mui/material';

interface AlertProps {
  severity: 'error' | 'info' | 'success' | 'warning';
  onClose?: () => void;
  children?: React.ReactNode;
}

function Alert({severity, onClose, children}: AlertProps) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    if (onClose) {
      onClose();
    }
  };

  if (!open) return null;

  const AlertTitle = (severity: 'error' | 'info' | 'success' | 'warning') => {
    switch (severity) {
      case 'error':
        return 'Error';
      case 'info':
        return 'Info';
      case 'success':
        return 'Success';
      case 'warning':
        return 'Warning';
      default:
        return '';
    }
  };

  return (
    <MuiAlert
      onClose={handleClose}
      severity={severity}
      sx={{
        '& .MuiAlertTitle-root': {
          fontWeight: 'bold',
        },
      }}
    >
      <MuiAlertTitle>{AlertTitle(severity)}</MuiAlertTitle>
      {children}
    </MuiAlert>
  );
}

export default Alert;
