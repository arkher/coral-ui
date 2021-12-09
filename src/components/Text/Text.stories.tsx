import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Text from './Text';
import { StoriesView } from '../../stories/StorieView';

export default {
  title: 'Elements/Text',
  component: Text,
};

// eslint-disable-next-line arrow-body-style
export const BasicText = (): React.ReactNode => {
  return (
    <Text>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis rerum
      esse modi natus laborum dolorum quidem omnis alias autem! Beatae ut quo
      magnam rerum soluta labore laudantium? Quasi, molestias et!
    </Text>
  );
};

// Add all stories to RN/Expo storybook
storiesOf('Text-ds', module)
  .addDecorator(getStory => <StoriesView>{getStory()}</StoriesView>)
  .add('Default', () => (
    <>
      <Text mb="sm">Text / Paragraph </Text>

      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
        rerum esse modi natus laborum dolorum quidem omnis alias autem! Beatae
        ut quo magnam rerum soluta labore laudantium? Quasi, molestias et!
      </Text>
    </>
  ));
