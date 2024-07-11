import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {fn} from '@storybook/test';

import {Button} from '../../atoms';

import {ButtonType} from '../../atoms/button';
import {IconType} from '../../atoms/icon-store';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    buttonType: {
      control: 'select', // Defines the type of control
      options: [
        'Default',
        ...Object.values(ButtonType).filter((type) => type !== ButtonType.Text),
      ], // Include an empty string or placeholder token
      description: 'Selects the button variant type',
      table: {
        defaultValue: {summary: 'default'},
      },
    },
    icon: {
      control: 'select', // Defines the type of control
      options: ['no icon', ...Object.values(IconType)], // Provide the values from the ButtonType enum
      description: 'Selects icon to display',
    },
  },
  args: {
    buttonType: ButtonType.Text,
    children: 'Default Text',
    disabled: false,
    fullWidth: false,
    // icon: 'no icon',
    onClick: fn(),
    selected: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryWithIcon: Story = {
  args: {
    buttonType: ButtonType.Primary,
    children: 'Primary button with icon',
    icon: IconType.Add,
    onClick: action('button was clicked') as any,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story uses `ButtonType.Primary` to style the button and `IconType.Add` to add a specific icon. Change the values from the controls to see different styles and icons.',
      },
    },
  },
};

export const PrimaryFullWidth: Story = {
  args: {
    buttonType: ButtonType.Primary,
    children: 'Primary Button',
    fullWidth: true,
    onClick: action('button clicked') as any,
  },
};

export const Secondary: Story = {
  args: {
    buttonType: ButtonType.Secondary,
    children: 'Secondary Button',
    onClick: action('button clicked') as any,
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    buttonType: ButtonType.Secondary,
    children: 'Secondary with icon',
    icon: IconType.Add,
    onClick: action('button clicked') as any,
  },
};

export const Outlined: Story = {
  args: {
    buttonType: ButtonType.Outlined,
    children: 'Outlined',
    onClick: action('button clicked') as any,
  },
};

export const TertiaryWithIcon: Story = {
  args: {
    buttonType: ButtonType.Tertiary,
    children: 'Tertiary with icon',
    icon: IconType.Add,
    onClick: action('button clicked') as any,
  },
};

export const DefaultSelected: Story = {
  args: {
    children: 'Default selected',
    selected: true,
    onClick: action('button clicked') as any,
  },
};

export const DefaultWithIcon: Story = {
  args: {
    children: 'Defaut with icon',
    icon: IconType.Library,
    onClick: action('button clicked') as any,
  },
};
