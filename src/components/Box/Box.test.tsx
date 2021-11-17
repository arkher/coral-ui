import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import Box from './Box';
afterEach(cleanup);
test('renderiza corretamente', async () => {
  const { toJSON } = render(<Box />);

  expect(toJSON()).toMatchSnapshot();
});
