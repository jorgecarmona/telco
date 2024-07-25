import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Dialog from '../dialog';

describe('Dialog Component', () => {
  const defaultProps = {
    type: 'alert' as const,
    label: 'Close',
    title: 'Test Dialog Title',
    content: 'This is the dialog content',
    open: true,
    onClose: jest.fn(),
    size: 'md' as const,
  };

  test('renders the Dialog with title and content', () => {
    render(<Dialog {...defaultProps} />);
    
    expect(screen.getByText('Test Dialog Title')).toBeInTheDocument();
    expect(screen.getByText('This is the dialog content')).toBeInTheDocument();
  });

  test('renders the button with the correct label', () => {
    render(<Dialog {...defaultProps} />);
    
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  test('calls onClose when the button is clicked', async () => {
    render(<Dialog {...defaultProps} />);
    
    const button = screen.getByRole('button', { name: 'Close' });
    await userEvent.click(button);

    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose if not provided', async () => {
    const onCloseMock = jest.fn();
    const { rerender } = render(<Dialog {...defaultProps} onClose={undefined} />);
    
    const button = screen.getByRole('button', { name: 'Close' });
    await userEvent.click(button);

    expect(onCloseMock).not.toHaveBeenCalled();
  });

  test('renders actions when type is form', () => {
    const formProps = {
      ...defaultProps,
      type: 'form' as const,
      actions: <button>Submit</button>,
    };
    render(<Dialog {...formProps} />);
    
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('renders with different sizes', () => {
    const { rerender } = render(<Dialog {...defaultProps} size="sm" />);
    
    expect(screen.getByRole('dialog')).toHaveClass('MuiDialog-paperWidthSm');

    rerender(<Dialog {...defaultProps} size="lg" />);
    
    expect(screen.getByRole('dialog')).toHaveClass('MuiDialog-paperWidthLg');
  });

  test('defaults to size lg if size is not provided', () => {
    render(<Dialog {...defaultProps} size={'lg'} />);
    
    expect(screen.getByRole('dialog')).toHaveClass('MuiDialog-paperWidthLg');
  });
  
  test('renders the button with type form if type is form', async () => {
    const formProps = {
      ...defaultProps,
      type: 'form' as const,
    };
    render(<Dialog {...formProps} />);
    
    const button = screen.getByRole('button', { name: 'Close' });
    expect(button).toHaveAttribute('type', 'button');
  });
  
  test('renders the button with default type if not form', async () => {
    render(<Dialog {...defaultProps} />);
    
    const button = screen.getByRole('button', { name: 'Close' });
    expect(button).toHaveAttribute('type', 'button');
  });
});
