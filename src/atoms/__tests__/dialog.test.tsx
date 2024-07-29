import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Dialog from '../dialog';
import { Button } from '@mui/material';

describe('Dialog Component', () => {
  test('renders header correctly', () => {
    render(
      <Dialog open={true} onClose={() => {console.log('close')}} header="Dialog Header" content={<div>Dialog Content</div>} />
    );
    expect(screen.getByText('Dialog Header')).toBeInTheDocument();
  });

  test('renders content correctly', () => {
    render(
      <Dialog open={true} onClose={() => {console.log('close')}} content={<div>Dialog Content</div>} />
    );
    expect(screen.getByText('Dialog Content')).toBeInTheDocument();
  });

  test('renders footer when provided', () => {
    render(
      <Dialog
        open={true}
        onClose={() => {console.log('close')}}
        content={<div>Dialog Content</div>}
        footer={<Button>Close</Button>}
      />
    );
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  test('does not render footer when not provided', () => {
    render(
      <Dialog open={true} onClose={() => {console.log('close')}} content={<div>Dialog Content</div>} />
    );
    expect(screen.queryByText('Close')).not.toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <Dialog open={true} onClose={() => {console.log('close')}} content={<div>Dialog Content</div>} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
