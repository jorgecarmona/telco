import type {Meta, StoryObj} from '@storybook/react';
import {Card} from '../../atoms';
import {iconLookup} from '../../atoms/icon-store';
import {CardHeader, IconButton} from '@mui/material';

const meta = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bgColor: {
      control: 'color',
      description: 'Selects background color',
    },
    borderColor: {
      control: 'color',
      description: 'Selects border color',
    },
    header: {
      control: 'text',
      description: 'Header text',
    },
    content: {
      control: 'text',
      description: 'Card content',
    },
    footer: {
      control: 'text',
      description: 'Card footer',
    },
  },
  args: {
    bgColor: '#FFFFFF',
    borderColor: '#EAECF0',
    header: 'Card Header',
    content: 'Card Content',
    footer: 'Card Footer',
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardWithHeaderTitle: Story = {
  args: {
    bgColor: '#FFFFFF',
    borderColor: '#EAECF0',
    header: 'Card Header',
    content: (
      <>
        <h4>Card Content Goes Here.</h4>
      </>
    ),
    footer: 'Card Footer',
  },
  parameters: {
    docs: {
      Description: {
        story:
          'This story display a card styled with the background color `#FFFFFF`, and the border color `#EAECF0`. Change the values from the controls to see different styles.',
      },
    },
  },
};

export const CardWithDefaultBgColor: Story = {
  args: {
    bgColor: '#FFFFFF',
    borderColor: '#D4DFEF',
    header: (
      <>
        <CardHeader
          avatar={<iconLookup.business />}
          action={
            <IconButton>
              <iconLookup.add />
            </IconButton>
          }
          title="Card with default background color"
        />
      </>
    ),
    content: 'Card Content',
    footer: 'Card Footer',
  },
};

export const CardWithLightBgColor: Story = {
  args: {
    bgColor: '#FCFCFD',
    borderColor: '#D4DFEF',
    header: (
      <>
        <CardHeader
          avatar={<iconLookup.business />}
          action={
            <IconButton>
              <iconLookup.add />
            </IconButton>
          }
          title="Card with light background color"
        />
      </>
    ),
    content: 'Card Content',
    footer: 'Card Footer',
  },
};

export const CardWithDarkBgColor: Story = {
  args: {
    bgColor: '#EAEFF6',
    borderColor: '#D4DFEF',
    header: (
      <>
        <CardHeader
          avatar={<iconLookup.business />}
          action={
            <IconButton>
              <iconLookup.add />
            </IconButton>
          }
          title="Card with dark background color"
        />
      </>
    ),
    content: 'Card Content',
    footer: 'Card Footer',
  },
};
