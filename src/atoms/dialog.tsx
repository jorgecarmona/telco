import React from 'react';

import {Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle, Button} from '@mui/material';

interface DialogProps {
  type: 'alert' | 'form' | 'size';
  label: string;
  title: string;
  buttonType?: "button" | "submit" | "reset";
  open: boolean;
  onClose: () => void;
  content: React.ReactNode;
  actions?: React.ReactNode; 
  size?: 'sm' | 'md' | 'lg';
}

function MuiDialog ({type,label,title,buttonType = 'button',open,onClose,content,actions,size='md'}: DialogProps) {
  return (
    <Dialog
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
      {type === 'form' && (
        <DialogActions>
          {actions && actions}
          <Button onClick={onClose} type={buttonType} color="primary">
            {label}
          </Button>
        </DialogActions>
      )}
      {type === 'alert' && (
        <DialogActions>
          <Button onClick={onClose} color="primary">
            {label}
          </Button>
        </DialogActions>
      )}
        {type === 'size' && (
        <DialogActions>
          <Button onClick={onClose} color="primary">
            {label}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}

export default MuiDialog;