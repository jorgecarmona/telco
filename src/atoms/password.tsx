import React, {ChangeEvent} from 'react';

import {iconLookup} from './icon-store';
import {IconButton, InputAdornment, TextField, InputLabel} from '@mui/material';

interface PasswordProps {
  error?: boolean;
  errorHelperText?: string;
  fullWidth?: boolean;
  onChangeCallback: (value: string) => void;
  helperText?: string;
  icon?: boolean;
  label: string;
  required?: boolean;
  value: string;
}

function Password({
  fullWidth = false,
  label,
  onChangeCallback,
  helperText,
  error,
  errorHelperText,
  icon,
  required,
  value,
}: PasswordProps) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChangeCallback(e.target.value);

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

  let newHelperText = helperText;

  if (error) {
    newHelperText = errorHelperText;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <InputLabel htmlFor="Password" required={false}>
        {label} {required && <span style={{color: 'red'}}>*</span>}
      </InputLabel>
      <TextField
        error={Boolean(error)}
        fullWidth={fullWidth}
        helperText={newHelperText}
        id="Password"
        InputProps={{
          endAdornment: renderPasswordIcon(),
        }}
        onChange={handleChange}
        required={required}
        size="small"
        type={showPassword ? 'text' : 'password'}
        value={value}
      />
    </form>
  );
}

export default Password;
