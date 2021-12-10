import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import themeInstitucional from '../src/themes/institucional';
import themeMaestro from '../src/themes/maestro';
import 'typeface-public-sans';
import 'typeface-inter';

export const globalTypes = {
  theme: {
    name: 'Tema',
    description: 'Temas fornecidos pelo Design System Mobile',
    defaultValue: 'institucional',
    toolbar: {
      icon: 'book',
      items: ['institucional', 'maestro'],
      showName: true,
    },
  },
};

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

export const decorators = [
  (story, context) => {
    const labelTheme = context.globals.theme;

    return (
      <ThemeProvider
        theme={labelTheme === 'maestro' ? themeMaestro : themeInstitucional}
      >
        {story()}
      </ThemeProvider>
    );
  },
];
