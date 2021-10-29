/* eslint-disable react/jsx-boolean-value */
/* eslint-disable camelcase */
import React from 'react';
import { Text, StatusBar } from 'react-native';

import {
  useFonts,
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_600SemiBold,
  PublicSans_700Bold,
} from '@expo-google-fonts/public-sans';

import { ThemeProvider } from '@shopify/restyle';
import Storybook from './.storybook-mobile';
import theme from './src/themes/default';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    regular: PublicSans_400Regular,
    medium: PublicSans_500Medium,
    semibold: PublicSans_600SemiBold,
    bold: PublicSans_700Bold,
  });

  const themeWithFont = {
    ...theme,
    textVariants: {
      bold: {
        fontFamily: 'bold',
      },
      semibold: {
        fontFamily: 'semibold',
      },
      medium: {
        fontFamily: 'medium',
      },
      regular: {
        fontFamily: 'regular',
      },
    },
  };

  if (fontsLoaded) {
    return (
      <ThemeProvider theme={themeWithFont}>
        <StatusBar />
        <Storybook />
      </ThemeProvider>
    );
  }

  return <Text>Algum problema ocorreu no carregamento da fonte</Text>;
};

export default App;
