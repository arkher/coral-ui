import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Box, Button, Text } from '../../src/components';

const Forms: React.FC = () => (
  <ScrollView>
    <StatusBar />

    <Box
      padding="sm"
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor="white"
    >
      <Box>
        <Text>Text</Text>
      </Box>

      <Button mt="sm" onPress={() => undefined}>
        Button
      </Button>
    </Box>
  </ScrollView>
);
export default Forms;
