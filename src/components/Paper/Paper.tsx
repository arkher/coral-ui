/* eslint-disable camelcase */
import { createRestyleComponent, useTheme } from '@shopify/restyle';
import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import {
  borderRadius,
  borderWidth,
  heightComponent,
  opacity,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  Theme,
} from '../../themes';
import Box from '../Box';
import { CustomPaperProps } from './interfaces';
import useStyles from './Paper.styles';

const CustomPaper: React.FC<CustomPaperProps> = ({
  children,
  style,
  testID,
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
  px,
  py,
  p,
  padding,
  pb,
  paddingBottom,
  pl,
  paddingLeft,
  pr,
  paddingRight,
  pt,
  paddingTop,
  height,
  width,
  flexDirection,
  justifyContent,
  alignItems,
  ...props
}: CustomPaperProps) => {
  const styles = useStyles();
  const { spacing } = useTheme<Theme>();
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
    flexDirection,
    justifyContent,
    alignItems,
  };

  return (
    <Box
      bg="white"
      minHeight="auto"
      minWidth="auto"
      br="md"
      overflow="scroll"
      testID="pressable-box"
      {...props}
    >
      <Pressable
        testID={testID || 'pressable'}
        style={({ pressed }) => [
          {
            elevation: pressed ? 1 : 3,
          },
          { ...(styles.customStyle as ViewStyle) },
          {
            padding:
              spacing[
                (padding || p) as 'quark' | 'nano' | 'xs' | 'sm' | 'md' | 'lg'
              ],
            paddingTop:
              spacing[
                (paddingTop || pt || py) as
                  | 'quark'
                  | 'nano'
                  | 'xs'
                  | 'sm'
                  | 'md'
                  | 'lg'
              ],
            paddingBottom:
              spacing[
                (paddingBottom || pb || py) as
                  | 'quark'
                  | 'nano'
                  | 'xs'
                  | 'sm'
                  | 'md'
                  | 'lg'
              ],
            paddingRight:
              spacing[
                (paddingRight || pr || px) as
                  | 'quark'
                  | 'nano'
                  | 'xs'
                  | 'sm'
                  | 'md'
                  | 'lg'
              ],
            paddingLeft:
              spacing[
                (paddingLeft || pl || px) as
                  | 'quark'
                  | 'nano'
                  | 'xs'
                  | 'sm'
                  | 'md'
                  | 'lg'
              ],
            flexDirection: flexDirection as
              | 'row'
              | 'column'
              | 'row-reverse'
              | 'column-reverse',
            justifyContent: justifyContent as 'center',
            alignItems: alignItems as 'center',
            height: height as number,
            width: width as number,
          },
          { ...(style as ViewStyle) },
        ]}
        {...pressableProps}
      >
        {children}
      </Pressable>
    </Box>
  );
};

export default createRestyleComponent<CustomPaperProps, Theme>(
  [
    borderRadius,
    borderWidth,
    opacity,
    shadowOffset,
    shadowRadius,
    shadowOpacity,
    heightComponent,
  ],
  CustomPaper,
);
