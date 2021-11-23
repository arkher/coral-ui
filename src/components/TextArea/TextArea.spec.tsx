import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import TextArea from './TextArea';
import themeMaestro from '../../themes/maestro';

afterEach(cleanup);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

test('should have a placeholder passed by prop', () => {
  const { getAllByPlaceholderText } = render(
    <ThemeProvider theme={themeMaestro}>
      <TextArea variant="medium" placeholder="Placeholder" />
    </ThemeProvider>,
  );

  expect(getAllByPlaceholderText('Placeholder').length).toBe(1);
});

test('should TextArea render correctly', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <TextArea variant="medium" placeholder="Placeholder" />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
