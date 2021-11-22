import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import Box from './Box';

afterEach(cleanup);

test('should Box render correctly', async () => {
  const { toJSON } = render(<Box />);

  expect(toJSON()).toMatchSnapshot();
});
