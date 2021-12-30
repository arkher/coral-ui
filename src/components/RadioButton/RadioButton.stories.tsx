import React from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Componente/RadioButton',
  component: RadioButton,
};

// Stories
export const BasicRadioButton = (): React.ReactNode => (
  <RadioButton label="label" options={[]} />
);
