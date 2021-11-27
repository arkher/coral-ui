import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import Input from './Input';
import themeMaestro from '../../themes/maestro';

afterEach(cleanup);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

test('should have a placeholder passed by prop', () => {
  const { getAllByPlaceholderText } = render(
    <ThemeProvider theme={themeMaestro}>
      <Input placeholder="Placeholder" />
    </ThemeProvider>,
  );

  expect(getAllByPlaceholderText('Placeholder').length).toBe(1);
});

test('should render input from user', () => {
  const CHANGE_TEXT = 'Texto inserido pelo usuário';
  let value = 'Texto inicial';

  const { getByTestId } = render(
    <ThemeProvider theme={themeMaestro}>
      <Input
        placeholder="Placeholder"
        value={value}
        onChangeText={newValue => {
          value = newValue;
        }}
      />
    </ThemeProvider>,
  );

  expect(getByTestId('Input').props.value).toBe(value);

  fireEvent.changeText(getByTestId('Input'), CHANGE_TEXT);
  expect(value).toBe(CHANGE_TEXT);
});

test('should Input render correctly', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <Input placeholder="Placeholder" />
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
