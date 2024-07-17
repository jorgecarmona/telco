import {render, screen} from '@testing-library/react';

import Password from '../../atoms/password';

import userEvent from '@testing-library/user-event';

describe('Password', () => {
  it('renders without crashing', () => {
    render(<Password label="Password" value="" onChangeCallback={() => {console.log('function is called')}} />);
  });
  it('renders type default', () => {
    render(
      <Password
        label="Password"
        value=""
        onChangeCallback={() => {console.log('function is called')}}
        helperText="ingresa tu contraseña"
        fullWidth
      />,
    );
    const Label = screen.getByText('Password');
    expect(Label).toBeInTheDocument();

    const HelperText = screen.getByText('ingresa tu contraseña');
    expect(HelperText).toBeInTheDocument();
  });
  it('renders password with error', () => {
    render(
      <Password
        label="Password"
        value=""
        onChangeCallback={() => {console.log('function is called')}}
        error
        errorHelperText="Usuario o contraseña incorrectas"
        fullWidth
      />,
    );
    const Label = screen.getByText('Password');
    expect(Label).toBeInTheDocument();

    const errorHelperText = screen.getByText(
      'Usuario o contraseña incorrectas',
    );
    expect(errorHelperText).toBeInTheDocument();
  });
  it('renders password with icon', async () => {
    render(
      <Password
        label="Password"
        value=""
        onChangeCallback={() => {console.log('function is called')}}
        helperText="ingresa tu contraseña"
        icon={true}
        fullWidth
      />,
    );
    const toggleButton = screen.getByLabelText('toggle password visibility');

    await userEvent.click(toggleButton);

    expect(toggleButton).toBeInTheDocument();
  });
  it('calls onChangeCallback when user enters password', async () => {
    const handlePasswordMock = jest.fn();
    const newPassword = 'hola';

    render(
      <Password
        label="Password"
        value=""
        onChangeCallback={handlePasswordMock}
      />,
    );

    const inputElement = screen.getByLabelText('Password');

    await userEvent.type(inputElement, newPassword);

    expect(handlePasswordMock).toHaveBeenCalledTimes(4);
  });
});
