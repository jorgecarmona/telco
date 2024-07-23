import {render, screen} from '@testing-library/react';

import Password from '../../atoms/password';

import userEvent from '@testing-library/user-event';

describe('Password', () => {

  it('renders without crashing', () => {
    render(<Password 
      id="Password" 
      label="Password" 
      name="Password" 
      onChangeCallback={() => {console.log('function is called')}} 
      value="" 
      />
    );
  });

  it('renders type default', () => {
    render(
      <Password
        fullWidth
        helperText="ingresa tu contraseña"
        id="Password" 
        label="Password"
        name="Password"
        onChangeCallback={() => {console.log('function is called')}}
        value=""
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
        error 
        errorHelperText="Usuario o contraseña incorrectas"
        fullWidth
        id="Password" 
        label="Password"
        name="Password"
        onChangeCallback={() => {console.log('function is called')}}
        value=""
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
        fullWidth
        helperText="ingresa tu contraseña"
        icon={true}
        id="Password" 
        label="Password"
        name="Password"
        onChangeCallback={() => {console.log('function is called')}}
        value=""
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
        id="Password" 
        label="Password"
        name="Password"
        onChangeCallback={handlePasswordMock}
        value=""
      />,
    );

    const inputElement = screen.getByLabelText('Password');

    await userEvent.type(inputElement, newPassword);

    expect(handlePasswordMock).toHaveBeenCalledTimes(4);
  });
});