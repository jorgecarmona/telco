import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Alert from '../alert';

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
      render(<Alert open={true} severity={severity}>{`Test ${severity} message`}</Alert>);
      const expectedTitle = severity.charAt(0).toUpperCase() + severity.slice(1);
      expect(screen.getByText(expectedTitle)).toBeInTheDocument();
      expect(screen.getByText(`Test ${severity} message`)).toBeInTheDocument();
      cleanup();
    });
  });

  it('does not render anything when open state is false', () => {
    render(<Alert open={false} severity="error">Test error message</Alert>);
    expect(screen.queryByTestId('mui-alert')).not.toBeInTheDocument();
  });

  it('calls the onClose callback when the alert is closed', () => {
    const onCloseMock = jest.fn();
    render(
      <Alert open={true} severity="info" onClose={onCloseMock}>
        Test info message
      </Alert>,
    );
    const closeButton = screen.getByRole('button');
    userEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('calls the onClose callback when the alert is closed', () => {
    const onCloseMock = jest.fn();
    render(
      <Alert open={true} severity="info" onClose={onCloseMock}>
        Test info message
      </Alert>,
    );
    const closeButton = screen.getByRole('button');
    userEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('returns empty string for an unexpected severity', () => {
    render(<Alert open={true} severity={'invalidSeverity' as any}>Test invalid severity message</Alert>);

    expect(screen.queryByText('Error')).not.toBeInTheDocument();
    expect(screen.queryByText('Info')).not.toBeInTheDocument();
    expect(screen.queryByText('Success')).not.toBeInTheDocument();
    expect(screen.queryByText('Warning')).not.toBeInTheDocument();
    expect(screen.getByText('Test invalid severity message')).toBeInTheDocument();
  });
});
