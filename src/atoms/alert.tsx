import React from 'react';

import { Alert as MuiAlert, AlertTitle as MuiAlertTitle, AlertProps as MuiAlertProps } from '@mui/material';

interface AlertProps extends MuiAlertProps {
  children: React.ReactNode;
  onClose?: () => void;
  open?: boolean;
  severity: 'error' | 'info' | 'success' | 'warning';
  title?: string;
}

function Alert({ children, onClose, open, severity, title,   ...rest }: AlertProps) {

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  if (!open) return null;

  const AlertTitle = (severity: 'error' | 'info' | 'success' | 'warning') => {
    const titles: Record<'error' | 'info' | 'success' | 'warning', string> = {
      'error': 'Error',
      'info': 'Info',
      'success': 'Success',
      'warning': 'Warning',
    };
  
    return titles[severity] || '';
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
      {...rest}
    >
      <MuiAlertTitle>{title || AlertTitle(severity)}</MuiAlertTitle> 
      {children}
    </MuiAlert>
  );
}

export default Alert;