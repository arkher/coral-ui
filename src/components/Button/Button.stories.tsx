/* eslint-disable arrow-body-style */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';
import { View } from 'react-native';
import Text from '../Text/Text';
import Button from './Button';
import { colors } from '../../themes/default';

export default {
  title: 'Componente/Button',
  component: Button,
  argTypes: {
    bg: {
      options: colors,
      control: { type: 'select' },
    },
  },
  decorators: [withDesign],
};

const urlHandoff =
  'https://www.figma.com/file/3raVfIADTUZCzFOOaQ9PMQ/HANDOFF-%7C-Core-Components-Mobile-%7C-Institucional?node-id=203%3A1636';

export const Primary = ({ bg }: any): React.ReactNode => {
  return (
    <View style={{ width: 360, marginTop: 8, marginLeft: 8 }}>
      <Button onPress={action('clicked')} bg={bg || 'primaryBase'}>
        <Text>Button text</Text>
      </Button>
    </View>
  );
};

Primary.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

export const Secondary = (): React.ReactNode => {
  return (
    <View style={{ width: 360, marginTop: 8, marginLeft: 8 }}>
      <Button
        bg="neutralLightest"
        borderColor="primaryBase"
        bw="hairline"
        onPress={action('clicked')}
      >
        <Text color="primaryBase">Button text</Text>
      </Button>
    </View>
  );
};

Secondary.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

export const Tertiary = (): React.ReactNode => {
  return (
    <View style={{ width: 360, marginTop: 8, marginLeft: 8 }}>
      <Button bg="neutralLightest" onPress={action('clicked')}>
        <Text color="primaryBase">Button text</Text>
      </Button>
    </View>
  );
};

Tertiary.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

export const ButtonLoading = (): React.ReactNode => {
  return (
    <View style={{ width: 360, marginTop: 8, marginLeft: 8 }}>
      <Button
        onPress={action('loading')}
        loading
        bg="primaryBase"
        alignItems="center"
      />
    </View>
  );
};
