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
          variant="small"
          placeholder="Digite seu email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Box my="sm">
          <TextArea label="Feedback" variant="medium" maxLength={10} />
        </Box>
      </Box>

      <Box>
        <Checkbox
          value={checked}
          onChange={() => setChecked(!checked)}
          label="Li e concordo com os termos de serviço"
        />

        <Button my="sm" onPress={() => undefined}>
          Enviar comentários
        </Button>
      </Box>
    </Box>
  );
};

export default Playground;
