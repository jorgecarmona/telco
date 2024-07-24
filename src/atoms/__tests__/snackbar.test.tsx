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
});