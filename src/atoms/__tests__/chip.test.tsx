import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Chip from '../../atoms/chip';

describe('Chip Component', () => {
  it('renders with default properties', () => {
    render(<Chip label="default" />);

    const chip = screen.getByText('default');
    expect(chip).toHaveClass('MuiChip-label');
  });

  it('calls onClick callback function when clicked', async () => {
    const handleClick = jest.fn();
    render(<Chip label="Clickable Chip" onClick={handleClick} />);

    const chip = screen.getByRole('button', {name: /Clickable Chip/i});
    await userEvent.click(chip);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with primary color and filled variant for pending type', () => {
    render(<Chip label="Pending Chip" type="pending" clickable />);

    const chip = screen.getByRole('button', {name: 'Pending Chip'});
    expect(chip).toHaveClass('MuiChip-filledPrimary');
  });

  it('renders with secondary color and filled variant for open type', () => {
    render(<Chip label="Open Chip" type="open" clickable />);

    const chip = screen.getByRole('button', {name: 'Open Chip'});
    expect(chip).toHaveClass('MuiChip-filledSecondary');
  });

  it('renders with primary color and outlined variant for rejected type', () => {
    render(<Chip label="Rejected Chip" type="rejected" clickable />);

    const chip = screen.getByRole('button', {name: 'Rejected Chip'});
    expect(chip).toHaveClass('MuiChip-outlinedPrimary');
  });

  it('renders with primary color and filled variant for approved type', () => {
    render(<Chip label="Approved Chip" type="approved" clickable />);

    const chip = screen.getByRole('button', {name: 'Approved Chip'});
    expect(chip).toHaveClass('MuiChip-filledPrimary');
  });

  it('renders with secondary color and filled variant for denied type', () => {
    render(<Chip label="Denied Chip" type="denied" clickable />);

    const chip = screen.getByRole('button', {name: 'Denied Chip'});
    expect(chip).toHaveClass('MuiChip-filledSecondary');
  });

  it('renders with primary color and outlined variant for enabled type', () => {
    render(<Chip label="Enabled Chip" type="enabled" clickable />);

    const chip = screen.getByRole('button', {name: 'Enabled Chip'});
    expect(chip).toHaveClass('MuiChip-outlinedPrimary');
  });

  it('renders with primary color and outlined variant for disabled type', () => {
    render(<Chip label="Disabled Chip" type="disabled" clickable />);

    const chip = screen.getByRole('button', {name: 'Disabled Chip'});
    expect(chip).toHaveClass('MuiChip-outlinedPrimary');
  });
});
