/* eslint-disable arrow-body-style */
import React from 'react';
import { View } from 'react-native';
import { COLORS, RADIUS, OPACITIES, SHADOWS } from '../../themes/tokens';
import Box from './Box';

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
  bg: Custom.Colors;
  br: Custom.Radius;
  opacity: Custom.Opacity;
  shadow: Custom.Shadow;
  width: number;
  height: number;
}

export const Default = ({
  bg,
  br,
  opacity,
  shadow,
  width,
  height,
}: BoxProps): React.ReactNode => {
  return (
    <View style={{ margin: 8 }}>
      <Box
        bg={bg || 'primary-base'}
        br={br}
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
