import {render, screen} from '@testing-library/react';
import {IconType} from '../../atoms/icon-store';

import Icon from '../../atoms/icon';

describe('Icon', () => {
  it('should render the larticle icon in the document', () => {
    render(<Icon name={IconType.Article} />);

    const iconElement = screen.getByTestId('name');
    expect(iconElement).toBeInTheDocument();
  });
  it('sets square shape when name is "delete"', () => {
    const props = {
      className: 'custom-class',
      style: {
        color: 'red',
      },
    };
    render(<Icon name={IconType.Delete} {...props} />);

    const iconElement = screen.getByTestId('name');
    expect(iconElement).not.toHaveStyle('borderRadius: 50%');
  });

  it('should render the help icon in the document', () => {
    render(<Icon name={IconType.Help} />);

    const iconElement = screen.getByTestId('name');
    expect(iconElement).toBeInTheDocument();
  });

  it('should render the live icon in the document', () => {
    render(<Icon name={IconType.Live} />);

    const iconElement = screen.getByTestId('name');
    expect(iconElement).toBeInTheDocument();
  });

  it('should render the library icon in the document', () => {
    render(<Icon name={IconType.Library} />);

    const iconElement = screen.getByTestId('name');
    expect(iconElement).toBeInTheDocument();
  });

  it('should not render a notification badge if hasNotifications is true', () => {
    render(<Icon name={IconType.Notifications} hasNotifications={true} />);

    const badgeElement = screen.queryByRole('status');
    expect(badgeElement).not.toBeInTheDocument();
  });

  it('should not render a notification badge if hasNotifications is false', () => {
    render(<Icon name={IconType.Notifications} hasNotifications={false} />);

    const badgeElement = screen.queryByRole('status');
    expect(badgeElement).not.toBeInTheDocument();
  });

  it('should render the work icon in the document', () => {
    render(<Icon name={IconType.Work} />);

    const iconElement = screen.getByTestId('name');

    expect(iconElement).toBeInTheDocument();
  });
});
