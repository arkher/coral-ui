import React, { useState } from 'react';
import {
  Box,
  Text,
  Button,
  TextField,
  TextArea,
  Checkbox,
} from '../src/components';

const Playground: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Box
      padding="sm"
      flexDirection="column"
      justifyContent="space-between"
      flex={1}
    >
      <Box>
        <Text fs="md" pb="nano">
          <Text fontWeight="bold">Coral</Text> - Design System 🚀
        </Text>

        <TextField
          label="Email"
          variant="medium"
          status="success"
          assistiveText="Texto de suporte"
          placeholder="Digite seu email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Box my="sm">
          <TextArea
            label="Feedback"
            placeholder="Digite aqui..."
            variant="medium"
            status="error"
            maxLength={10}
            assistiveText="Texto de suporte"
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

        <Button
          my="nano"
          bg="white"
          borderColor="primaryBase"
          bw="thin"
          onPress={() => undefined}
        >
          <Text color="primaryBase">Cancelar</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Playground;
