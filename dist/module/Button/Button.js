function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { createRestyleComponent, createBox } from '@shopify/restyle';
import React from 'react';
import { ActivityIndicator, TouchableHighlight } from 'react-native';
import { borderWidth, opacity, shadowOffset, shadowOpacity, shadowRadius } from '../../themes/default';
import Text from '../Text/Text';
const SimpleBox = createBox();

const Button = ({
  children,
  onPress,
  loading,
  textProps,
  ...props
}) => /*#__PURE__*/React.createElement(TouchableHighlight, {
  underlayColor: "transparent",
  onPress: onPress
}, /*#__PURE__*/React.createElement(SimpleBox, _extends({
  py: "md",
  px: "md",
  backgroundColor: "primaryBase",
  borderRadius: "sm",
  shadowColor: "black"
}, props), loading ? /*#__PURE__*/React.createElement(ActivityIndicator, {
  color: "white"
}) : /*#__PURE__*/React.createElement(Text, _extends({
  color: "white"
}, textProps), children)));

export default createRestyleComponent([borderWidth, opacity, shadowOffset, shadowRadius, shadowOpacity], Button);
//# sourceMappingURL=Button.js.map