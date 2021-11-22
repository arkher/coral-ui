import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import themeMaestro from '../../themes/maestro';
import Text from './Text';

afterEach(cleanup);

test('should Text render correctly', async () => {
  const { toJSON } = render(
    <ThemeProvider theme={themeMaestro}>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In totam
        dolorum ab vel ratione blanditiis amet tempora et doloribus dignissimos
        iste quia rerum, laudantium nesciunt. Expedita non minus quis culpa!
      </Text>
    </ThemeProvider>,
  );

  expect(toJSON()).toMatchSnapshot();
});
