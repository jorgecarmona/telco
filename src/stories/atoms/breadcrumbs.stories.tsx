import type {Meta, StoryObj} from '@storybook/react';

import {action} from '@storybook/addon-actions';
import {fn} from '@storybook/test';

import BreadCrumbs from '../../atoms/breadcrumbs';

const meta = {
  title: 'Atoms/Breadcrumbs',
  component: BreadCrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    separator: '>',
    items: [
      {label: 'Home', path: '/'},
      {label: 'Employers', path: '/employers'},
      {label: 'Company', path: '/company'},
      {label: 'Settings', path: '/settings'},
      {label: 'My Page', path: '/mypage'},
    ],
    onClick: fn(),
  },
} satisfies Meta<typeof BreadCrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    separator: '>',
    items: [
      {label: 'Home', path: '/'},
      {label: 'Employers', path: '/employers'},
      {label: 'Company', path: '/company'},
      {label: 'Settings', path: '/settings'},
      {label: 'My Page', path: '/mypage'},
    ],
    onClick: action('breadcrumb was clicked') as any,
  },
  parameters: {
    docs: {
      description: {
        story: 'This story uses Default to style',
      },
    },
  },
};
