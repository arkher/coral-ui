import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, select, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import Text from '../Text/Text';
import Button from './Button';
import buttonNotes from './notes/button-notes.md';
import loadingButtonNotes from './notes/loading-button-notes.md';
import { colors } from '../../themes/default';

export default {
  title: 'Button',
  component: Button,
};

export const BasicButton = (): React.ReactNode => {
  const bg = select(`Background`, colors, 'primaryBase');

  const width = number('width', 160, {
    min: 160,
    max: 480,
    range: true,
    step: 10,
  });

  return (
    <View style={{ width, marginTop: 8, marginLeft: 8 }}>
      <Button onPress={action('clicked')} bg={bg}>
        <Text>{text('Button text', 'Hello Button')}</Text>
      </Button>
    </View>
  );
};

BasicButton.story = {
  parameters: {
    notes: { markdown: buttonNotes },
  },
};

export const ButtonLoading = (): React.ReactNode => {
  const bg = select(`Background`, colors, 'primaryBase');
  const width = number('width', 160, {
    min: 160,
    max: 480,
    range: true,
    step: 10,
  });
  return (
    <View style={{ width, marginTop: 8, marginLeft: 8 }}>
      <Button onPress={action('loading')} loading bg={bg} alignItems="center" />
    </View>
  );
};

ButtonLoading.story = {
  parameters: {
    notes: { markdown: loadingButtonNotes },
  },
};

storiesOf('Button', module)
  .add('Basic button', BasicButton)
  .add('Loading', ButtonLoading);