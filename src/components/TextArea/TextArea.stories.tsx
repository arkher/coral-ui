import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { StoriesView } from '../../stories/StorieView';
import TextArea from './TextArea';
import Text from '../Text';

export default {
  title: 'Componente/TextArea',
  component: TextArea,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    placeholder: {
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
  // eslint-disable-next-line react/no-unused-prop-types
  status: 'success' | 'error' | undefined;
}

const urlHandoff =
  'https://www.figma.com/file/3raVfIADTUZCzFOOaQ9PMQ/HANDOFF-%7C-Core-Components-Mobile-%7C-Institucional?node-id=222%3A4012';

export const Small = ({
  label,
  placeholder,
  status,
}: TextInputProps): React.ReactNode => (
  <TextArea
    label={label}
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
}: TextInputProps): React.ReactNode => (
  <TextArea label={label} placeholder={placeholder} variant="medium" />
);

Medium.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

// Add all stories to RN/Expo storybook
storiesOf('TextArea-ds', module)
  .addDecorator(getStory => <StoriesView>{getStory()}</StoriesView>)
  .addDecorator(withKnobs)
  .add('Small', () => (
    <>
      <Text mb="sm">TextArea / Success / Error</Text>

      <TextArea
        label="Label"
        assistiveText="Texto de suporte"
        placeholder="Placeholder"
        variant="small"
      />

      <TextArea
        label="Label"
        assistiveText="Texto de suporte"
        placeholder="Placeholder"
        variant="small"
        status="success"
      />

      <TextArea
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

      <TextArea
        label="label"
        assistiveText="Texto de suporte"
        placeholder="Placeholder"
        variant="medium"
      />

      <TextArea
        label="Label"
        assistiveText="Texto de suporte"
        placeholder="Placeholder"
        variant="medium"
        status="success"
      />

      <TextArea
        label="Label"
        assistiveText="Texto de suporte"
        placeholder="Placeholder"
        variant="medium"
        status="error"
      />
    </>
  ));
