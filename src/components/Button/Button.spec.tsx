import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import Button from './Button';
import Text from '../Text';
import themeMaestro from '../../themes/maestro';

afterEach(cleanup);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

test('should execute press event function', () => {
  const onEventMock = jest.fn();
  const { getByTestId } = render(
    <ThemeProvider theme={themeMaestro}>
      <Button variant="primary" onPress={onEventMock}>
        <Text>Button</Text>
      </Button>
    </ThemeProvider>,
  );

  fireEvent.press(getByTestId('ds-button'));
  expect(onEventMock).toHaveBeenCalledTimes(1);
});

test('should be primary base colored', () => {
  const onEventMock = jest.fn();
  const { getByTestId } = render(
    <ThemeProvider theme={themeMaestro}>
      <Button variant="primary" onPress={onEventMock}>
        <Text>Button</Text>
      </Button>
    </ThemeProvider>,
  );

  expect(getByTestId('button-box').props.style[0].backgroundColor).toBe(
    '#0A7E19',
  );
});

test('should be neutral lightest colored', () => {
  const onEventMock = jest.fn();
  const { getByTestId } = render(
    <ThemeProvider theme={themeMaestro}>
      <Button variant="primary" disabled onPress={onEventMock}>
        <Text>Button</Text>
      </Button>
    </ThemeProvider>,
  );

  expect(getByTestId('button-box').props.style[0].backgroundColor).toBe(
    '#F7F7F7',
  );
});

test('should Button render correctly', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <Button variant="primary" onPress={() => undefined}>
        <Text>Label Button</Text>
      </Button>
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
