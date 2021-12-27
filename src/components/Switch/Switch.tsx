import React, { useCallback, useRef, useState } from 'react';
import { Animated, Easing, TouchableWithoutFeedback } from 'react-native';
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
  const animation = useRef(new Animated.Value(value ? 1 : 0)).current;
  const [toggled, setToggled] = useState(value);

  const { basicStyles, dynamicStyles } = useStyles({ disabled });

  const animate = useCallback(() => {
    Animated.timing(animation, {
      duration: 200,
      toValue: +!value,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [animation, value]);

  return (
    <Box {...props}>
      <TouchableWithoutFeedback
        onPress={() => {
          setToggled(!toggled);
          animate();
          onChange();
        }}
        testID="ds-switch"
        disabled={disabled}
      >
        <Animated.View style={[dynamicStyles.container(animation)]}>
          <Animated.View
            style={[basicStyles.circle, dynamicStyles.circle(animation)]}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    </Box>
  );
};

export default DSSwitch;
