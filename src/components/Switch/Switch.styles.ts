import { useTheme } from '@shopify/restyle';
import { StyleSheet, ViewStyle } from 'react-native';
import { borderWidthValues, Theme } from '../../themes';

type UseStyleProps = {
  checked: boolean;
  disabled?: boolean;
};

interface Styles {
  circleStyle: ViewStyle;
  containerStyle: ViewStyle;
}

const useStyles = ({
  checked,
  disabled,
}: UseStyleProps): StyleSheet.NamedStyles<Styles> => {
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
  return StyleSheet.create<Styles>({
    circleStyle: {
      width: 16,
      height: 16,
      borderRadius: theme.borderRadii.circular,
      backgroundColor: circleColor,
    },
    containerStyle: {
      width: 40,
      height: 24,
      padding: theme.spacing.quark,
      borderRadius: 25,
      borderWidth: checked ? borderWidthValues.none : borderWidthValues.sm,
      borderColor,
      backgroundColor,
      justifyContent: 'center',
    },
  });
};

export default useStyles;
