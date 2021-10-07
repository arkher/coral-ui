"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _restyle = require("@shopify/restyle");

var _default2 = require("../../themes/default");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Text = (0, _restyle.createText)();

const CoralText = ({
  children,
  ...props
}) => /*#__PURE__*/_react.default.createElement(Text, _extends({
  variant: "regular"
}, props), children);

var _default = (0, _restyle.createRestyleComponent)([_default2.fontSize, _default2.lineHeight, _default2.letterSpacing], CoralText);

exports.default = _default;
//# sourceMappingURL=Text.js.map