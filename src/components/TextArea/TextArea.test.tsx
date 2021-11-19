import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import TextArea from './TextArea';
import { ThemeProvider } from '@shopify/restyle';
import themeMaestro from '../../themes/maestro';
import { Input } from '..';
afterEach(cleanup);

test('should have a placeholder passed by prop', () => {
  const { getAllByPlaceholderText } = render(
    <ThemeProvider theme={themeMaestro}>
      <TextArea variant="medium" placeholder="Placeholder" />
    </ThemeProvider>,
  );

  expect(getAllByPlaceholderText('Placeholder').length).toBe(1);
});

test('should render correctly', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <TextArea variant="medium" placeholder="Placeholder" />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
