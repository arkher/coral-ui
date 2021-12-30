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

      <Box mt="lg">
        <Button mt="sm" onPress={() => navigation.navigate('Forms')}>
          Formulários
        </Button>

        <Button mt="sm" onPress={() => navigation.navigate('Buttons')}>
          Botões
        </Button>

        <Button mt="sm" onPress={() => navigation.navigate('LoginMaestro')}>
          Login Maestro
        </Button>
      </Box>
    </Box>
  </ScrollView>
);

export default Playground;
