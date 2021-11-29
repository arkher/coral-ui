import { Dispatch } from 'react';

type CustomOptions = {
  label: string;
  value: string | number | boolean;
  disabled?: boolean;
  required?: boolean;
};

type RadioButtonRef = {
  value: string | number | boolean;
};

type RadioButtonProps = {
  label: string;
  options: CustomOptions[];
  initial?: string | number | boolean;
};

type RadioButtonItemProps = {
  label: string;
  value: string | number | boolean;
  disabled?: boolean;
  required?: boolean;
  selectedValue: string | number | boolean;
  setSelectedValue: Dispatch<React.SetStateAction<string | number | boolean>>;
};

export { RadioButtonProps, RadioButtonItemProps, RadioButtonRef };
