"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _restyle = require("@shopify/restyle");

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _default2 = require("../../themes/default");

var _Text = _interopRequireDefault(require("../Text/Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SimpleBox = (0, _restyle.createBox)();

const Button = ({
  children,
  onPress,
  loading,
  textProps,
  ...props
}) => /*#__PURE__*/_react.default.createElement(_reactNative.TouchableHighlight, {
  underlayColor: "transparent",
  onPress: onPress
}, /*#__PURE__*/_react.default.createElement(SimpleBox, _extends({
  py: "md",
  px: "md",
  backgroundColor: "primaryBase",
  borderRadius: "sm",
  shadowColor: "black"
}, props), loading ? /*#__PURE__*/_react.default.createElement(_reactNative.ActivityIndicator, {
  color: "white"
}) : /*#__PURE__*/_react.default.createElement(_Text.default, _extends({
  color: "white"
}, textProps), children)));

var _default = (0, _restyle.createRestyleComponent)([_default2.borderWidth, _default2.opacity, _default2.shadowOffset, _default2.shadowRadius, _default2.shadowOpacity], Button);

exports.default = _default;
//# sourceMappingURL=Button.js.map