import { useTheme } from '@shopify/restyle';
import { ViewStyle, StyleSheet } from 'react-native';
import { shadowOffsetValues, shadowRadiusValues, Theme } from '../../themes';

interface Styles {
  customStyle: ViewStyle;
}

const useStyles = (): StyleSheet.NamedStyles<Styles> => {
  const { colors, borderRadii } = useTheme<Theme>();
  return StyleSheet.create({
    customStyle: {
      shadowOffset: shadowOffsetValues.lg,
      shadowColor: '#a9a9b8',
      shadowRadius: shadowRadiusValues.sm,
      shadowOpacity: 0.3,
      backgroundColor: colors.white,
      minHeight: 'auto',
      minWidth: 'auto',
      padding: 0,
      borderRadius: borderRadii.md,
      width: '100%',
    },
  });
};

export default useStyles;
