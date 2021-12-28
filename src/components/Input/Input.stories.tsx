import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import {
  COLORS,
  BORDER_WIDTH,
  SPACINGS,
  RADIUS,
  HEIGHTS,
} from '../../themes/tokens';
import Input from './Input';

export default {
  title: 'Elements/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    borderColor: {
      options: COLORS,
      control: { type: 'select' },
    },
    borderWidth: {
      options: BORDER_WIDTH,
      control: { type: 'select' },
    },
    padding: {
      options: SPACINGS,
      control: { type: 'select' },
    },
    borderRadius: {
      options: RADIUS,
      control: { type: 'select' },
    },
    variant: {
      options: HEIGHTS,
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    multiline: {
      control: { type: 'boolean' },
    },
    numberOfLines: {
      control: { type: 'number' },
    },
  },
  decorators: [withDesign],
};

interface TextInputProps {
  placeholder: string;
  value: string;
  borderColor: Custom.Colors;
  borderWidth: Custom.BorderWidth;
  padding: 'nano' | 'sm' | 'md' | 'lg' | 'xs' | 'quark';
  borderRadius: Custom.Radius;
  variant: Custom.HeightComponent;
  disabled: boolean;
  multiline: boolean;
  numberOfLines: number;
}

export const Default = ({
  placeholder,
  value,
  borderColor,
  borderWidth,
  padding,
  borderRadius,
  variant,
  disabled,
  multiline,
  numberOfLines,
}: TextInputProps): React.ReactNode => (
  <Input
    placeholder={placeholder || 'Placeholder'}
    borderColor={borderColor}
    value={value}
    bw={borderWidth || 'hairline'}
    p={padding || 'nano'}
    borderRadius={borderRadius}
    h={variant}
    editable={disabled}
    multiline={multiline}
    numberOfLines={numberOfLines}
  />
);
