import React, {
  useCallback,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';

import { createRestyleComponent, spacing, useTheme } from '@shopify/restyle';
import { Keyboard, TextInput, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { borderWidth, Theme } from '../../themes/default';
import Box from '../Box';
import { InputFowardEvents, InputProps, InputRef } from './interfaces';

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
    returnKeyType,
    ...props
  },
  ref,
) => {
  const { colors } = useTheme<Theme>();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);

  const [colorStatus, setColorStatus] =
    useState<keyof Theme['colors']>('neutralDark');

  const inputElementRef = useRef<InputRef>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);

    if (!hasError && !hasSuccess) {
      setColorStatus('primaryBase');
    }
  }, [hasError, hasSuccess]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (!hasError && !hasSuccess) {
      setColorStatus('neutralDark');
    }
  }, [hasError, hasSuccess]);

  const handleClear = useCallback(() => {
    inputElementRef.current?.clear();
    setIsFilled(false);
  }, []);

  const handleChange = useCallback(
    (newValue: string) => {
      if (maxLength && newValue?.length <= maxLength) {
        // eslint-disable-next-line no-param-reassign
        ref.current.value = newValue;
      }

      if (newValue.length > 0) {
        setIsFilled(true);
      }
    },
    [maxLength, ref],
  );

  useImperativeHandle(
    ref,
    () =>
      ({
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
        clear: () => {
          setHasError(false);
          setHasSuccess(false);
          setColorStatus('neutralDark');
        },
      } as InputFowardEvents),
  );

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
        testID="Input"
        ref={inputElementRef}
        placeholder={placeholder}
        placeholderTextColor={colors.neutralDark}
        onBlur={handleInputBlur}
        onSubmitEditing={() => {
          Keyboard.dismiss();
        }}
        onFocus={handleInputFocus}
        onChangeText={handleChange}
        editable={editable}
        multiline={multiline}
        maxLength={maxLength}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        numberOfLines={numberOfLines}
        autoCapitalize={autoCapitalize}
        selectionColor={colors.neutralDark}
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
