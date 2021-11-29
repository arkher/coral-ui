import React from 'react';
import { storiesOf } from '@storybook/react-native';
import RadioButton from './RadioButton';

export default {
  title: 'RadioButton',
  component: RadioButton,
};

// Stories
export const BasicRadioButton = (): React.ReactNode => (
  <RadioButton label="label" options={[]}>
    Olá mundo!
  </RadioButton>
);

// Add all stories to RN/Expo storybook
storiesOf('RadioButton', module).add('Basic', BasicRadioButton);
