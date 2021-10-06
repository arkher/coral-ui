import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
};

// Stories
export const BasicText = (): React.ReactNode => <Text m="sm">Olá mundo!</Text>;

// Add all stories to RN/Expo storybook
storiesOf('Text', module).add('Basic', BasicText);
