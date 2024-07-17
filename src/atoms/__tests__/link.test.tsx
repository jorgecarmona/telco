import {render, screen} from '@testing-library/react';

import Link from '../../atoms/link';

describe('Link Component Unit Test', () => {
  it('should render the Link with primary style and no underline', () => {
    render(<Link>Terms & Conditions</Link>);
    const linkElement = screen.getByText('Terms & Conditions');
    expect(linkElement).toBeInTheDocument();
  });

  it('should render the secondary Link with additional text', () => {
    render(<Link underline="hover">Sign up</Link>);
    const linkElement = screen.getByText('Sign up');
    expect(linkElement).toBeInTheDocument();
  });
});
