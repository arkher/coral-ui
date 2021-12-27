/* eslint-disable global-require */
import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import Switch from './Switch';
import themeMaestro from '../../themes/maestro';

afterEach(cleanup);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

it('should be marked', () => {
  let value = false;
  const { getByTestId } = render(
    <ThemeProvider theme={themeMaestro}>
      <Switch
        value={value}
        onChange={() => {
          value = true;
        }}
      />
    </ThemeProvider>,
  );

  fireEvent.press(getByTestId('ds-switch'));
  expect(value).toBe(true);
});

test('should execute onchange function', async () => {
  const onEventMock = jest.fn();

  const { getByTestId } = render(
    <ThemeProvider theme={themeMaestro}>
      <Switch value onChange={onEventMock} />
    </ThemeProvider>,
  );

  fireEvent.press(getByTestId('ds-switch'));
  expect(onEventMock).toHaveBeenCalledTimes(1);
});

test('should Checkbox render correctly', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <Switch value onChange={() => undefined} />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
