import React, { useState, useCallback, useRef } from 'react';
import { useTheme } from '@shopify/restyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Theme } from '../../themes/default';
import useStyles from './InputText.styles';

const InputText: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  const { colors } = useTheme<Theme>();

  const styles = useStyles({
    width: 360,
    isFocused,
    borderColorCustom: colors.neutralDark,
    borderColorFocused: colors.primaryBase,
  });

  const inputElementRef = useRef<any>();

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <SafeAreaView style={{ margin: 16 }}>
      <Text>Label</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          ref={inputElementRef}
          placeholder="Placeholder"
          placeholderTextColor={colors.neutralDark}
          keyboardType="default"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => {
            inputElementRef.current.clear();
          }}
          accessibilityLabel="Limpar caixa de texto"
        >
          <Icon
            style={styles.icon}
            name="close"
            size={16}
            color={isFocused ? colors.primaryBase : colors.neutralDark}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.sectionAuxText}>
        <Icon
          style={styles.iconAuxText}
          name="check-circle-outline"
          size={16}
          color={colors.neutralDarkest}
        />
        <Text style={styles.labelAuxText}>Assistive text</Text>
      </View>
    </SafeAreaView>
  );
};

export default InputText;
