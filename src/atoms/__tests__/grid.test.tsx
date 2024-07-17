import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Grid from '../../atoms/grid';

describe('Grid component', () => {
  test('renders children correctly', () => {
    render(<Grid>Test Child</Grid>);
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  test('applies container prop correctly', () => {
    render(<Grid container data-testid="grid" />);
    const muiGrid = screen.getByTestId('grid');
    expect(muiGrid).toHaveClass('MuiGrid-container');
  });

  test('applies xs prop correctly when it is a number', () => {
    render(<Grid xs={6} data-testid="grid" />);
    const muiGrid = screen.getByTestId('grid');
    expect(muiGrid).toHaveClass('MuiGrid-grid-xs-6');
  });

  test('applies xs prop correctly when it is "auto"', () => {
    render(<Grid xs="auto" data-testid="grid" />);
    const muiGrid = screen.getByTestId('grid');
    expect(muiGrid).toHaveClass('MuiGrid-grid-xs-auto');
  });

  test('applies xs prop correctly when it is true', () => {
    render(<Grid xs data-testid="grid" />);
    const muiGrid = screen.getByTestId('grid');
    expect(muiGrid).toHaveClass('MuiGrid-grid-xs-true');
  });

  test('renders without crashing when no props are provided', () => {
    render(<Grid data-testid="grid" />);
    const muiGrid = screen.getByTestId('grid');
    expect(muiGrid).toBeInTheDocument();
  });
});
