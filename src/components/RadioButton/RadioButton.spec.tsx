import React, { createRef } from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import RadioButton from './RadioButton';
import { themeMaestro } from '../../themes';
import { RadioButtonRef } from './interfaces';

afterEach(cleanup);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

it('should be like initial value', () => {
  const ref = createRef<RadioButtonRef>();

  const radioButtonOptions = [
    { value: 0, label: 'zero' },
    { value: 1, label: 'um' },
  ];

  render(
    <ThemeProvider theme={themeMaestro}>
      <RadioButton
        ref={ref}
        initial={0}
        label="RadioButton Label"
        options={radioButtonOptions}
      />
    </ThemeProvider>,
  );

  expect(ref.current?.value).toBe(0);
});

it('should be changed value', () => {
  const ref = createRef<RadioButtonRef>();

  const radioButtonOptions = [
    { value: 0, label: 'zero' },
    { value: 1, label: 'um' },
    { value: 2, label: 'dois' },
  ];

  const { getByText } = render(
    <ThemeProvider theme={themeMaestro}>
      <RadioButton
        ref={ref}
        initial={0}
        label="RadioButton Label"
        options={radioButtonOptions}
      />
    </ThemeProvider>,
  );

  fireEvent.press(getByText('um'));
  expect(ref.current?.value).toBe(1);

  fireEvent.press(getByText('dois'));
  expect(ref.current?.value).toBe(2);
});

test('should RadioButton render correctly', async () => {
  const radioButtonOptions = [
    { value: 0, label: 'zero' },
    { value: 1, label: 'um' },
  ];

  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <RadioButton label="RadioButton Label" options={radioButtonOptions} />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
