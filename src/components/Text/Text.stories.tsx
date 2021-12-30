import React from 'react';
import Text from './Text';

export default {
  title: 'Elements/Text',
  component: Text,
};

// eslint-disable-next-line arrow-body-style
export const BasicText = (): React.ReactNode => {
  return (
    <Text>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis rerum
      esse modi natus laborum dolorum quidem omnis alias autem! Beatae ut quo
      magnam rerum soluta labore laudantium? Quasi, molestias et!
    </Text>
  );
};
