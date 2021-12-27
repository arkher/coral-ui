import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Text from '../Text/Text';
import { RadioButtonProps, RadioButtonRef } from './interfaces';
import RadioButtonItem from './RadioButtonItem';

const RadioButton: React.ForwardRefRenderFunction<
  RadioButtonRef,
  RadioButtonProps
> = ({ label, options, initial = '' }, ref) => {
  const [selectedValue, setSelectedValue] = useState(initial);

  useImperativeHandle(
    ref,
    () => ({
      value: selectedValue,
    }),
    [selectedValue],
  );

  return (
    <>
      <Text fs="md" fontWeight="700" color="neutral-darkest" mb="nano">
        {label}
      </Text>
      {options.map(item => (
        <RadioButtonItem
          key={item.label}
          value={item.value}
          label={item.label}
          required={item.required}
          disabled={item.disabled}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      ))}
    </>
  );
};

export default forwardRef(RadioButton);
