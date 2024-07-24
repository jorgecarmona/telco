import { ChangeEvent } from 'react';

import { TextField as MuiTextField, InputAdornment, InputLabel, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { iconLookup } from './icon-store';

import './styles/app.css';

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'onChange' | 'InputProps'> {
  icon?: boolean;
  id: string;
  label: string;
  name: string
  onChangeTextField: (e: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  InputProps?: MuiTextFieldProps['InputProps'];
}

function TextField({
  icon,
  id,
  label,
  name,
  onChangeTextField,
  readOnly,
  InputProps,
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChangeTextField(e);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {label && (
        <InputLabel
          htmlFor={id}
          className={others.required ? 'required-field' : undefined}
        >
          {label}
        </InputLabel>
      )}
      <MuiTextField
        disabled={readOnly}
        id={id}
        name={name}
        onChange={handleChange}
        InputProps={{
          startAdornment: renderEmailIcon(),
          ...InputProps,
        }}
        style={{ backgroundColor: readOnly ? '#eeeeee' : 'transparent' }}
        size='small'
        {...others}
      />
    </div>
  );
}

export default TextField;