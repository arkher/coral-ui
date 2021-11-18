import { createRestyleComponent, spacing, useTheme } from '@shopify/restyle';
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { TextInput, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { borderWidth, Theme } from '../../themes/default';
import Box from '../Box';
import { InputProps, InputRef } from './interfaces';

const Input: React.FC<InputProps> = (
  {
    placeholder,
    variant,
    editable,
    multiline,
    numberOfLines,
    icon,
    maxLength,
    keyboardType,
    autoCapitalize,
    style,
    ...props
  },
  ref,
) => {
  const { colors, textVariants } = useTheme<Theme>();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);

  const [colorStatus, setColorStatus] =
    useState<keyof Theme['colors']>('neutralDark');

  const inputElementRef = useRef<InputRef>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
    setColorStatus('primaryBase');
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setColorStatus('neutralDark');
    setIsFilled(!!ref.current?.value?.length);
  }, [ref]);

  const handleClear = useCallback(() => {
    inputElementRef.current?.clear();
    setIsFilled(false);
  }, []);

  useImperativeHandle(ref, () => ({
    focus: () => {
      handleInputFocus();
    },
    blur: () => {
      handleInputBlur();
    },
    error: () => {
      setHasError(true);
      setColorStatus('feedbackErrorBase');
    },
    success: () => {
      setHasSuccess(true);
      setColorStatus('feedbackSuccessBase');
    },
    clearStatus: () => {
      setHasError(false);
      setHasSuccess(false);
      setColorStatus('neutralDark');
    },
  }));

  return (
    <Box
      bw={hasError || hasSuccess || isFocused ? 'thin' : 'hairline'}
      borderColor={colorStatus}
      borderRadius="sm"
      flexDirection="row"
      alignItems="center"
      h={variant}
      {...props}
    >
      <TextInput
        ref={inputElementRef}
        placeholder={placeholder}
        placeholderTextColor={colors.neutralDark}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        editable={editable}
        multiline={multiline}
        maxLength={maxLength}
        keyboardType={keyboardType}
        numberOfLines={numberOfLines}
        autoCapitalize={autoCapitalize}
        selectionColor={colors.neutralDark}
        onChangeText={value => {
          if (maxLength && value?.length <= maxLength) {
            // eslint-disable-next-line no-param-reassign
            ref.current.value = value;
          }
        }}
        style={style}
      />

      {icon && (
        <TouchableWithoutFeedback onPress={handleClear}>
          <Box ml="quarck">
            <Icon
              name={icon}
              size={24}
              color={
                isFocused || isFilled ? colors.primaryBase : colors.neutralDark
              }
            />
          </Box>
        </TouchableWithoutFeedback>
      )}
    </Box>
  );
};

export default createRestyleComponent<InputProps, Theme>(
  [spacing, borderWidth],
  forwardRef(Input as ForwardRefRenderFunction<InputProps>),
);
