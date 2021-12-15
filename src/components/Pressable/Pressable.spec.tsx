import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import Pressable from './Pressable';
import Text from '../Text';
import themeMaestro from '../../themes/maestro';

afterEach(cleanup);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

test('should execute press event function', () => {
  const onEventMock = jest.fn();
  const { getByTestId } = render(
    <ThemeProvider theme={themeMaestro}>
      <Pressable onPress={onEventMock}>
        <Text>Pressable</Text>
      </Pressable>
    </ThemeProvider>,
  );

  fireEvent.press(getByTestId('pressable'));
  expect(onEventMock).toHaveBeenCalledTimes(1);
});

test('should be black', () => {
  const onEventMock = jest.fn();
  const { getByTestId } = render(
    <ThemeProvider theme={themeMaestro}>
      <Pressable onPress={onEventMock} bg="black">
        <Text>Pressable</Text>
      </Pressable>
    </ThemeProvider>,
  );

  expect(getByTestId('pressable-box').props.style[0].backgroundColor).toBe(
    '#000000',
  );
});

test('should render correctly', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <Pressable onPress={() => undefined}>
        <Text>Label Pressable</Text>
      </Pressable>
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
