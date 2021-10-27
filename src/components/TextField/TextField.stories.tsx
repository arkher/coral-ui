import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import TextField from './TextField';

export default {
  title: 'Componente/TextField',
  component: TextField,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    assistiveText: {
      control: { type: 'text' },
    },
    status: {
      options: ['enable', 'success', 'error'],
      control: { type: 'inline-radio' },
    },
  },
  decorators: [withDesign],
};

interface TextInputProps {
  label: string;
  placeholder: string;
  assistiveText: string;
  // eslint-disable-next-line react/no-unused-prop-types
  status: 'success' | 'error' | undefined;
}

const urlHandoff =
  'https://www.figma.com/file/3raVfIADTUZCzFOOaQ9PMQ/HANDOFF-%7C-Core-Components-Mobile-%7C-Institucional?node-id=222%3A4012';

export const Small = ({
  label,
  placeholder,
  assistiveText,
  status,
}: TextInputProps): React.ReactNode => (
  <TextField
    label={label}
    assistiveText={assistiveText}
    placeholder={placeholder}
    variant="small"
    status={status}
  />
);

Small.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

export const Medium = ({
  label,
  placeholder,
  assistiveText,
}: TextInputProps): React.ReactNode => (
  <TextField
    label={label}
    assistiveText={assistiveText}
    placeholder={placeholder}
    variant="medium"
  />
);

Medium.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};
