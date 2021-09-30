import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, select, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Text from '../Text/Text';
import Button from './Button';
import buttonNotes from './notes/button-notes.md';
import loadingButtonNotes from './notes/loading-button-notes.md';

export default {
  title: 'Button',
  component: Button,
};

export const BasicButton = (): React.ReactNode => {
  const bg = select(
    `Background`,
    [
      'primary',
      'secondary',
      'purpleLight',
      'purplePrimary',
      'purpleDark',
      'greenLight',
      'greenPrimary',
      'greenDark',
      'black',
      'white',
    ],
    `primary`,
  );
  const width = number('width', 160, {
    min: 160,
    max: 480,
    range: true,
    step: 10,
  });
  return (
    <Button
      onPress={action('clicked')}
      bg={bg}
      width={width}
      alignItems="center"
      m="s"
    >
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  );
};

BasicButton.story = {
  parameters: {
    notes: { markdown: buttonNotes },
  },
};

export const ButtonLoading = (): React.ReactNode => {
  const bg = select(
    `Background`,
    [
      'primary',
      'secondary',
      'purpleLight',
      'purplePrimary',
      'purpleDark',
      'greenLight',
      'greenPrimary',
      'greenDark',
      'black',
      'white',
    ],
    `primary`,
  );
  const width = number('width', 160, {
    min: 160,
    max: 480,
    range: true,
    step: 10,
  });
  return (
    <Button
      onPress={action('loading')}
      loading
      bg={bg}
      width={width}
      alignItems="center"
      m="s"
    >
      <Text>Test</Text>
    </Button>
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
