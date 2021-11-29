import React, { useRef, useState } from 'react';
import { StatusBar, Image } from 'react-native';
import { Box, Text, Button, TextField, Switch } from '../../src/components';
import { InputRef } from '../../src/components/Input/interfaces';

import pathImg from '../../assets/client/icon.webp';

const LoginMaestro: React.FC = () => {
  const [checked, setChecked] = useState(true);

  const [result, setResult] = useState<any>({
    cpf: '',
    password: '',
  });

  const cpfFieldRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);

  return (
    <Box backgroundColor="white" flex={1}>
      <StatusBar />

      <Box padding="sm" flexDirection="column" justifyContent="center" flex={1}>
        <Box mb="sm">
          <Image source={pathImg} style={{ width: 75, height: 75 }} />
        </Box>

        <Box>
          <TextField
            ref={cpfFieldRef}
            label="CPF"
            variant="medium"
            placeholder="000.000.000-00"
            autoCapitalize="none"
            keyboardType="numeric"
          />

          <TextField
            ref={passwordRef}
            label="Senha"
            variant="medium"
            placeholder="Digite sua senha"
            autoCapitalize="none"
          />

          <Box flexDirection="row" mt="lg">
            <Button variant="secondary" mr="nano" onPress={() => undefined}>
              Primeiro acesso
            </Button>
            <Button
              variant="primary"
              onPress={() =>
                setResult({
                  name: cpfFieldRef.current?.value || '',
                  email: passwordRef.current?.value || '',
                })
              }
            >
              Entrar
            </Button>
          </Box>
        </Box>

        <Button variant="tertiary" onPress={() => undefined} my="sm">
          Esqueceu sua senha?
        </Button>

        <Box flexDirection="row" alignItems="center" justifyContent="center">
          <Text mr="nano">Usar impressão digital</Text>
          <Switch value={checked} onChange={() => setChecked(!checked)} />
        </Box>

        <Button variant="tertiary" onPress={() => undefined} mt="lg">
          Ouvidoria
        </Button>
      </Box>

      <Box alignItems="center" my="nano">
        <Text fs="sm" color="neutral-base">
          Maestro v2.1.65 | v255
        </Text>
      </Box>
    </Box>
  );
};

export default LoginMaestro;
