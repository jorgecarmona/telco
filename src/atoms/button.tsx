import React from 'react';

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

import {IconType, iconLookup} from './icon-store';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Outlined = 'outlined',
  Text = 'text',
  Tertiary = 'tertiary',
}

export interface ButtonProps extends Omit<MuiButtonProps, 'color' | 'variant'> {
  buttonType?: ButtonType;
  children: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: IconType;
  onClick?: () => void;
  selected?: boolean;
}

function Button({
  buttonType = ButtonType.Text,
  children,
  disabled = false,
  fullWidth = false,
  icon,
  onClick,
  selected = false,
}: ButtonProps) {
  const Icon = icon ? iconLookup[icon] : null;
  let buttonVariant: 'text' | 'outlined' | 'contained';
  let buttonColor: 'primary' | 'secondary' | 'tertiary' | undefined = undefined;

  switch (buttonType) {
    case ButtonType.Primary:
    case ButtonType.Secondary:
      buttonVariant = 'contained';
      buttonColor = buttonType;
      break;

    case ButtonType.Outlined:
      buttonVariant = buttonType;
      break;

    default:
      buttonVariant = 'text';
  }

  let className = '';

  if (buttonType === ButtonType.Tertiary) {
    className += 'tertiary';
  }

  if (selected) {
    className += className.length > 0 ? ' selected' : 'selected';
  }

  return (
    <MuiButton
      className={className}
      variant={buttonVariant}
      color={buttonColor}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      startIcon={Icon ? <Icon /> : null}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
