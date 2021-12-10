import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import themeMaestro from '../../themes/maestro';
import Box from './Box';

afterEach(cleanup);

test('should be primaryBase as background-color', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <Box backgroundColor="primary-base" />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});

test('should be large as margin', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <Box margin="lg" />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});

test('should be Box render correctly', async () => {
  const { toJSON } = render(<Box />);

  expect(toJSON()).toMatchSnapshot();
});
