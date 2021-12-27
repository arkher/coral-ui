import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { withDesign } from 'storybook-addon-designs';
import { StoriesView } from '../../stories/StorieView';
import Text from '../Text';
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

// Add all stories to RN/Expo storybook
storiesOf('TextField-ds', module)
  .addDecorator(getStory => <StoriesView>{getStory()}</StoriesView>)
  .addDecorator(withKnobs)
  .add('Small', () => (
    <>
      <Text mb="sm">TextField / Success / Error</Text>

      <TextField
        label="Label"
        assistiveText="Texto de suporte"
        placeholder="Placeholder"
        variant="small"
      />

      <TextField
        label="Label"
        assistiveText="Texto de suporte"
        placeholder="Placeholder"
        variant="small"
        status="success"
      />

      <TextField
        label="Label"
        assistiveText="Texto de suporte"
        placeholder="Placeholder"
        variant="small"
        status="error"
      />
    </>
  ))
  .add('Medium', () => (
    <>
      <Text mb="sm">TextField / Success / Error</Text>

      <TextField
        label="label"
        assistiveText="Texto de suporte"
        placeholder="Placeholder"
        variant="medium"
      />

      <TextField
        label="Label"
        assistiveText="Texto de suporte"
        placeholder="Placeholder"
        variant="medium"
        status="success"
      />

      <TextField
        label="Label"
        assistiveText="Texto de suporte"
        placeholder="Placeholder"
        variant="medium"
        status="error"
      />
    </>
  ));
