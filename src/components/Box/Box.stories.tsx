/* eslint-disable arrow-body-style */
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { StoriesView } from '../../stories/StorieView';
import { COLORS, RADIUS, OPACITIES, SHADOWS } from '../../themes/tokens';
import Box from './Box';
import Text from '../Text';

export default {
  title: 'Elements/Box',
  component: Box,
  argTypes: {
    bg: {
      options: COLORS,
      control: { type: 'select' },
    },
    borderRadius: {
      options: RADIUS,
      control: { type: 'select' },
    },
    opacity: {
      options: OPACITIES,
      control: { type: 'select' },
    },
    shadow: {
      options: SHADOWS,
      control: { type: 'select' },
    },
    width: {
      control: { type: 'range', min: 100, max: 500, step: 100 },
    },
    height: {
      control: { type: 'range', min: 100, max: 500, step: 100 },
    },
  },
};

interface BoxProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bg: any;
  borderRadius: Custom.Radius;
  opacity: Custom.Opacity;
  shadow: Custom.Shadow;
  width: number;
  height: number;
}

export const Default = ({
  bg,
  borderRadius,
  opacity,
  shadow,
  width,
  height,
}: BoxProps): React.ReactNode => {
  return (
    <View style={{ margin: 8 }}>
      <Box
        bg={bg || 'primary-base'}
        borderRadius={borderRadius}
        op={opacity}
        sof={shadow}
        sr={shadow}
        sop={shadow}
        width={width || 100}
        height={height || 50}
      />
    </View>
  );
};

// Add all stories to RN/Expo storybook
storiesOf('Box-ds', module)
  .addDecorator(getStory => <StoriesView>{getStory()}</StoriesView>)
  .add('Default', () => (
    <>
      <Text mb="sm">Box / Paragraph </Text>

      <Box bg="primary-base" borderRadius="nano" width={100} height={50} />
    </>
  ));
