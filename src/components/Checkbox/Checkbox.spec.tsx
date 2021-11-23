import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import Checkbox from './Checkbox';
import themeMaestro from '../../themes/maestro';

afterEach(cleanup);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

it('should be marked', () => {
  let value = false;
  const { getByTestId } = render(
    <ThemeProvider theme={themeMaestro}>
      <Checkbox
        label="Label da checkbox"
        value={value}
        onChange={() => {
          value = true;
        }}
      />
    </ThemeProvider>,
  );

  fireEvent.press(getByTestId('checkbox'));
  expect(value).toBe(true);
});

it('should have label', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={themeMaestro}>
      <Checkbox label="Label da checkbox" value onChange={() => undefined} />
    </ThemeProvider>,
  );

  expect(getByTestId('checkbox-label').props.children).toBe(
    'Label da checkbox',
  );
});

test('should Checkbox render required feedback', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <Checkbox
        label="Label da checkbox"
        required
        value
        onChange={() => undefined}
      />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});

test('should Checkbox render correctly', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <Checkbox label="Label da checkbox" value onChange={() => undefined} />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
