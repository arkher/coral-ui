/* eslint-disable camelcase */
import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import Box from '../Box';
import { CustomPressableProps } from './interfaces';
import useSyles from './Pressable.styles';

const CustomPressable: React.FC<CustomPressableProps> = ({
  children,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  onBlur,
  onFocus,
  delayLongPress,
  disabled,
  hitSlop,
  pressRetentionOffset,
  android_disableSound,
  android_ripple,
  testOnly_pressed,
  style,
  testID,
  ...props
}: CustomPressableProps) => {
  const styles = useSyles();

  const pressableProps = {
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
    onBlur,
    onFocus,
    delayLongPress,
    disabled,
    hitSlop,
    pressRetentionOffset,
    android_disableSound,
    android_ripple,
    testOnly_pressed,
  };

  return (
    <Pressable
      testID={testID || 'pressable'}
      style={({ pressed }) => [
        {
          elevation: pressed ? 1 : 3,
        },
        { ...(style as ViewStyle) },
        { ...styles.customStyle },
      ]}
      {...pressableProps}
    >
      <Box ml="xs" mr="xs" mb="nano" testID="pressable-box" {...props}>
        {children}
      </Box>
    </Pressable>
  );
};

export default CustomPressable;
