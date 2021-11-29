import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Box, Button } from '../src/components';

interface PlaygroundProps {
  navigation: any;
}

const Playground: React.FC<PlaygroundProps> = ({ navigation }) => (
  <ScrollView style={{ backgroundColor: 'white' }}>
    <Box m="sm">
      <Text fs="4xl">
        Bem-vindo ao
        <Text fontWeight="bold"> Catálogo </Text>
        do DS-Mobile 📓🏗️
      </Text>

      <Box my="md">
        <Button mt="sm" disabled onPress={() => undefined}>
          Elementos textuais
        </Button>

        <Button mt="sm" onPress={() => navigation.navigate('ButtonDialogs')}>
          Botões e Dialogs
        </Button>

        <Button mt="sm" disabled onPress={() => undefined}>
          Listas
        </Button>

        <Button mt="sm" onPress={() => navigation.navigate('Forms')}>
          Formulários
        </Button>

        <Button mt="sm" onPress={() => navigation.navigate('Storybook')}>
          Storybook
        </Button>

        <Button mt="sm" onPress={() => navigation.navigate('LoginMaestro')}>
          Login Maestro
        </Button>
      </Box>
    </Box>
  </ScrollView>
);

export default Playground;
