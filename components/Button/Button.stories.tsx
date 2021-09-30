import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Text from '../Text/Text';
import Button from './Button';
import buttonNotes from './notes/button-notes.md';
import loadingButtonNotes from './notes/loading-button-notes.md';

export default {
  title: 'Button',
  component: Button,
};

export const BasicButton = (): React.ReactNode => (
  <Button
    onPress={action('clicked')}
    bg="primary"
    width={160}
    alignItems="center"
    m="s"
  >
    <Text>{text('Button text', 'Hello Button')}</Text>
  </Button>
);

BasicButton.story = {
  parameters: {
    notes: { markdown: buttonNotes },
  },
};

export const ButtonLoading = (): React.ReactNode => (
  <Button
    onPress={action('loading')}
    loading
    bg="primary"
    width={160}
    alignItems="center"
    m="s"
  >
    <Text>Test</Text>
  </Button>
);

ButtonLoading.story = {
  parameters: {
    notes: { markdown: loadingButtonNotes },
  },
};

storiesOf('Button', module)
  .add('Basic button', BasicButton)
  .add('Loading', ButtonLoading);
