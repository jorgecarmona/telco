import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Alert from '../../atoms/alert';

afterEach(cleanup);

describe('Alert component', () => {
  it('renders the correct title and message for each alert type', () => {
    const alertTypes: Array<'error' | 'info' | 'success' | 'warning'> = [
      'error',
      'info',
      'success',
      'warning',
    ];

    alertTypes.forEach((severity) => {
      render(<Alert severity={severity}>Test {severity} message</Alert>);
      expect(
        screen.getByText(severity.charAt(0).toUpperCase() + severity.slice(1)),
      ).toBeInTheDocument();
      expect(screen.getByText(`Test ${severity} message`)).toBeInTheDocument();
      cleanup();
    });
  });

  it('closes the alert when the close button is clicked', () => {
    render(<Alert severity="error">Test error message</Alert>);

    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(screen.queryByText('Error')).not.toBeInTheDocument();
    expect(screen.queryByText('Test error message')).not.toBeInTheDocument();
  });

  it('calls the onClose callback when the alert is closed', () => {
    const onCloseMock = jest.fn();
    render(
      <Alert severity="info" onClose={onCloseMock}>
        Test info message
      </Alert>,
    );

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('does not render anything when open state is false', () => {
    const {rerender} = render(
      <Alert severity="success">Test success message</Alert>,
    );

    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(screen.getByText('Test success message')).toBeInTheDocument();

    rerender(<Alert severity="success">Test success message</Alert>);
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(screen.queryByText('Success')).not.toBeInTheDocument();
    expect(screen.queryByText('Test success message')).not.toBeInTheDocument();
  });
});
