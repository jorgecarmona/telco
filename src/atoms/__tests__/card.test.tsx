import {render, screen} from '@testing-library/react';
import Card from '../../atoms/card';
import '@testing-library/jest-dom/extend-expect';
describe('Card Component', () => {
  it('renders with default properties', () => {
    render(<Card content="Card with default properties"></Card>);

    const cardContent = screen
      .getByText('Card with default properties')
      .closest('.MuiCard-root');
    expect(cardContent).toHaveStyle('background-color: #ffffff');
    expect(cardContent).toHaveStyle('border-color: #eaecf0');
  });

  it('renders with light background color #FCFCFD', () => {
    render(
      <Card
        content="Card with light background color"
        bgColor="#FCFCFD"
        borderColor="#D0D5DD"
      ></Card>,
    );

    const cardContent = screen
      .getByText('Card with light background color')
      .closest('.MuiCard-root');
    expect(cardContent).toHaveStyle('background-color: #fcfcfd');
  });

  it('renders with dark background color #EAEFF6', () => {
    render(
      <Card
        content="Card with dark background color"
        bgColor="#EAEFF6"
        borderColor="#D4DFEF"
      ></Card>,
    );

    const cardContent = screen
      .getByText('Card with dark background color')
      .closest('.MuiCard-root');
    expect(cardContent).toHaveStyle('background-color: #eaeff6');
  });

  it('renders with string as header', () => {
    render(
      <Card
        header="Card with string as header"
        content="Card content"
        bgColor="#EAEFF6"
        borderColor="#D4DFEF"
      ></Card>,
    );

    const cardHeader = screen
      .getByText(/Card with string as header/i)
      .closest('.MuiCard-root');
    expect(cardHeader).toHaveTextContent(/card with string as header/i);
    expect(cardHeader).toHaveStyle('background-color: #eaeff6');
  });
});
