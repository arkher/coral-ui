import React from 'react';
import { StatusBar, ScrollView, Alert } from 'react-native';

import { Box, Text, Button } from '../../src/components';

const Buttons: React.FC = () => (
  <ScrollView>
    <StatusBar />

    <Box
      padding="sm"
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor="white"
    >
      <Text mb="sm">Primary / Icon / Disabled / Loading</Text>

      <Button onPress={() => Alert.alert('clicked!')}>
        <Text>Button primary</Text>
      </Button>

      <Button my="lg" onPress={() => Alert.alert('clicked!')}>
        <Text>Button with Emoji 👋</Text>
      </Button>

      <Button icon="check-circle" onPress={() => Alert.alert('clicked!')}>
        <Text>Button with Icon</Text>
      </Button>

      <Button disabled my="lg" onPress={() => Alert.alert('clicked!')}>
        <Text>Button primary disabled</Text>
      </Button>

      <Button loading onPress={() => Alert.alert('clicked!')}>
        <Text>Button primary loading</Text>
      </Button>

      <Text my="sm">Secondary / Icon / Disabled / Loading</Text>

      <Button variant="secondary" onPress={() => Alert.alert('clicked!')}>
        <Text>Button with Icon</Text>
      </Button>

      <Button
        my="sm"
        variant="secondary"
        onPress={() => Alert.alert('clicked!')}
      >
        <Text>Button with Emoji 👋</Text>
      </Button>

      <Button
        variant="secondary"
        icon="check-circle"
        onPress={() => Alert.alert('clicked!')}
      >
        <Text>Button primary</Text>
      </Button>

      <Button
        variant="secondary"
        disabled
        my="lg"
        onPress={() => Alert.alert('clicked!')}
      >
        <Text>Button primary disabled</Text>
      </Button>

      <Button
        variant="secondary"
        loading
        onPress={() => Alert.alert('clicked!')}
      >
        <Text>Button primary loading</Text>
      </Button>

      <Text my="sm">Tertiary / Icon / Disabled / Loading</Text>

      <Button variant="tertiary" onPress={() => Alert.alert('clicked!')}>
        <Text>Button with Icon</Text>
      </Button>

      <Button
        my="sm"
        variant="tertiary"
        onPress={() => Alert.alert('clicked!')}
      >
        <Text>Button with Emoji 👋</Text>
      </Button>

      <Button
        variant="tertiary"
        icon="check-circle"
        onPress={() => Alert.alert('clicked!')}
      >
        <Text>Button primary</Text>
      </Button>

      <Button
        variant="tertiary"
        disabled
        my="lg"
        onPress={() => Alert.alert('clicked!')}
      >
        <Text>Button primary disabled</Text>
      </Button>

      <Button
        variant="tertiary"
        loading
        onPress={() => Alert.alert('clicked!')}
      >
        <Text>Button primary loading</Text>
      </Button>

      <Text my="sm">Buttons Inline</Text>

      <Box flexDirection="row">
        <Button variant="primary" mt="sm" onPress={() => undefined}>
          Primary
        </Button>
        <Button variant="secondary" mt="sm" ml="nano" onPress={() => undefined}>
          Secondary
        </Button>
      </Box>

      <Box flexDirection="row">
        <Button variant="secondary" mt="sm" onPress={() => undefined}>
          Cancelar
        </Button>
        <Button variant="primary" mt="sm" ml="nano" onPress={() => undefined}>
          Entrar
        </Button>
      </Box>

      <Box flexDirection="row">
        <Button variant="tertiary" mt="sm" mr="nano" onPress={() => undefined}>
          Primeiro acesso
        </Button>
        <Button variant="tertiary" mt="sm" onPress={() => undefined}>
          Ouvidoria
        </Button>
      </Box>
    </Box>
  </ScrollView>
);

export default Buttons;
