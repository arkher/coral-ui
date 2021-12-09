import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Box, Button } from '../src/components';

interface PlaygroundProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
}

const Playground: React.FC<PlaygroundProps> = ({ navigation }) => (
  <ScrollView style={{ backgroundColor: 'white' }}>
    <Box m="sm">
      <Text fs="4xl">
        Bem-vindo ao
        <Text fontWeight="bold"> Catálogo </Text>
        do DS-Mobile 🏗️
      </Text>

      <Button
        variant="tertiary"
        mt="sm"
        onPress={() => navigation.navigate('Storybook')}
      >
        <Text fs="xl">Acessar Storybook 🃏</Text>
      </Button>

      <Box mt="lg">
        <Text> Casos de uso 🔽</Text>

        <Button mt="sm" onPress={() => navigation.navigate('Forms')}>
          Formulários
        </Button>

        <Button mt="sm" onPress={() => navigation.navigate('LoginMaestro')}>
          Login Maestro
        </Button>
      </Box>
    </Box>
  </ScrollView>
);

export default Playground;
