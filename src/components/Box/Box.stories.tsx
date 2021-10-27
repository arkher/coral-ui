/* eslint-disable arrow-body-style */
import React from 'react';
import { View } from 'react-native';
import { colors, radius, opacities, shadows } from '../../themes/default';
import Box from './Box';

export default {
  title: 'Elements/Box',
  component: Box,
  argTypes: {
    bg: {
      options: colors,
      control: { type: 'select' },
    },
    borderRadius: {
      options: radius,
      control: { type: 'select' },
    },
    opacity: {
      options: opacities,
      control: { type: 'select' },
    },
    shadow: {
      options: shadows,
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
  bg: CustomColors;
  borderRadius: CustomRadius;
  opacity: CustomOpacity;
  shadow: CustomShadow;
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
        bg={bg || 'primaryBase'}
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
