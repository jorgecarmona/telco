import React from 'react';

import { TextField } from '../atoms';
import { TextFieldProps } from './text-field';
import { iconLookup } from './icon-store';

import { IconButton, InputAdornment, InputLabel } from '@mui/material';

interface PasswordProps extends Omit<TextFieldProps, 'onChange' | 'required'> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorHelperText?: string;
  icon?: boolean;
  required?: boolean;
  label: string;
}

function CustomPassword(
  {
    fullWidth = false,
    onChange,
    helperText,
    error,
    errorHelperText,
    icon,
    required,
    label,
    ...others
  }: PasswordProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const renderPasswordIcon = () => {
    if (icon) {
      return (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? (
              <iconLookup.visibilityoff />
            ) : (
              <iconLookup.visibility />
            )}
          </IconButton>
        </InputAdornment>
      );
    }
    return null;
  };

  // const newHelperText = error ? errorHelperText : helperText;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <InputLabel htmlFor={others.id} />
      <TextField
        {...others}
        error={Boolean(error)}
        fullWidth={fullWidth}
        helperText={helperText}
        id={others.id}
        InputProps={{
          endAdornment: renderPasswordIcon(),
        }}
        label={label}
        name={others.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange ? onChange(e) : null
        }
        required={required}
        size="small"
        type={showPassword ? 'text' : 'password'}
        ref={ref}
      />
    </div>
  );
}

const Password = React.forwardRef(CustomPassword);

export default Password;
