import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import Button from './Button';
import Text from '../Text';
import themeMaestro from '../../themes/maestro';

afterEach(cleanup);

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

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
