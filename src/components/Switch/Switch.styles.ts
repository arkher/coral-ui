import { useTheme } from '@shopify/restyle';
import { StyleSheet } from 'react-native';
import { Theme } from '../..';

type UseStyleProps = {
  checked: boolean;
  disabled?: boolean;
};
const useStyles = ({ checked, disabled }: UseStyleProps) => {
  const theme = useTheme<Theme>();
  let borderColor = theme.colors['neutral-base'];
  let circleColor = theme.colors['neutral-dark'];
  let backgroundColor = theme.colors.white;

  if (!checked) {
    borderColor = theme.colors['neutral-base'];
    circleColor = theme.colors['neutral-dark'];
    backgroundColor = theme.colors.white;
    if (disabled) {
      borderColor = theme.colors['neutral-light'];
      circleColor = theme.colors['neutral-light'];
    }
  } else {
    circleColor = theme.colors.white;
    backgroundColor = theme.colors['primary-base'];
    if (disabled) {
      backgroundColor = theme.colors['neutral-light'];
    }
  }
  return StyleSheet.create({
    circleStyle: {
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: circleColor,
    },
    containerStyle: {
      width: 40,
      height: 24,
      padding: theme.spacing.quark,
      borderRadius: 25,
      borderWidth: checked ? 0 : 2,
      borderColor,
      backgroundColor,
      justifyContent: 'center',
    },
    shadowValue: {
      shadowColor: theme.colors.black,
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
  });
};

export default useStyles;
