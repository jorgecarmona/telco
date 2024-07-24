import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
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

  it('renders a close button', () => {
    render(<Alert severity="success">Test success message</Alert>);
    
    const closeButton = screen.getByRole('button');
    expect(closeButton).toBeInTheDocument();
  });
  
  it('renders the correct title based on severity or title prop', () => {
    const { rerender } = render(<Alert severity="info" title="Custom Title">Test info message</Alert>);
    
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
    expect(screen.getByText('Test info message')).toBeInTheDocument();
  
    rerender(<Alert severity="error">Test error message</Alert>);
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.queryByText('Custom Title')).not.toBeInTheDocument();
  });

  it('calls the onClose callback when the alert is closed', () => {
    const onCloseMock = jest.fn();
    render(
      <Alert severity="info" title="Info" onClose={onCloseMock}>
        Test info message
      </Alert>,
    );
    const closeButton = screen.getByRole('button');
    userEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
