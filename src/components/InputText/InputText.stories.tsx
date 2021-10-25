import React from 'react';
import { storiesOf } from '@storybook/react-native';
import InputText from './InputText';

export default {
  title: 'Componente/InputText',
  component: InputText,
};

// Stories
export const BasicInputText = (): React.ReactNode => <InputText />;

// Add all stories to RN/Expo storybook
storiesOf('InputText', module).add('Basic', BasicInputText);
