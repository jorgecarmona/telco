import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Autocomplete } from '../../atoms';

describe('Autocomplete Component', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];

  test('renders correctly with required props', () => {
    render(
      <Autocomplete
        id="test-autocomplete"
        options={options}
        value="1"
        name="autocomplete"
        onChangeCallback={() => {
          console.log('hola');
        }}
      />,
    );
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toBeInTheDocument();
  });

  test('displays helper text', () => {
    render(
      <Autocomplete
        id="test-autocomplete"
        options={options}
        value="1"
        helperText="Helper Text"
        name="autocomplete"
        onChangeCallback={() => {
          console.log('hola');
        }}
      />,
    );
    const helperTextElement = screen.getByText('Helper Text');
    expect(helperTextElement).toBeInTheDocument();
  });

  test('displays error text when error is true', () => {
    render(
      <Autocomplete
        id="test-autocomplete"
        name="autocomplete"
        options={options}
        value="1"
        error={true}
        errorHelperText="Error Text"
        onChangeCallback={() => {
          console.log('hola');
        }}
      />,
    );
    const errorTextElement = screen.getByText('Error Text');
    expect(errorTextElement).toBeInTheDocument();
  });

  test('calls onChangeCallback when input value changes', async () => {
    const onChangeCallback = jest.fn();
    render(
      <Autocomplete
        id="test-autocomplete"
        options={options}
        value="1"
        name="autocomplete"
        onChangeCallback={onChangeCallback}
      />,
    );

    const inputElement = screen.getByRole('combobox');
    await userEvent.type(inputElement, 'Option 2');

    expect(onChangeCallback).toHaveBeenCalled();
  });

  test('displays required label correctly', () => {
    render(
      <Autocomplete
        id="test-autocomplete"
        options={options}
        value="1"
        label="Test Label"
        required
        name="autocomplete"
        onChangeCallback={() => {
          console.log('hola');
        }}
      />,
    );
    const requiredIndicator = screen.getByText(/test label/i);
    expect(requiredIndicator).toHaveClass('required-field');
  });

  test('renders with no options and no value', () => {
    render(
      <Autocomplete
        id="test-autocomplete"
        options={[]}
        value=""
        name="autocomplete"
        onChangeCallback={() => {
          console.log('hola');
        }}
      />,
    );
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveValue('');
    expect(inputElement).toBeInTheDocument();
  });
});
