import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import Checkbox from './Checkbox';

type Props = {
  label: string;
  value: boolean;
};

export default {
  title: 'Componente/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Label',
    },
    value: {
      control: { type: 'boolean' },
    },
    labelStyle: {
      control: { type: 'none' },
    },
    required: {
      control: { type: 'none' },
    },
    disabled: {
      control: { type: 'none' },
    },
    onChange: {
      control: { type: 'none' },
    },
  },
  decorators: [withDesign],
};

const urlHandoff =
  'https://www.figma.com/file/3raVfIADTUZCzFOOaQ9PMQ/HANDOFF-%7C-Core-Components-Mobile-%7C-Institucional?node-id=356%3A5928';

// Stories
export const Basic = ({ label, value }: Props): React.ReactNode => (
  <Checkbox label={label} onChange={() => undefined} value={value} />
);

Basic.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

export const Disabled = ({ label, value }: Props): React.ReactNode => (
  <Checkbox label={label} onChange={() => undefined} value={value} disabled />
);

Disabled.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

export const Required = ({ label, value }: Props): React.ReactNode => (
  <Checkbox label={label} onChange={() => undefined} value={value} required />
);

Required.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};