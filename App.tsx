/* eslint-disable import/extensions */
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import Storybook from './.storybook-mobile';
import theme from './src/themes/default';

const App = () => (
  <ThemeProvider theme={theme}>
    <StatusBar />
    <Storybook />
  </ThemeProvider>
);

export default App;
