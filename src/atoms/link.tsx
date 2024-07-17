import {Link as MuiLink} from '@mui/material';

interface LinkProps {
  children: React.ReactNode;
  underline?: 'none' | 'hover' | 'always';
}

function Link({children, underline = 'none'}: LinkProps) {
  return <MuiLink underline={underline}>{children}</MuiLink>;
}

export default Link;
