import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ContainerProps {
  width: number;
  isFocused: boolean;
  borderColorCustom: string;
  borderColorFocused: string;
}

const wrapperStyle = {};

const containerStyle: ViewStyle = {
  borderRadius: 4,
  paddingVertical: 16,
  paddingRight: 8,
  paddingLeft: 16,
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
};

const inputStyle: ViewStyle = {
  flex: 1,
};

const labelStyle: TextStyle = {
  marginBottom: 4,
  color: '#192a38',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: 14,
};

const iconStyle: ViewStyle = {
  marginLeft: 4,
};

const sectionAuxTextStyle: ViewStyle = {
  marginTop: 4,
  flexDirection: 'row',
};

const iconAuxTextStyle: ViewStyle = {};

const labelAuxTextStyle: TextStyle = {
  marginLeft: 4,
  fontSize: 12,
};

const buttonCloseStyle: ViewStyle = {};

const styles = (props: ContainerProps) =>
  StyleSheet.create({
    wrapper: wrapperStyle,
    container: {
      ...containerStyle,
      maxWidth: props.width,
      borderWidth: props.isFocused ? 2 : 1,
      borderColor: props.isFocused
        ? props.borderColorFocused
        : props.borderColorCustom,
    },
    input: inputStyle,
    label: labelStyle,
    icon: iconStyle,
    sectionAuxText: sectionAuxTextStyle,
    iconAuxText: iconAuxTextStyle,
    labelAuxText: labelAuxTextStyle,
    buttonClose: buttonCloseStyle,
  });

export default styles;
