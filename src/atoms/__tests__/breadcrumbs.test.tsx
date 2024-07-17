import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import BreadCrumbs from '../../atoms/breadcrumbs';

const mockItems = [
  {label: 'Home', path: '/'},
  {label: 'Employers', path: '/employers'},
  {label: 'Company', path: '/company'},
  {label: 'Data', path: '/data'},
];

describe('BreadCrumbs Component', () => {
  it('renders breadcrumb elements with correct text and href attributes', () => {
    render(<BreadCrumbs separator=">" items={mockItems} />);
    mockItems.slice(0, -1).forEach((item) => {
      // Check all items except the last one
      const linkElement = screen.getByText(item.label);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.getAttribute('href')).toBe(item.path);
    });
  });

  it('renders without crashing', () => {
    const {container} = render(<BreadCrumbs items={mockItems} />);
    expect(container).toBeInTheDocument();
  });

  it('renders the correct number of breadcrumbs', () => {
    render(<BreadCrumbs items={mockItems} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mockItems.length - 1);
    const lastItem = screen.getByText('Employers');
    expect(lastItem).toBeInTheDocument();
  });

  it('renders correct breadcrumb labels', () => {
    render(<BreadCrumbs items={mockItems} />);
    mockItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it('last breadcrumb item is not clickable', () => {
    render(<BreadCrumbs items={mockItems} />);
    const lastItem = screen.getByText('Data');
    expect(lastItem).toHaveStyle('pointer-events: none');
    expect(lastItem).toHaveStyle('cursor: default');
  });

  it('renders item with no path', () => {
    const itemsWithNoPath = [{label: 'Home'}, {label: 'About', path: '/about'}];
    render(<BreadCrumbs separator=">" items={itemsWithNoPath} />);
    const linkElementWithoutPath = screen.getByText('Home');
    expect(linkElementWithoutPath).toBeInTheDocument();
    expect(linkElementWithoutPath.getAttribute('href')).toBe('#');
  });

  it('renders without items', () => {
    const {container} = render(<BreadCrumbs separator=">" items={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders custom separator correctly', () => {
    const separator = '>';
    render(<BreadCrumbs separator={separator} items={mockItems} />);
    const breadcrumbsContainer = screen.getByTestId('breadcrumbs-container');
    expect(breadcrumbsContainer.textContent).toContain(separator);
  });


  it('prevents navigation on last breadcrumb click', () => {
    const handleClick = jest.fn();
    render(<BreadCrumbs items={mockItems} onClick={handleClick} />);
    const nonLastItems = mockItems.slice(0, -1).map(item => screen.getByText(item.label));
    nonLastItems.forEach(item => {
      userEvent.click(item);
    });
    const lastItem = screen.getByText('Data');
    expect(lastItem).toHaveStyle('pointer-events: none');
    expect(handleClick).toHaveBeenCalledTimes(nonLastItems.length);
  });
});
