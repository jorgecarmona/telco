import React, {ChangeEvent} from 'react';

import TextField from './text-field';

import {iconLookup} from './icon-store';
import {IconButton, InputAdornment, InputLabel} from '@mui/material';

interface PasswordProps {
  error?: boolean;
  errorHelperText?: string;
  fullWidth?: boolean;
  helperText?: string;
  icon?: boolean;
  id: string;
  label: string;
  name: string;
  onChangeCallback: (value: string) => void;
  required?: boolean;
  value: string;
}

function Password({
  error,
  errorHelperText,
  fullWidth = false,
  helperText,
  icon,
  label,
  name,
  onChangeCallback,
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
    <div>
      <InputLabel htmlFor="Password" required={false}>
        {label} {required && <span style={{color: 'red'}}>*</span>}
      </InputLabel>
      <TextField
        error={Boolean(error)}
        fullWidth={fullWidth}
        helperText={newHelperText}
        id="Password"
        inputProps={{
          endAdornment: renderPasswordIcon(), 
        }}
        name={name}
        onChangeTextField={handleChange}
        type={showPassword ? 'text' : 'password'}
        value={value}
      />
    </div>
  );
}

export default Password;