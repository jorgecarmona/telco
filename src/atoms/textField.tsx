import {ChangeEvent} from 'react';

import {
  TextField as MuiTextField,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import {iconLookup} from './icon-store';

interface TextFieldProps {
  error?: boolean;
  fullWidth?: boolean;
  helperText?: string;
  icon?: boolean;
  label: string;
  onChangeTextField: (value: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  value?: string;
}

function TextField({
  error,
  fullWidth,
  helperText,
  icon,
  label,
  onChangeTextField,
  placeholder,
  readOnly,
  required,
  value,
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
    onChangeTextField(e.target.value);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <InputLabel
        htmlFor="TextField"
        className={required ? 'required-field' : undefined}
      >
        {label}
      </InputLabel>
      <MuiTextField
        fullWidth={fullWidth}
        id="TextField"
        size="small"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        style={{backgroundColor: readOnly ? '#eeeeee' : 'transparent'}}
        disabled={readOnly}
        InputProps={{
          startAdornment: renderEmailIcon(),
        }}
      />
    </div>
  );
}

export default TextField;
