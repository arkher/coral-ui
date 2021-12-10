import React from 'react';
import { storiesOf } from '@storybook/react-native';
import TextField from '../../src/components/TextField';
import CenterView from './CenterView';

export default {
  title: 'TextField',
  component: TextField,
};

export const BasicTextField = () => (
  <TextField variant="small" label="Label" assistiveText="Assistive text" />
);

// Add all stories to RN/Expo storybook
storiesOf('TextField', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', BasicTextField);
