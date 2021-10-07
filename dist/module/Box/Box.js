import { createBox, createRestyleComponent } from '@shopify/restyle';
import React from 'react';
import { borderWidth, opacity, shadowOffset, shadowOpacity, shadowRadius } from '../../themes/default';
const Box = createBox();

const CoralBox = ({
  children,
  ...props
}) => /*#__PURE__*/React.createElement(Box, props, children);

export default createRestyleComponent([borderWidth, opacity, shadowOffset, shadowRadius, shadowOpacity], CoralBox);
//# sourceMappingURL=Box.js.map