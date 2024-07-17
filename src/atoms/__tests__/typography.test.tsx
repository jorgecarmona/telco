import {render, screen} from '@testing-library/react';

import {Typography} from '../../atoms';

describe('Typography Component', () => {
  it('renders with component with default variant', () => {
    render(<Typography>Typography with default variant</Typography>);

    const typography = screen.getByText(/typography with default variant/i);
    expect(typography).toHaveClass('MuiTypography-body1');
  });

  it('renders with `h1` variant', () => {
    render(<Typography variant="h1">Typography with 'h1' variant</Typography>);

    const typography = screen.getByText(/typography with 'h1' variant/i);
    expect(typography).toHaveClass('MuiTypography-h1');
  });

  it('renders with `h2` variant', () => {
    render(<Typography variant="h2">Typography with 'h2' variant</Typography>);

    const typography = screen.getByText(/typography with 'h2' variant/i);
    expect(typography).toHaveClass('MuiTypography-h2');
  });

  it('renders with `h3` variant', () => {
    render(<Typography variant="h3">Typography with 'h3' variant</Typography>);

    const typography = screen.getByText(/typography with 'h3' variant/i);
    expect(typography).toHaveClass('MuiTypography-h3');
  });

  it('renders with `h4` variant', () => {
    render(<Typography variant="h4">Typography with 'h4' variant</Typography>);

    const typography = screen.getByText(/typography with 'h4' variant/i);
    expect(typography).toHaveClass('MuiTypography-h4');
  });

  it('renders with `h5` variant', () => {
    render(<Typography variant="h5">Typography with 'h5' variant</Typography>);

    const typography = screen.getByText(/typography with 'h5' variant/i);
    expect(typography).toHaveClass('MuiTypography-h5');
  });

  it('renders with `h6` variant', () => {
    render(<Typography variant="h6">Typography with 'h6' variant</Typography>);

    const typography = screen.getByText(/typography with 'h6' variant/i);
    expect(typography).toHaveClass('MuiTypography-h6');
  });

  it('renders with `body1` variant', () => {
    render(
      <Typography variant="body1">Typography with 'body1' variant</Typography>,
    );

    const typography = screen.getByText(/typography with 'body1' variant/i);
    expect(typography).toHaveClass('MuiTypography-body1');
  });
});
