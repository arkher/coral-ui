import React from 'react';
import { Image, StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import pathImg from '../../assets/client/icon.webp';
import { Box, Button, Text } from '../../src/components';

const LoginMaestro: React.FC = () => (
  <KeyboardAwareScrollView
    contentContainerStyle={{ flex: 1, backgroundColor: 'white' }}
  >
    <StatusBar />

    <Box
      pt="sm"
      px="sm"
      flexDirection="column"
      justifyContent="center"
      flex={1}
    >
      <Box mb="sm">
        <Image source={pathImg} style={{ width: 75, height: 75 }} />
      </Box>

      <Box flexDirection="row" mt="lg">
        <Button
          variant="secondary"
          mr="nano"
          onPress={() => undefined}
          flex={1}
        >
          Primeiro acesso
        </Button>
        <Button flex={1} variant="primary" onPress={() => undefined}>
          Entrar
        </Button>
      </Box>

      <Button variant="tertiary" onPress={() => undefined} my="xs">
        Esqueceu sua senha?
      </Button>

      <Box flexDirection="row" alignItems="center" justifyContent="center">
        <Text mr="nano">Usar impressão digital</Text>
      </Box>
      <Box alignItems="center" flexDirection="column" mt="lg">
        <Button variant="tertiary" onPress={() => undefined}>
          Ouvidoria
        </Button>
        <Box alignItems="center">
          <Text fs="sm" color="neutral-base">
            Maestro v2.1.65 | v255
          </Text>
        </Box>
      </Box>
    </Box>
  </KeyboardAwareScrollView>
);

export default LoginMaestro;
