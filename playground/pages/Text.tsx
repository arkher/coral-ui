import React from 'react';
import { Box, Text } from '../../src/components';

const Playground: React.FC = () => (
  <Box
    padding="sm"
    flexDirection="column"
    justifyContent="space-between"
    flex={1}
  >
    <Box>
      <Text fs="md" pb="nano">
        <Text fontWeight="bold">Text elements</Text> - 🔠
      </Text>
    </Box>
  </Box>
);

export default Playground;
