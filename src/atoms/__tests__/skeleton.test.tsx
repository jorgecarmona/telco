import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skeleton from '../skeleton';

describe('Skeleton component', () => {
  it('renders without problems', () => {
    render(<Skeleton data-testid="skeleton"></Skeleton>);

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveClass('MuiSkeleton-root');
  });
});
