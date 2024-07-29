import React from 'react';

import { Dialog as MuiDialog, DialogActions, DialogContent as MuiDialogContent, DialogProps as MuiDialogProps, DialogTitle as MuiDialogTitle } from '@mui/material';

interface DialogProps extends Omit<MuiDialogProps, 'content'> {
  footer?: React.ReactNode;
  content?: React.ReactNode;
  header?: React.ReactNode | string;
}

function Dialog ({ footer, content, header, ...props }: DialogProps) {
  return (
    <MuiDialog {...props}>
      <MuiDialogTitle id="alert-dialog-title">
        {header}
      </MuiDialogTitle>
      <MuiDialogContent>
        {content}
      </MuiDialogContent>
      {footer && <DialogActions>{footer}</DialogActions>}
    </MuiDialog>
  );
}

export default Dialog;