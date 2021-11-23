import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import {
  Box,
  Button,
  TextField,
  TextArea,
  Checkbox,
  Input,
} from '../../src/components';

const Forms: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <StatusBar />

      <Box
        padding="sm"
        flexDirection="column"
        justifyContent="space-between"
        backgroundColor="white"
        flex={1}
      >
        <Box>
          <TextField
            label="Email"
            variant="medium"
            status="success"
            assistiveText="Texto de suporte"
            placeholder="Digite seu email"
            autoCapitalize="none"
            onChange={e => console.log(e.current?.value)}
          />

          <Box my="sm">
            <TextArea
              label="Feedback"
              placeholder="Digite aqui..."
              variant="medium"
              status="error"
              maxLength={100}
              assistiveText="Texto de suporte"
              onChange={e => console.log(e.current?.value)}
            />
          </Box>

          <Box my="nano">
            <Input
              placeholder="Digite aqui..."
              variant="medium"
              px="nano"
              onChange={e => console.log(e)}
            />
          </Box>
        </Box>

        <Box>
          <Checkbox
            value={checked}
            onChange={() => setChecked(!checked)}
            required
            label="Li e concordo com os termos de serviço"
          />

          <Button mt="sm" onPress={() => undefined}>
            Enviar comentários
          </Button>

          <Button variant="secondary" my="nano" onPress={() => undefined}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Forms;
