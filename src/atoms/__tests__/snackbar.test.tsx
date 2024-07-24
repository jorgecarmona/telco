import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Snackbar from '../snackbar';

describe('Snackbar Component', () => {
    it('renders Snackbar with default props', () => {
        render(<Snackbar message="Test message" open={true} transient={true} duration={3000} />);

        expect(screen.getByText('Test message')).toBeInTheDocument();
    });

    it('renders Snackbar with alert type', () => {
        render(<Snackbar message="Alert message" open={true} type="alert" severity="success" transient={true} duration={3000} />);

        expect(screen.getByText('Alert message')).toBeInTheDocument();
    });

    it('renders Snackbar with close button and handles click', async () => {
        const onClose = jest.fn();
        render(<Snackbar message="Closable Snackbar" open={true} onClose={onClose} transient={true} duration={3000} />);

        expect(screen.getByText('Closable Snackbar')).toBeInTheDocument();
        const closeButton = screen.getByText('Close');
        await userEvent.click(closeButton);

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('does not render Snackbar when open is false', () => {
        render(<Snackbar message="Invisible Snackbar" open={false} transient={true} duration={3000} />);

        expect(screen.queryByText('Invisible Snackbar')).toBeNull();
    });

    it('renders Snackbar with autoHideDuration when transient is true', () => {
        render(<Snackbar message="Transient Snackbar" open={true} transient={true} duration={5000} />);

        expect(screen.getByText('Transient Snackbar')).toBeInTheDocument();
    });

    it('does not set autoHideDuration when transient is false', () => {
        render(<Snackbar message="Non-transient Snackbar" open={true} transient={false} />);

        expect(screen.getByText('Non-transient Snackbar')).toBeInTheDocument();
    });

    it('handles close event when reason is not "clickaway"', async () => {
        const onClose = jest.fn();
        render(<Snackbar message="Closable Snackbar" open={true} onClose={onClose} transient={true} duration={3000} />);
        const closeButton = screen.getByText('Close');
        await userEvent.click(closeButton);
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when reason is "clickaway"', () => {
        const onClose = jest.fn();
        render(<Snackbar message="Non-clickaway Snackbar" open={true} onClose={onClose} transient={true} duration={3000} />);
        const event = new MouseEvent('click', { bubbles: true, cancelable: true });
        Object.defineProperty(event, 'reason', { value: 'clickaway' });
        screen.getByText('Non-clickaway Snackbar').dispatchEvent(event);
        expect(onClose).not.toHaveBeenCalled();
    });

    it('handles close event when onClose is not provided', async () => {
        render(<Snackbar message="No onClose Snackbar" open={true} transient={true} duration={3000} />);
        const closeButton = screen.getByText('Close');
        await userEvent.click(closeButton);
        expect(screen.getByText('No onClose Snackbar')).toBeInTheDocument();
    });
});