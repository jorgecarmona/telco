import type {Meta, StoryObj} from '@storybook/react';

import {Typography} from '../../atoms';

const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['body1', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      Mapping: {
        body1: 'body1',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
      },
      description: 'Selects the variant',
      table: {
        defaultValue: {summary: 'default'},
      },
    },
    // children: {
    //   control: "text",
    //   description: "Content for the typography"
    // }
  },
  args: {
    children: 'Default Text',
    variant: 'body1',
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultValues: Story = {
  args: {
    variant: 'body1',
    children: 'Typography with default variant',
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story uses variant `body1` to style the text in the Typography. Change the values from the controls to see different styles',
      },
    },
  },
};

export const H1Variant: Story = {
  args: {
    variant: 'h1',
    children: 'Typography with variant `h1`',
  },
};

export const H2Variant: Story = {
  args: {
    variant: 'h2',
    children: 'Typography with variant `h2`',
  },
};

export const H3Variant: Story = {
  args: {
    variant: 'h3',
    children: 'Typography with variant `h3`',
  },
};

export const H4Variant: Story = {
  args: {
    variant: 'h4',
    children: 'Typography with variant `h4`',
  },
};

export const H5Variant: Story = {
  args: {
    variant: 'h5',
    children: 'Typography with variant `h5`',
  },
};

export const H6Variant: Story = {
  args: {
    variant: 'h6',
    children: 'Typography with variant `h6`',
  },
};

export const Body1Variant: Story = {
  args: {
    variant: 'body1',
    children: 'Typography with variant `body1`',
  },
};
