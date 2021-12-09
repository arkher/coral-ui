import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoriesView } from '../StorieView';
import Text from '../../components/Text';

// Add all stories to RN/Expo storybook
storiesOf('Welcome', module)
  .addDecorator(getStory => <StoriesView>{getStory()}</StoriesView>)
  .add('Bem-vindo', () => (
    <>
      <Text fs="2xl" mb="sm">
        Bem-vindo!
      </Text>
    </>
  ));
