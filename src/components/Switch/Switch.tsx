import React, { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import Box from '../Box/Box';
import { CustomBoxProps } from '../Box/interface';
import { SwitchProps } from './interfaces';
import useStyles from './Switch.styles';

const DSSwitch: React.FC<SwitchProps & CustomBoxProps> = ({
  onChange,
  value,
  disabled,
  ...props
}: SwitchProps) => {
  const [switchTranslate] = useState(new Animated.Value(value ? 16 : 0));
  const styles = useStyles({ checked: value, disabled });
  useEffect(() => {
    if (value) {
      Animated.spring(switchTranslate, {
        toValue: 15,
        mass: 1,
        damping: 160,
        stiffness: 1000,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
    } else {
      Animated.spring(switchTranslate, {
        toValue: 0,
        mass: 1,
        damping: 160,
        stiffness: 1000,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
    }
  }, [value, switchTranslate]);

  const memoizedOnSwitchPressCallback = React.useCallback(() => {
    onChange(!value);
  }, [value, onChange]);

  return (
    <Box {...props}>
      <Pressable onPress={memoizedOnSwitchPressCallback} testID="ds-switch">
        <Animated.View style={styles.containerStyle}>
          <Animated.View
            style={[
              styles.circleStyle,
              {
                transform: [
                  {
                    translateX: switchTranslate,
                  },
                ],
              },
            ]}
          />
        </Animated.View>
      </Pressable>
    </Box>
  );
};

export default DSSwitch;
