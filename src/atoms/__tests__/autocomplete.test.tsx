import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { Autocomplete } from '../../atoms';

describe('Autocomplete Component', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];

  test('renders correctly with required props', () => {
    render(<Autocomplete id='test-autocomplete' options={options} value="1" name='autocomplete'/>);
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toBeInTheDocument();
  });

  test('displays helper text', () => {
    render(
      <Autocomplete id='test-autocomplete' options={options} value="1" helperText="Helper Text" name='autocomplete'/>,
    );

    const helperTextElement = screen.getByText('Helper Text');
    expect(helperTextElement).toBeInTheDocument();
  });
  test('displays error text when error is true', () => {
    render(
      <Autocomplete
        id='test-autocomplete'
        name='autocomplete'
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
    render(<Autocomplete id='test-autocomplete' options={options} value="1"  name='autocomplete'/>);
    const inputElement = screen.getByRole('combobox');
    await userEvent.type(inputElement, 'Option 2');
    expect(inputElement).toHaveValue('Option 2');
  });

  test('displays required label correctly', () => {
    render(
      <Autocomplete id='test-autocomplete' options={options} value="1" label="Test Label" required name='autocomplete'/>,
    );

    const requiredIndicator = screen.getByText(/test label/i);
    expect(requiredIndicator).toHaveClass('required-field');
  });

  test('renders with no options and no value', () => {
    render(<Autocomplete id='test-autocomplete' options={[]} value="" name='autocomplete'/>);
    const inputElement = screen.getByRole('combobox');
    expect(inputElement).toHaveValue('');
    expect(inputElement).toBeInTheDocument();
  });
});








// import { render, screen } from '@testing-library/react';

// import userEvent from '@testing-library/user-event';

// import { Autocomplete } from '../../atoms';

// describe('Autocomplete Component', () => {
//   const options = [
//     { label: 'Option 1', value: '1' },
//     { label: 'Option 2', value: '2' },
//   ];

//   test('renders correctly with required props', () => {
//     render(<Autocomplete id="test-autocomplete" options={options} value="1" />);

//     const inputElement = screen.getByRole('combobox');
//     expect(inputElement).toBeInTheDocument();
//   });

//   test('displays helper text', () => {
//     render(
//       <Autocomplete
//         id="test-autocomplete"
//         options={options}
//         value="1"
//         helperText="Helper Text"
//       />
//     );

//     const helperTextElement = screen.getByText('Helper Text');
//     expect(helperTextElement).toBeInTheDocument();
//   });

//   test('displays error text when error is true', () => {
//     render(
//       <Autocomplete
//         id="test-autocomplete"
//         options={options}
//         value="1"
//         error={true}
//         errorHelperText="Error Text"
//       />
//     );

//     const errorTextElement = screen.getByText('Error Text');
//     expect(errorTextElement).toBeInTheDocument();
//   });

//   test('changes input value', async () => {
//     render(<Autocomplete id="test-autocomplete" options={options} value="1" />);

//     const inputElement = screen.getByRole('combobox');
//     await userEvent.type(inputElement, 'Option 2');
//     expect(inputElement).toHaveValue('Option 2');
//   });

//   test('displays required label correctly', () => {
//     render(
//       <Autocomplete
//         id="test-autocomplete"
//         options={options}
//         value="1"
//         label="Test Label"
//         required={true}
//       />
//     );
  
//     const labelElement = screen.getByLabelText('Test Label *');
//     expect(labelElement).toHaveAttribute('for', 'test-autocomplete');
//     const requiredIndicator = screen.getByText('*', { selector: 'span[style*="color: red;"]' });
//     expect(requiredIndicator).toBeInTheDocument();
//   });  
// });