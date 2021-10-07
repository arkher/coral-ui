"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _restyle = require("@shopify/restyle");

var _react = _interopRequireDefault(require("react"));

var _default2 = require("../../themes/default");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Box = (0, _restyle.createBox)();

const CoralBox = ({
  children,
  ...props
}) => /*#__PURE__*/_react.default.createElement(Box, props, children);

var _default = (0, _restyle.createRestyleComponent)([_default2.borderWidth, _default2.opacity, _default2.shadowOffset, _default2.shadowRadius, _default2.shadowOpacity], CoralBox);

exports.default = _default;
//# sourceMappingURL=Box.js.map