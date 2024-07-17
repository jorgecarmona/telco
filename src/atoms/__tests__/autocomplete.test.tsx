import {render, screen} from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import {Autocomplete} from '../../atoms';

describe('Autocomplete Component', () => {
  const options = [
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
  ];

  test('renders correctly with required props', () => {
    render(<Autocomplete options={options} value="1" />);

    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toBeInTheDocument();
  });

  test('displays helper text', () => {
    render(
      <Autocomplete
        options={options}
        value="1"
        helperText="Helper Text"
      />,
    );

    const helperTextElement = screen.getByText('Helper Text');
    expect(helperTextElement).toBeInTheDocument();
  });

  test('displays error text when error is true', () => {
    render(
      <Autocomplete
        options={options}
        value="1"
        error={true}
        errorHelperText="Error Text"
      />,
    );

    const errorTextElement = screen.getByText('Error Text');
    expect(errorTextElement).toBeInTheDocument();
  });

  test('changes input value', async () => {
    render(<Autocomplete options={options} value="1" />);

    const inputElement = screen.getByRole('combobox');
    await userEvent.type(inputElement, 'Option 2');
    expect(inputElement).toHaveValue('Option 2');
  });

  test('renders with no options and no value', () => {
    render(<Autocomplete options={[]} value="" />);
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveValue('');
    expect(inputElement).toBeInTheDocument();
  });
});
