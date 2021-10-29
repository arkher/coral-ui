import React from 'react';
import { storiesOf } from '@storybook/react-native';
import TextArea from '../../src/components/TextArea';
import CenterView from './CenterView';

export default {
  title: 'TextArea',
  component: TextArea,
};

export const BasicTextArea = () => (
  <TextArea variant="small" label="Label" maxLength={400} />
);

// Add all stories to RN/Expo storybook
storiesOf('TextArea', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', BasicTextArea);
