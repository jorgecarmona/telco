import React from 'react';

import {ThemeProvider} from '@mui/material/styles';
import telcoTheme from './theme';

// Function to apply the theme to all stories
const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={telcoTheme}>
    <Story {...context} />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};
