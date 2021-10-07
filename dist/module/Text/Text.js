function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { createRestyleComponent, createText } from '@shopify/restyle';
import { fontSize, letterSpacing, lineHeight } from '../../themes/default';
const Text = createText();

const CoralText = ({
  children,
  ...props
}) => /*#__PURE__*/React.createElement(Text, _extends({
  variant: "regular"
}, props), children);

export default createRestyleComponent([fontSize, lineHeight, letterSpacing], CoralText);
//# sourceMappingURL=Text.js.map