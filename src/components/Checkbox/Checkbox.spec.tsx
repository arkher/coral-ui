import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import Checkbox from './Checkbox';
import themeMaestro from '../../themes/maestro';

afterEach(cleanup);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

test('should have marked', () => {
  render(
    <ThemeProvider theme={themeMaestro}>
      <Checkbox label="Label da checkbox" value onChange={() => undefined} />
    </ThemeProvider>,
  );

  expect(true).toBe(true);
});

test('should Checkbox render correctly', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <Checkbox label="Label da checkbox" value onChange={() => undefined} />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
