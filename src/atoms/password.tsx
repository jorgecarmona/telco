import React, { ChangeEvent } from 'react';

import TextField from './text-field';
import { TextFieldProps } from './text-field';

import { IconButton, InputAdornment, InputLabel } from '@mui/material';
import { iconLookup } from './icon-store';

interface PasswordProps extends Omit<TextFieldProps, 'onChangeTextField' | 'required'> {
  onChangeCallback: (value: string) => void;
  errorHelperText?: string;
  icon?: boolean;
  value: string;
  required?: boolean;
  label: string;
}

function Password({
  fullWidth = false,
  onChangeCallback,
  helperText,
  error,
  errorHelperText,
  icon,
  required,
  value,
  label,
  ...others
}: PasswordProps) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeCallback(e.target.value);
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
            {showPassword ? <iconLookup.visibilityoff /> : <iconLookup.visibility />}
          </IconButton>
        </InputAdornment>
      );
    }
    return null;
  };

  const newHelperText = error ? errorHelperText : helperText;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <InputLabel htmlFor="Password" />
      <TextField
        {...others}
        error={Boolean(error)}
        fullWidth={fullWidth}
        helperText={newHelperText}
        id="Password"
        InputProps={{
          endAdornment: renderPasswordIcon(),
        }}
        label={label}
        name='Password'
        onChangeTextField={handleChange}
        required={required}
        size="small"
        type={showPassword ? 'text' : 'password'}
        value={value}
      />
    </div>
  );
}

export default Password;