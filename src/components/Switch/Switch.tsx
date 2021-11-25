import React, { useEffect, useState } from 'react';
import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import { SwitchProps } from './interfaces';
import useStyles from './Switch.styles';

const DSSwitch: React.FC<SwitchProps> = ({
  onChange,
  value,
  disabled,
}: SwitchProps) => {
  const [switchTranslate] = useState(new Animated.Value(value ? 16 : 0));
  const styles = useStyles({ checked: value, disabled });
  useEffect(() => {
    if (value) {
      Animated.spring(switchTranslate, {
        toValue: 16,
        mass: 1,
        damping: 16,
        stiffness: 120,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
      }).start();
    } else {
      Animated.spring(switchTranslate, {
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
    onChange(!value);
  }, [value, onChange]);

  return (
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
  );
};

export default DSSwitch;
