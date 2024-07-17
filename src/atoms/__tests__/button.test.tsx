import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../../atoms/button';

import {ButtonType} from '../../atoms/button';
import {IconType} from '../../atoms/icon-store';

describe('Button Component', () => {
  it('renders with default properties', () => {
    render(<Button>Default Button</Button>);

    const button = screen.getByRole('button', {name: 'Default Button'});
    expect(button).toHaveClass('MuiButton-text');
  });

  it('calls callback function when clicked', () => {
    const callBack = jest.fn();

    render(<Button onClick={callBack}>Button Click</Button>);

    const button = screen.getByText('Button Click');
    userEvent.click(button);

    expect(callBack).toHaveBeenCalledTimes(1);
  });

  it('renders as primary contained button', () => {
    render(<Button buttonType={ButtonType.Primary}>Primary Button</Button>);

    const button = screen.getByRole('button', {name: 'Primary Button'});
    expect(button).toHaveClass('MuiButton-contained');
    expect(button).toHaveClass('MuiButton-containedPrimary');
  });

  it('renders as primary outlined button', () => {
    render(<Button buttonType={ButtonType.Outlined}>Outlined Button</Button>);

    const button = screen.getByRole('button', {name: 'Outlined Button'});
    expect(button).toHaveClass('MuiButton-outlined');
    expect(button).toHaveClass('MuiButton-outlinedPrimary');
  });

  it('renders as primary tertiary button', () => {
    render(
      <Button selected buttonType={ButtonType.Tertiary}>
        Tertiary Button
      </Button>,
    );

    const button = screen.getByRole('button', {name: 'Tertiary Button'});
    expect(button).toHaveClass('MuiButton-textPrimary');
    expect(button).toHaveClass('tertiary');
    expect(button).toHaveClass('selected');
  });

  it('renders with an icon', () => {
    render(<Button icon={IconType.Add}>Icon Button</Button>);

    expect(screen.getByTestId('AddOutlinedIcon')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole('button', {name: 'Disabled Button'});
    expect(button).toBeDisabled();
  });

  it('applies fullWidth style', () => {
    render(<Button fullWidth>Full Width Button</Button>);

    const button = screen.getByRole('button', {name: 'Full Width Button'});
    expect(button).toHaveStyle('width: 100%');
  });

  it('renders with selected class when selected', () => {
    render(<Button selected>Selected Button</Button>);
    const button = screen.getByRole('button', {name: 'Selected Button'});

    expect(button).toHaveClass('selected');
  });
});
