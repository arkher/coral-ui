import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Text, Box, Button, Switch } from '../src/components';

interface PlaygroundProps {
  navigation: any;
}

const Playground: React.FC<PlaygroundProps> = ({ navigation }) => {
  const [switchActive, setSwitchActive] = useState(false);
  return (
    <Box m="sm">
      <ScrollView>
        <Text fs="lg" lineHeight={55}>
          Bem-vindo ao
          <Text fontWeight="bold"> Catálogo </Text>
          do DS-Mobile 📓
        </Text>

        <Box my="md">
          <Text fs="sm" mb="nano">
            🏗️ Escolha a seção que deseja:
          </Text>

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

          <Switch
            value={switchActive}
            onPress={() => {
              setSwitchActive(!switchActive);
            }}
          />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Playground;
