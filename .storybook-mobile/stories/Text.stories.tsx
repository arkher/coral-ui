import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Text from '../../src/components/Text';
import CenterView from './CenterView';
// import { fontSizes, letterSpacings, lineHeights } from '../../themes/default';

export default {
  title: 'Text',
  component: Text,
};

// Stories
// eslint-disable-next-line arrow-body-style
export const BasicText = () => {
  return (
    <Text m="sm">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis rerum
      esse modi natus laborum dolorum quidem omnis alias autem! Beatae ut quo
      magnam rerum soluta labore laudantium? Quasi, molestias et!
    </Text>
  );
};

// Add all stories to RN/Expo storybook
storiesOf('Text', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', BasicText);
