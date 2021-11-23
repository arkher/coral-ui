import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import TextField from './TextField';
import themeMaestro from '../../themes/maestro';

afterEach(cleanup);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

test('should have a placeholder passed by prop', () => {
  const { getAllByPlaceholderText } = render(
    <ThemeProvider theme={themeMaestro}>
      <TextField
        variant="medium"
        placeholder="Placeholder"
        assistiveText="Texto de suporte"
      />
    </ThemeProvider>,
  );

  expect(getAllByPlaceholderText('Placeholder').length).toBe(1);
});

test('should have a label passed by prop', () => {
  const { getAllByText } = render(
    <ThemeProvider theme={themeMaestro}>
      <TextField
        label="Label do TextArea"
        variant="medium"
        placeholder="Placeholder"
      />
    </ThemeProvider>,
  );

  expect(getAllByText('Label do TextArea').length).toBe(1);
});

test('should have a success feedback', () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <TextField
        label="Label do TextArea"
        variant="medium"
        status="success"
        placeholder="Placeholder"
      />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});

test('should have a error feedback', () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <TextField
        label="Label do TextArea"
        variant="medium"
        status="error"
        placeholder="Placeholder"
      />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});

test('should TextField render correctly', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <TextField variant="medium" placeholder="Placeholder" />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
