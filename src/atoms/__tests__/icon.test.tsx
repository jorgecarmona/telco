import { render, screen } from '@testing-library/react';
import { IconType } from '../../atoms/icon-store';

import Icon from '../../atoms/icon';

describe('Icon', () => {
  it('should render the article icon in the document', () => {
    render(<Icon name={IconType.Article} />);

    const iconElement = screen.getByTestId('name');
    expect(iconElement).toBeInTheDocument();
  });

  it('sets square shape when name is "delete"', () => {
    render(<Icon name={IconType.Delete} />);

    const iconElement = screen.getByTestId('name');
    expect(iconElement).toHaveStyle('borderRadius: 20%');
  });

  it('sets custom color and background color', () => {
    render(<Icon name={IconType.Article} customColor="red" bgColor="blue" />);

    const iconElement = screen.getByTestId('name');
    expect(iconElement).toHaveStyle('color: red');
    expect(iconElement).toHaveStyle('backgroundColor: blue');
  });

  it('sets circle shape when shape is "circle"', () => {
    render(<Icon name={IconType.Article} shape="circle" />);

    const iconElement = screen.getByTestId('name');
    expect(iconElement).toHaveStyle('borderRadius: 50%');
  });

  it('should not render a notification badge if hasNotifications is false', () => {
    render(<Icon name={IconType.Article} hasNotifications={false} />);

    const badgeElement = screen.queryByRole('status');
    expect(badgeElement).not.toBeInTheDocument();
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

  it('should render the work icon in the document', () => {
    render(<Icon name={IconType.Work} />);

    const iconElement = screen.getByTestId('name');
    expect(iconElement).toBeInTheDocument();
  });

  it('should render an icon with a custom class', () => {
    render(<Icon name={IconType.Article} className="custom-class" />);

    const iconElement = screen.getByTestId('name');
    expect(iconElement).toHaveClass('custom-class');
  });

  it('should render an icon with custom styles', () => {
    render(<Icon name={IconType.Article} style={{ fontSize: '32px' }} />);

    const iconElement = screen.getByTestId('name');
    expect(iconElement).toHaveStyle('fontSize: 32px');
  });

  it('should warn if the icon does not exist in iconLookup', () => {
    console.warn = jest.fn();
    render(<Icon name={'nonExistentIcon' as IconType} />);

    expect(console.warn).toHaveBeenCalledWith(
      'Icon with name "nonExistentIcon" does not exist in iconLookup',
    );
  });
});
