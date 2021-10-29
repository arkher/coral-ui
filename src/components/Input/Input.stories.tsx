import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import {
  colors,
  borderWidthTokens,
  spacingsInset,
  radius,
} from '../../themes/default';
import Input from './Input';

export default {
  title: 'Elements/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    borderColor: {
      options: colors,
      control: { type: 'select' },
    },
    borderWidth: {
      options: borderWidthTokens,
      control: { type: 'select' },
    },
    padding: {
      options: spacingsInset,
      control: { type: 'select' },
    },
    borderRadius: {
      options: radius,
      control: { type: 'select' },
    },
    variant: {
      options: ['small', 'medium', 'smallArea', 'mediumArea'],
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
  borderColor: CustomColors;
  borderWidth: CustomBorderWidth;
  padding: CustomSpacingInset;
  borderRadius: CustomRadius;
  variant: CustomHeightComponent;
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
    variant={variant}
    editable={disabled}
    multiline={multiline}
    numberOfLines={numberOfLines}
  />
);
