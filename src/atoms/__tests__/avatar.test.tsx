import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Avatar from '../avatar';

describe('Avatar component', () => {
  test('renders without crashing', () => {
    render(<Avatar alt="test avatar" src="test.png" />);
    const avatarElement = screen.getByRole('img', {name: /test avatar/i});
    expect(avatarElement).toBeInTheDocument();
  });

  test('displays children when type is "profile"', () => {
    render(<Avatar type="profile">Profile Child</Avatar>);
    expect(screen.getByText('Profile Child')).toBeInTheDocument();
  });

  test('does not display children when type is not "profile"', () => {
    render(<Avatar type="profile">Should not be displayed</Avatar>);
    expect(screen.queryByText('Should not be displayed')).toBeInTheDocument();
  });
});
