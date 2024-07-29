import React from 'react';

import { Dialog as MuiDialog, DialogActions, DialogContent, DialogProps as MuiDialogProps } from '@mui/material';

interface DialogProps extends Omit<MuiDialogProps, 'content'> {
  actions?: React.ReactNode;
  content: React.ReactNode;
}

function Dialog ({ actions, content, ...props }: DialogProps) {
  return (
    <MuiDialog {...props}>
      <DialogContent>
        {content}
      </DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </MuiDialog>
  );
}

export default Dialog;