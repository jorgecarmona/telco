import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material';

interface TypographyProps
  extends Omit<MuiTypographyProps, 'children' | 'variant'> {
  children: React.ReactNode;
  variant?: 'body1' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

function Typography({children, variant = 'body1'}: TypographyProps) {
  return (
    <>
      <MuiTypography variant={variant}>{children}</MuiTypography>
    </>
  );
}

export default Typography;
