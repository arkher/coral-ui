import React, { useEffect, useState } from 'react';
import { ColorValue, Pressable } from 'react-native';
import Animated, { interpolateColors, spring } from 'react-native-reanimated';
import { useTheme } from '@shopify/restyle';
import { SwitchProps } from './interfaces';
import useStyles from './Switch.styles';
import { Theme } from '../..';

const DSSwitch: React.FC<SwitchProps> = ({
  onPress,
  value,
  disabled,
}: SwitchProps) => {
  const theme = useTheme<Theme>();

  const [switchTranslate] = useState(new Animated.Value(0));
  const activeTrackColor = disabled
    ? theme.colors['neutral-light']
    : theme.colors['primary-base'];
  const inactiveTrackColor = theme.colors.white;
  const styles = useStyles({ checked: value, disabled });
  useEffect(() => {
    if (value) {
      spring(switchTranslate, {
        toValue: 16,
        mass: 1,
        damping: 16,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
    } else {
      spring(switchTranslate, {
        toValue: 0,
        mass: 1,
        damping: 16,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
    }
  }, [value, switchTranslate]);

  const memoizedOnSwitchPressCallback = React.useCallback(() => {
    onPress(!value);
  }, [value, onPress]);

  return (
    <Pressable onPress={memoizedOnSwitchPressCallback}>
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
  );
};

export default DSSwitch;
