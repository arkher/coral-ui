import React, { useEffect, useState } from 'react';
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import Box from '../Box';
import Text from '../Text/Text';
import { RadioButtonItemProps } from './interfaces';
import useStyles from './RadioButton.styles';

const RadioButtonItem: React.FC<RadioButtonItemProps> = ({
  value,
  label,
  required,
  disabled,
  selectedValue,
  setSelectedValue,
}) => {
  const [isMarked, setIsMarked] = useState(value === selectedValue);

  const styles = useStyles({
    checked: isMarked,
    disabled: !!disabled,
    required: !!required,
  });

  const toogle = () => setSelectedValue(value);

  useEffect(() => {
    setIsMarked(value === selectedValue);
  }, [selectedValue, value]);

  return (
    <Box flexDirection="row" alignItems="center" my="quark">
      <TouchableHighlight style={styles.radioButtonItem} onPress={toogle}>
        <Box />
      </TouchableHighlight>
      <TouchableWithoutFeedback onPress={toogle}>
        <Text ml="nano">{label}</Text>
      </TouchableWithoutFeedback>
    </Box>
  );
};

export default RadioButtonItem;
