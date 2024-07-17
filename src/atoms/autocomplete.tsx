import React from 'react';
import {
  Autocomplete as MuiAutocomplete,
  InputLabel,
  TextField,
} from '@mui/material';

import './styles/app.css';

interface OptionType {
  label: string;
  value: string;
}
interface AutocompleteProps {
  error?: boolean;
  errorHelperText?: string;
  helperText?: string;
  label?: string;
  options: OptionType[];
  required?: boolean;
  value: string;
}
function Autocomplete({
  error,
  errorHelperText,
  helperText,
  label,
  options,
  required,
  value,
}: AutocompleteProps) {
  const [inputValue, setInputValue] = React.useState(value);
  let newHelperText = helperText;
  if (error) {
    newHelperText = errorHelperText;
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
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
          <div style={{width: '300px'}}>
            <TextField
              {...params}
              helperText={newHelperText}
              error={Boolean(error)}
              variant="outlined"
            />
          </div>
        )}
      />
    </div>
  );
}

export default Autocomplete;
