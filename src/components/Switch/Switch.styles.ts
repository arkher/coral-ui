import { useTheme } from '@shopify/restyle';
import { Animated, ViewStyle } from 'react-native';
import { borderWidthValues, Theme } from '../../themes';

type UseStyleProps = {
  disabled?: boolean;
};

interface Styles {
  dynamicStyles: {
    container(anim: Animated.Value): ViewStyle;
    circle(anim: Animated.Value): ViewStyle;
  };
  basicStyles: {
    circle: ViewStyle;
  };
}

const useStyles = ({ disabled }: UseStyleProps): Styles => {
  const theme = useTheme<Theme>();

  const dynamicStyles = {
    container: (anim: Animated.Value): ViewStyle => ({
      alignItems: 'center',
      backgroundColor: disabled
        ? theme.colors['neutral-light']
        : (anim.interpolate({
            inputRange: [0, 1],
            outputRange: [theme.colors.white, theme.colors['primary-base']],
          }) as unknown as string),
      borderRadius: 25,
      height: 24,
      width: 40,
      justifyContent: 'center',
      borderWidth: disabled
        ? borderWidthValues.none
        : (anim.interpolate({
            inputRange: [0, 1],
            outputRange: [borderWidthValues.sm, 0],
          }) as unknown as number),
      borderColor: disabled
        ? theme.colors['neutral-base']
        : theme.colors['neutral-dark'],
    }),
    circle: (anim: Animated.Value): ViewStyle => ({
      transform: [
        {
          translateX: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [-8, 8],
          }) as unknown as number,
        },
      ],
      backgroundColor: disabled
        ? theme.colors['neutral-base']
        : (anim.interpolate({
            inputRange: [0, 1],
            outputRange: [theme.colors['neutral-dark'], theme.colors.white],
          }) as unknown as string),
    }),
  };

  const basicStyles = {
    circle: {
      width: 16,
      height: 16,
      backgroundColor: 'red',
      borderRadius: 8,
    },
  };
  return {
    dynamicStyles,
    basicStyles,
  };
};

export default useStyles;
