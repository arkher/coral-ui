import React from 'react';
import { storiesOf } from '@storybook/react-native';
import InputText from '../../src/components/InputText';
import CenterView from './CenterView';

export default {
  title: 'InputText',
  component: InputText,
};

// Stories
export const BasicInputText = () => <InputText />;

// Add all stories to RN/Expo storybook
storiesOf('InputText', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', BasicInputText);
