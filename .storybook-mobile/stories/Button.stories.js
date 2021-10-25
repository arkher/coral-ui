import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { View } from 'react-native';
import Button from '../../src/components/Button';
import Text from '../../src/components/Text';
import CenterView from './CenterView';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('Basic Button', () => (
    <View style={{ width: 360, marginTop: 8, marginLeft: 8 }}>
      <Button onPress={action('clicked')} bg="primaryBase">
        <Text>{text('Texto', 'Button text')}</Text>
      </Button>
    </View>
  ))
  .add('Com emoji', () => (
    <View style={{ width: 360, marginTop: 8, marginLeft: 8 }}>
      <Button onPress={action('clicked')} bg="primaryBase">
        <Text>😀 😎 👍 💯</Text>
      </Button>
    </View>
  ))
  .add('Com loading', () => (
    <View style={{ width: 360, marginTop: 8, marginLeft: 8 }}>
      <Button
        onPress={action('loading')}
        loading
        bg="primaryBase"
        alignItems="center"
      />
    </View>
  ));
