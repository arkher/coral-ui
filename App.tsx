/* eslint-disable camelcase */
import React from 'react';
import { StatusBar, Text } from 'react-native';

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
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_600SemiBold,
    PublicSans_700Bold,
  });

  const themeWithFont = {
    ...theme,
    textVariants: {
      bold: {
        fontFamily: 'PublicSans_700Bold',
      },
      semibold: {
        fontFamily: 'PublicSans_600SemiBold',
      },
      medium: {
        fontFamily: 'PublicSans_500Medium',
      },
      regular: {
        fontFamily: 'PublicSans_400Regular',
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
