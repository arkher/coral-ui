import { useTheme } from '@shopify/restyle';
import { StyleSheet } from 'react-native';
import { Theme } from '../../themes';

interface Props {
  checked: boolean;
  disabled: boolean;
  required: boolean;
}

const useStyles = ({ checked, disabled, required }: Props) => {
  const theme = useTheme<Theme>();

  let borderColor;
  if (disabled) borderColor = theme.colors['neutral-light'];
  else if (checked) borderColor = theme.colors['primary-base'];
  else if (required) borderColor = theme.colors['feedback-error-base'];
  else borderColor = theme.colors['neutral-base'];

  let bg;
  if (disabled) bg = theme.colors['neutral-light'];
  // else if (checked) bg = theme.colors['feedback-info-base'];
  else bg = theme.colors.white;

  return StyleSheet.create({
    radioButtonItem: {
      width: 24,
      height: 24,
      borderWidth: checked ? 5 : 2,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: bg,
      borderColor,
    },
  });
};

export default useStyles;
