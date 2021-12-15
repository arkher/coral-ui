import React from 'react';
import { PressableProps } from 'react-native';
import { CustomBoxProps } from '../Box/interface';

export type CustomPressableProps = PressableProps &
  Partial<{
    children: React.ReactNode;
  }> &
  CustomBoxProps;
