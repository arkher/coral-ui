import React from 'react';
import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Box from '../Box';
import Text from '../Text';
import useStyles from './Checkbox.styles';
import { CheckboxProps } from './interfaces';

const Checkbox: React.FC<CheckboxProps> = (props: CheckboxProps) => {
  const { label, onChange, value, disabled, required } = props;

  const styles = useStyles({
    checked: value,
    disabled: !!disabled,
    required: !!required,
  });

  const handleChange = () => {
    if (onChange) {
      onChange();
    }
  };

  return (
    <Box flexDirection="row" alignItems="center">
      <TouchableHighlight
        style={styles.checkBox}
        onPress={handleChange}
        disabled={disabled}
        testID="checkbox"
      >
        {value ? <Icon name="check" size={16} color="#fff" /> : <Box />}
      </TouchableHighlight>

      <Text
        fs="xxxs"
        color={disabled ? 'neutral-base' : 'neutral-darkest'}
        ml={{ phone: 'nano', tablet: 'nano' }}
        testID="checkbox-label"
      >
        {label}
      </Text>
    </Box>
  );
};

export default Checkbox;
