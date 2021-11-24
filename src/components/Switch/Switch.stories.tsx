import React from 'react';
import { storiesOf } from '@storybook/react-native';
import DSSwitch from './Switch';

export default {
  title: 'Switch',
  component: DSSwitch,
};

// Stories
export const BasicSwitch = (): React.ReactNode => {
  let value = false;
  return (
    <DSSwitch
      value={value}
      onPress={() => {
        value = !value;
      }}
    />
  );
};

// Add all stories to RN/Expo storybook
storiesOf('Switch', module).add('Basic', BasicSwitch);
