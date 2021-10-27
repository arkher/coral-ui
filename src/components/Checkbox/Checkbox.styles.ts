import { useTheme } from '@shopify/restyle';
import { StyleSheet } from 'react-native';
import { Theme } from '../..';

interface Props {
  checked: boolean;
  disabled: boolean;
  required: boolean;
}

const useStyles = ({ checked, disabled, required }: Props) => {
  const theme = useTheme<Theme>();

  let borderColor;
  if (disabled) borderColor = theme.colors.neutralLight;
  else if (required) borderColor = theme.colors.feedbackErrorBase;
  else borderColor = theme.colors.neutralBase;

  let bg;
  if (disabled) bg = theme.colors.neutralLight;
  else if (checked) bg = theme.colors.feedbackInfoBase;
  else bg = theme.colors.white;

  return StyleSheet.create({
    checkBox: {
      width: '100%',
      height: '100%',
      borderWidth: checked ? 0 : 2,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: bg,
      borderColor,
    },
  });
};

export default useStyles;
