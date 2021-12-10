import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Checkbox from '../../src/components/Checkbox';
import CenterView from './CenterView';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const BasicCheckbox = () => {
  return <Checkbox label="Label" value={true} onChange={() => undefined} />;
};

// Add all stories to RN/Expo storybook
storiesOf('Checkbox', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', BasicCheckbox);
