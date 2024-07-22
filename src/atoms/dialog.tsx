import React from 'react';
import {  Button, Dialog as MuiDialog, DialogProps as MuiDialogProps, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

//estender Propiedades con la interface de MUI 
interface DialogProps {
  type: 'alert' | 'form' | 'size';
  label: string;
  title: React.ReactNode | string;
  buttonType?: 'button' ;
  open: boolean;
  onClose: () => void;
  content: React.ReactNode;
  actions?: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
}


function Dialog ({ 
  type, 
  label, 
  title, 
  buttonType = 'button', 
  open, 
  onClose, 
  content, 
  actions, 
  size = 'lg'
}: DialogProps) {
  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-content"
      maxWidth={size}
    >
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-content">{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {type === 'form' && actions}
        <Button onClick={onClose} type={type === 'form' ? buttonType : 'button'} color="primary">
          {label}
        </Button>
      </DialogActions>
    </MuiDialog>
  );
}

export default Dialog;
