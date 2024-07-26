import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TextField from '../text-field';

describe('TextField Component', () => {
  it('renders the label correctly', () => {
    render(
      <TextField
        label="Name"
        value=""
        onChangeTextField={() => {
          console.log('function is called');
        }}
        id="123"
        name="Text Field"
      />,
    );

    const labelElement = screen.getByText(/Name/i);
    expect(labelElement).toBeInTheDocument();
  });

  it('displays the required asterisk when required is true', () => {
    render(
      <TextField
        id="123"
        label="Email"
        name="Text Field"
        onChangeTextField={() => {
          console.log('function is called');
        }}
        required
        value=""
      />,
    );

    const requiredIndicator = screen.getByText(/email/i);
    expect(requiredIndicator).toHaveClass('required-field');
  });

  it('renders textfield with icon and helpertext', () => {
    render(
      <TextField
        id="123"
        icon={true}
        label="Email"
        name="Text Field"
        onChangeTextField={() => {
          console.log('function is called');
        }}
        value=""
      />,
    );
  });

  it('does not display the icon when icon is false', () => {
    render(
      <TextField
        id="123"
        icon={false}
        label="Email"
        name="Text Field"
        onChangeTextField={() => {
          console.log('function is called');
        }}
        value=""
      />,
    );

    const iconElement = screen.queryByRole('button');
    expect(iconElement).toBeNull();
  });

  it('displays helper text when provided', () => {
    render(
      <TextField
        id="123"
        helperText="This is a helper text"
        label="Email"
        name="Text Field"
        onChangeTextField={() => {
          console.log('function is called');
        }}
        value=""
      />,
    );

    const helperTextElement = screen.getByText(/This is a helper text/i);
    expect(helperTextElement).toBeInTheDocument();
  });

  it('calls onChangeTextField when user enters a letter', async () => {
    const handleTextFieldChangeMock = jest.fn();

    render(
      <TextField
        id="123"
        label="Name"
        name="Text Field"
        onChangeTextField={handleTextFieldChangeMock}
        value=""
      />,
    );

    const inputElement = screen.getByLabelText('Name');
    await userEvent.type(inputElement, 'newText');
    expect(handleTextFieldChangeMock).toHaveBeenCalledTimes(7);
  });
});
