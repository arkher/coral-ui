import React from 'react';
import { PressableProps } from 'react-native';
import { CustomBoxProps } from '../Box/interface';

export type CustomPaperProps = PressableProps &
  Partial<{
    children: React.ReactNode;
  }> &
  CustomBoxProps;
