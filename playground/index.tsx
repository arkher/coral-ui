import React from 'react';
import { Text, Box, Button } from '../src/components';

interface PlaygroundProps {
  navigation: any;
}

const Playground: React.FC<PlaygroundProps> = ({ navigation }) => (
  <Box m="sm">
    <Text fs="lg" lineHeight={55}>
      Bem-vindo ao
      <Text fontWeight="bold"> Catálogo </Text>
      do DS-Mobile 📓
    </Text>

    <Box my="md">
      <Text fs="sm" mb="nano">
        🏗️ Escolha a seção que deseja:
      </Text>

      <Button mt="sm" onPress={() => undefined}>
        Elementos textuais
      </Button>

      <Button mt="sm" onPress={() => navigation.navigate('ButtonDialogs')}>
        Botões e Dialogs
      </Button>

      <Button mt="sm" onPress={() => undefined}>
        Listas
      </Button>

      <Button mt="sm" onPress={() => navigation.navigate('Forms')}>
        Formulários
      </Button>

      <Button mt="sm" onPress={() => navigation.navigate('Storybook')}>
        Storybook
      </Button>
    </Box>
  </Box>
);

export default Playground;
