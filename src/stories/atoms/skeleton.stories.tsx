import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Avatar, Skeleton, Typography } from '../../atoms';

import { Box } from '@mui/material';

const meta = {
  title: 'Global Components/Skeleton/All Stories',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    animation: {
      control: 'select',
      options: ['pulse', 'wave', false],
      description: '**The animation type of the skeleton.**',
      table: {
        category: 'Appearance',
        defaultValue: { summary: "'pulse'" },
      },
    },
    children: {
      control: 'text',
      table: {
        disable: true,
      },
    },
    height: {
      control: 'text',
      description: '**The height of the skeleton.**',
      table: {
        category: 'Dimensions',
        type: { summary: 'string | number' },
      },
    },
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular', 'rounded'],
      description: '**The type of content that will be rendered.**',
      table: {
        category: 'Appearance',
        defaultValue: { summary: "'text'" },
      },
    },
    width: {
      control: 'text',
      description: '**The width of the skeleton.**',
      table: {
        category: 'Dimensions',
        type: { summary: 'string | number' },
      },
    },
  },
  args: {
    height: 60,
    width: 60,
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const TextVariant: Story = {
  args: {
    children: <div style={{ width: '500px' }}></div>,
    variant: 'text',
    height: '2rem',
    width: '100%',
  },
};

export const CircularVariant: Story = {
  args: {
    children: <Avatar type="profile">.</Avatar>,
    variant: 'circular',
    animation: 'pulse',
  },
};

export const RectangularVariant: Story = {
  args: {
    children: <Typography variant="h2">.</Typography>,
    variant: 'rectangular',
    animation: 'wave',
  },
};

export const RoundedVariant: Story = {
  args: {
    children: <Typography variant="h2">.</Typography>,
    variant: 'rounded',
    animation: false,
  },
};

export const FullComponentSkeleton: Story = {
  render: ({ ...args }) => {
    const [showSkeleton, setShowSkeleton] = React.useState(true);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, 4000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <div
        style={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ margin: 1 }}>
            {showSkeleton ? (
              <Skeleton {...args} variant="circular">
                <Avatar src="" alt="" />
              </Skeleton>
            ) : (
              <Avatar
                height={60}
                width={60}
                alt="."
                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
              />
            )}
          </Box>
          <Box sx={{ width: '100%' }}>
            {showSkeleton ? (
              <Skeleton width="50%">
                <Typography variant="h5">.</Typography>
              </Skeleton>
            ) : (
              <Typography>Ted</Typography>
            )}
          </Box>
        </Box>
        {showSkeleton ? (
          <Skeleton {...args} variant="rectangular" width="100%" height="100%">
            <div style={{ paddingTop: '57%' }} />
          </Skeleton>
        ) : (
          <img
            src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
            alt=""
          />
        )}
      </div>
    );
  },
};
