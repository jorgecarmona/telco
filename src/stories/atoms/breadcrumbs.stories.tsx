import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import BreadCrumbs from '../../atoms/breadcrumbs';

const meta = {
  title: 'Global Components/Breadcrumbs/All Stories',
  component: BreadCrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    separator: { control: 'text' },
    items: { control: 'object' },
    onClick: { action: 'clicked' },
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
    ],
    onClick: action('breadcrumb was clicked') as any,
  },
  parameters: {
    docs: {
      description: {
        story: 'This story is showing a simple path',
      },
    },
  },
};

export const MultipleItems: Story = {
  args: {
    separator: '>',
    items: [
      { label: 'Home', path: '/' },
      { label: 'Employers', path: '/employers' },
      { label: 'Company', path: '/employers/company' },
      { label: 'Employee', path: '/employers/company/employee' },
      { label: 'Data', path: '/employers/company/employee/data' },
    ],
    onClick: action('breadcrumb was clicked') as any,
  },
  parameters: {
    docs: {
      description: {
        story: 'This story uses multiple items',
      },
    },
  },
};