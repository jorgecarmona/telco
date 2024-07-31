import { render, screen } from '@testing-library/react';
import Skeleton from '../skeleton';

describe('Skeleton component', () => {
  it('renders without problems', () => {
    render(<Skeleton data-testid="skeleton"></Skeleton>);

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('MuiSkeleton-root');
  });

  it('renders with animation prop', () => {
    render(<Skeleton data-testid="skeleton" animation="wave"></Skeleton>);

    const waveAnimation = screen.getByTestId('skeleton');
    expect(waveAnimation).toHaveClass('MuiSkeleton-wave');
  });

  it('renders with component prop', () => {
    render(<Skeleton data-testid="skeleton" component="div"></Skeleton>);

    const divComponent = screen.getByTestId('skeleton');
    expect(divComponent).toBeInTheDocument();
  });
});
