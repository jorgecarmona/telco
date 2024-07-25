import React from 'react';

import { Button, Dialog as MuiDialog, DialogActions, DialogContent, DialogContentText, DialogProps as MuiDialogProps, DialogTitle } from '@mui/material';

interface DialogProps extends Omit<MuiDialogProps, 'content' | 'title'> {
  actions?: React.ReactNode;
  buttonType?: 'button' | 'submit'; 
  content: React.ReactNode | string | undefined;
  label: string;
  size: 'sm' | 'md' | 'lg';
  title: React.ReactNode | string;
  type: 'alert' | 'form' | 'size';
}

function Dialog({ 
  actions, 
  buttonType = 'button', 
  content, 
  label, 
  onClose, 
  open, 
  size = 'lg', 
  title, 
  type, 
  ...rest
}: DialogProps) {
  
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClose) {
      onClose(event, "backdropClick"); 
    }
  };

  return (
    <MuiDialog
      aria-describedby="dialog-content"
      aria-labelledby="dialog-title"
      maxWidth={size}
      onClose={onClose}
      open={open}
      {...rest}
    >
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-content">{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {type === 'form' && actions}
        <Button onClick={handleButtonClick} type={type === 'form' ? buttonType : 'button'} color="primary">
          {label}
        </Button>
      </DialogActions>
    </MuiDialog>
  );
}

export default Dialog;
