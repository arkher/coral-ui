import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import theme from '../src/themes/default';

export const decorators = [
  story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>,
];

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
