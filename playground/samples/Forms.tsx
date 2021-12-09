import React, { useRef, useState } from 'react';
import { StatusBar, ScrollView } from 'react-native';

import {
  Box,
  Text,
  Button,
  TextField,
  TextArea,
  Checkbox,
  Switch,
  Radiobutton,
} from '../../src/components';

import { InputRef } from '../../src/components/Input/interfaces';
import { RadioButtonRef } from '../../src/components/RadioButton/interfaces';

type ResultType = {
  name: string;
  email: string;
  feedback: string;
  checkbox: string;
  petPreferido: string;
};

const Forms: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [checkedSwitch, setCheckedSwitch] = useState(false);

  const [result, setResult] = useState<ResultType>({
    name: '',
    email: '',
    feedback: '',
    checkbox: '',
    petPreferido: '',
  });

  const radioButtonOptions = [
    { value: 'cat', label: 'Gato 🐈' },
    { value: 'dog', label: 'Cachorro 🐕' },
    { value: 'fish', label: 'Peixe 🐟' },
    { value: 'snake', label: 'Cobra 🐍' },
    { value: 'horse', label: 'Cavalo 🐴' },
  ];

  const nameRef = useRef<InputRef>(null);
  const textFieldRef = useRef<InputRef>(null);
  const textAreaRef = useRef<InputRef>(null);
  const radioButtonRef = useRef<RadioButtonRef>(null);

  return (
    <ScrollView>
      <StatusBar />

      <Box
        padding="sm"
        flexDirection="column"
        justifyContent="space-between"
        backgroundColor="white"
      >
        <Box>
          <TextField
            ref={nameRef}
            label="Nome"
            variant="medium"
            placeholder="Digite seu Nome"
            autoCapitalize="none"
          />

          <Box mt="sm">
            <TextField
              ref={textFieldRef}
              label="Email"
              variant="medium"
              status="success"
              assistiveText="Texto de suporte"
              placeholder="Digite seu email"
              autoCapitalize="none"
            />
          </Box>

          <Box mt="sm">
            <TextArea
              ref={textAreaRef}
              label="Feedback"
              placeholder="Digite aqui..."
              variant="medium"
              status="error"
              maxLength={100}
              assistiveText="Texto de suporte"
            />
          </Box>

          <Box mt="sm">
            <Checkbox
              value={checked}
              onChange={() => setChecked(!checked)}
              required
              label="Exemplo de checkbox"
            />
          </Box>

          <Box mt="sm" flexDirection="row" alignItems="center">
            <Switch
              value={checkedSwitch}
              onChange={() => setCheckedSwitch(!checkedSwitch)}
            />
            <Text ml="nano">Exemplo de uso do Switch</Text>
          </Box>

          <Box my="sm" mb="lg">
            <Radiobutton
              ref={radioButtonRef}
              label="Qual seu pet preferido"
              options={radioButtonOptions}
            />
          </Box>
        </Box>

        <Box>
          <Text>{JSON.stringify(result)}</Text>
        </Box>

        <Button
          mt="sm"
          onPress={() =>
            setResult({
              name: nameRef.current?.value || '',
              email: textFieldRef.current?.value || '',
              feedback: textAreaRef.current?.value || '',
              checkbox: checked as unknown as string,
              petPreferido: (radioButtonRef.current?.value as string) || '',
            })
          }
        >
          Obter Valores do Formulário
        </Button>
      </Box>
    </ScrollView>
  );
};

export default Forms;
