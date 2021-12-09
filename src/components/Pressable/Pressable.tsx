import React from 'react';
import { Pressable, ViewStyle } from 'react-native';
import Box from '../Box';
import { CustomPressableProps } from './interfaces';
import useSyles from './Pressable.styles';

const CustomPressable: React.FC<CustomPressableProps> = ({
  children,
  boxProps,
  style,
  testID,
  ...props
}: CustomPressableProps) => {
  const styles = useSyles();
  return (
    <Box ml="xs" mr="xs" mb="nano" testID="pressable-box" {...boxProps}>
      <Pressable
        testID={testID || 'pressable'}
        style={({ pressed }) => [
          {
            elevation: pressed ? 1 : 3,
          },
          { ...(style as ViewStyle) },
          { ...styles.customStyle },
        ]}
        {...props}
      >
        {children}
      </Pressable>
    </Box>
  );
};

export default CustomPressable;
