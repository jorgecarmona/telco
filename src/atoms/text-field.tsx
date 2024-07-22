import {ChangeEvent} from 'react';

import {
  TextField as MuiTextField,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import {iconLookup} from './icon-store';

import './styles/app.css';

interface TextFieldProps {
  error?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  icon?: boolean;
  id: string;
  label?: string;
  name: string;
  onChangeTextField: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  value?: string;
  inputProps?: object;
  type?: any;
}

function TextField({
  error,
  fullWidth,
  helperText,
  icon,
  id,
  label,
  name,
  onChangeTextField,
  placeholder,
  readOnly,
  required,
  value,
  inputProps,
  ...others
}: TextFieldProps) {
  const renderEmailIcon = () => {
    if (icon) {
      return (
        <InputAdornment position="start">
          <iconLookup.email />
        </InputAdornment>
      );
    }
    return null;
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChangeTextField(e);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <InputLabel
        htmlFor="TextField"
        className={required ? 'required-field' : undefined}
      >
        {label}
      </InputLabel>
      <MuiTextField
        error={error}
        fullWidth={fullWidth}
        helperText={helperText}
        id={id}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={readOnly}
        style={{backgroundColor: readOnly ? '#eeeeee' : 'transparent'}}
        value={value}
        size="small"
        InputProps={{
          startAdornment: renderEmailIcon(),
          ...inputProps,
        }}
        {...others}
      />
    </div>
  );
}

export default TextField;