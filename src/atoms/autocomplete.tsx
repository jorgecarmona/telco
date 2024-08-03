import React, { ChangeEvent } from 'react';
import { Autocomplete as MuiAutocomplete, InputLabel } from '@mui/material';

import TextField from './text-field';

import './styles/app.css';

interface OptionType {
  label: string;
  value: string;
}
interface AutocompleteProps {
  id: string;
  name: string;
  error?: boolean;
  errorHelperText?: string;
  helperText?: string;
  label?: string;
  options: OptionType[];
  required?: boolean;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CustomAutocomplete(
  {
    id,
    name,
    error,
    errorHelperText,
    helperText,
    label,
    options,
    required,
    value,
    onChange,
  }: AutocompleteProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const [inputValue, setInputValue] = React.useState(value);

  let newHelperText = helperText;

  if (error) {
    newHelperText = errorHelperText;
  }

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   onChangeCallback(e);
  // };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <InputLabel
        htmlFor="AutoComplete"
        className={required ? 'required-field' : undefined}
      >
        {label}
      </InputLabel>
      <MuiAutocomplete
        size="small"
        options={options}
        getOptionLabel={(option) => option.label}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <div style={{ width: '300px' }}>
            <TextField
              {...params}
              label=""
              id={id}
              name={name}
              helperText={newHelperText}
              error={Boolean(error)}
              variant="outlined"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange ? onChange(e) : null
              }
            />
          </div>
        )}
      />
    </div>
  );
}

const Autocomplete = React.forwardRef(CustomAutocomplete);

export default Autocomplete;
