import React from 'react';

import {
  TextField as MuiTextField,
  InputAdornment,
  InputLabel,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material';

import { iconLookup } from './icon-store';

import './styles/app.css';

export interface TextFieldProps
  extends Omit<MuiTextFieldProps, 'onChange' | 'InputProps'> {
  icon?: boolean;
  id: string;
  label: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  InputProps?: MuiTextFieldProps['InputProps'];
}

function CustomTextField(
  {
    icon,
    id,
    label,
    name,
    onChange,
    readOnly,
    InputProps,
    ...others
  }: TextFieldProps,
  ref: React.Ref<HTMLInputElement>,
) {
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange ? onChange(e) : null
        }
        InputProps={{
          startAdornment: renderEmailIcon(),
          ...InputProps,
        }}
        style={{ backgroundColor: readOnly ? '#eeeeee' : 'transparent' }}
        size="small"
        ref={ref}
        {...others}
      />
    </div>
  );
}

const TextField = React.forwardRef(CustomTextField);

export default TextField;
