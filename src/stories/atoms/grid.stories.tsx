import React from 'react';
import {Meta, StoryObj} from '@storybook/react';

import {styled} from '@mui/material/styles';
import {Box, Paper} from '@mui/material';

import {Grid} from '../../atoms';

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const meta = {
  title: 'Atoms/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    spacing: 2,
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultGrid: Story = {
  args: {
    children: (
      <Grid container xs={12}>
        <Grid xs={6}>
          <Paper>Hello</Paper>
        </Grid>
        <Grid xs={6}>
          <Paper>Hello 2</Paper>
        </Grid>
      </Grid>
    ),
  },
};

export const BasicGrid: Story = {
  args: {
    children: (
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={4}>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    ),
  },
};
