import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import Switch from './Switch';

export default {
  title: 'Componente/Switch',
  component: Switch,
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Label',
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
  'https://www.figma.com/file/3raVfIADTUZCzFOOaQ9PMQ/HANDOFF-%7C-Core-Components-Mobile-%7C-Institucional?node-id=209%3A3382';

// Stories
export const Unchecked = (): React.ReactNode => (
  <Switch onChange={() => undefined} value={false} />
);

Unchecked.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

export const UncheckedDisabled = (): React.ReactNode => (
  <Switch onChange={() => undefined} value={false} disabled />
);

UncheckedDisabled.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

export const Checked = (): React.ReactNode => (
  <Switch onChange={() => undefined} value />
);

Checked.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

export const CheckedDisabled = (): React.ReactNode => (
  <Switch onChange={() => undefined} value disabled />
);

CheckedDisabled.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};
