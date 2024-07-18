import { render, screen } from '@testing-library/react';
import { IconType } from '../../atoms/icon-store';
import Icon from '../../atoms/icon';

describe('Icon', () => {
  it('should render the article icon in the document', () => {
    render(<Icon name={IconType.Article} />);
    const iconElement = screen.getByTestId(IconType.Article);
    expect(iconElement).toBeInTheDocument();
  });

  it('sets square shape when name is "delete"', () => {
    render(<Icon name={IconType.Delete} />);
    const iconElement = screen.getByTestId(IconType.Delete);
    expect(iconElement).not.toHaveStyle('borderRadius: 50%');
    expect(iconElement).toHaveStyle('borderRadius: 20%');
  });

  it('should render the help icon in the document', () => {
    render(<Icon name={IconType.Help} />);
    const iconElement = screen.getByTestId(IconType.Help);
    expect(iconElement).toBeInTheDocument();
  });

  it('should render the live icon in the document', () => {
    render(<Icon name={IconType.Live} />);
    const iconElement = screen.getByTestId(IconType.Live);
    expect(iconElement).toBeInTheDocument();
  });

  it('should render the library icon in the document', () => {
    render(<Icon name={IconType.Library} />);
    const iconElement = screen.getByTestId(IconType.Library);
    expect(iconElement).toBeInTheDocument();
  });

  it('should render a notification badge if hasNotifications is true', () => {
    render(<Icon name={IconType.Notifications} hasNotifications={true} />);
    const badgeElement = screen.getByText((content, element) =>
      element!.classList.contains('MuiBadge-dot'),
    );
    expect(badgeElement).toBeInTheDocument();
  });

  it('should not render a notification badge if hasNotifications is false', () => {
    render(<Icon name={IconType.Notifications} hasNotifications={false} />);
    const badgeElement = screen.queryByText((content, element) =>
      element!.classList.contains('MuiBadge-dot'),
    );
    expect(badgeElement).not.toBeInTheDocument();
  });

  it('should apply custom styles correctly', () => {
    const props = {
      className: 'custom-class',
      style: { color: 'red' },
    };
    render(<Icon name={IconType.Help} {...props} />);
    const iconElement = screen.getByTestId(IconType.Help);
    expect(iconElement).toHaveStyle('color: red');
    expect(iconElement).toHaveClass('custom-class');
  });

  it('should apply custom background color', () => {
    render(<Icon name={IconType.Library} bgColor="blue" />);
    const iconElement = screen.getByTestId(IconType.Library);
    expect(iconElement).toHaveStyle('backgroundColor: blue');
  });

  it('should render the icon with custom color', () => {
    render(<Icon name={IconType.Work} customColor="green" />);
    const iconElement = screen.getByTestId(IconType.Work);
    expect(iconElement).toHaveStyle('color: green');
  });

  it('should render the work icon in the document', () => {
    render(<Icon name={IconType.Work} />);
    const iconElement = screen.getByTestId(IconType.Work);
    expect(iconElement).toBeInTheDocument();
  });

  it('should not render if icon name is invalid', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();
    render(<Icon name={'invalid-icon' as IconType} />);
    expect(consoleSpy).toHaveBeenCalledWith(
      'Icon with name "invalid-icon" does not exist in iconLookup',
    );
    expect(screen.queryByTestId('invalid-icon')).not.toBeInTheDocument();
    consoleSpy.mockRestore();
  });
});
