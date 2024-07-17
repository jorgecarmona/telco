import {Meta, StoryObj} from '@storybook/react';
import {Icon} from '../../atoms';
import {IconType} from '../../atoms/icon-store';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'select',
      options: [...Object.values(IconType)],
    },
    shape: {
      control: {
        type: 'select',
        options: ['circle', 'square', 'none'],
      },
    },
  },
  args: {
    hasNotifications: false,
  },
} as Meta<typeof Icon>;

export const Help: StoryObj<typeof Icon> = {
  args: {
    name: IconType.Help,
  },
};

export const Notifications: StoryObj<typeof Icon> = {
  args: {
    name: IconType.Notifications,
    hasNotifications: true,
  },
};

export const Delete: StoryObj<typeof Icon> = {
  args: {
    name: IconType.Delete,
  },
};

export const Work: StoryObj<typeof Icon> = {
  args: {
    name: IconType.Work,
  },
};

export const Article: StoryObj<typeof Icon> = {
  args: {
    name: IconType.Article,
  },
};

export const Live: StoryObj<typeof Icon> = {
  args: {
    name: IconType.Live,
  },
};

export const Library: StoryObj<typeof Icon> = {
  args: {
    name: IconType.Library,
  },
};
