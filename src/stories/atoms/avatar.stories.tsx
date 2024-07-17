import type {Meta, StoryObj} from '@storybook/react';
import {Avatar} from '../../atoms';

import avatarGroup from '../../assets/images/avatar-group.svg';
import avatarFamily from '../../assets/images/avatar-family.svg';
import avatarFather from '../../assets/images/avatar-father.svg';
import avatarFriends from '../../assets/images/avatar-friends.svg';

const imageOptions = {
  'Avatar Group': avatarGroup,
  'Avatar Family': avatarFamily,
  'Avatar Father': avatarFather,
  'Avatar Friends': avatarFriends,
};

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    alt: {
      control: 'text',
      description: 'Alternative text for the avatar image',
    },
    src: {
      control: 'radio',
      options: Object.keys(imageOptions),
      mapping: imageOptions,
      if: {arg: 'type', neq: 'profile'},
    },
    type: {control: 'radio', options: ['profile', 'avatar']},
    children: {
      control: 'text',
      description:
        'Content inside the profile avatar, only applicable for type "profile"',
      if: {arg: 'type', eq: 'profile'},
    },
    width: {control: 'number'},
    height: {control: 'number'},
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultAvatar: Story = {
  args: {
    alt: 'Default Avatar',
    src: avatarGroup,
    width: 400,
    height: 400,
  },
};

export const AvatarFriends: Story = {
  args: {
    alt: 'Avatar Friends',
    src: avatarFriends,
    width: 651,
    height: 407,
  },
};

export const AvatarGroup: Story = {
  args: {
    alt: 'Avatar Group',
    src: avatarGroup,
    width: 612,
    height: 347,
  },
};

export const AvatarFamily: Story = {
  args: {
    alt: 'Avatar Family',
    src: avatarFamily,
    width: 592,
    height: 422,
  },
};

export const AvatarFather: Story = {
  args: {
    alt: 'Avatar Father',
    src: avatarFather,
    width: 476,
    height: 476,
  },
};
