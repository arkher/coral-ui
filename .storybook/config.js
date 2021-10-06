import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from '@shopify/restyle';
import theme from '../src/themes/default';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
addDecorator(withKnobs);
addDecorator(withNotes);

configure(
  require.context('../src/components', true, /\.stories\.[tj]sx$/),
  module,
);
