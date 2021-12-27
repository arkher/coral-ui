import React from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';
import { StoriesView } from '../../stories/StorieView';
import Switch from './Switch';
import Text from '../Text';

export default {
  title: 'Componente/Switch',
  component: Switch,
  argTypes: {},
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

// Add all stories to RN/Expo storybook
storiesOf('Switch-ds', module)
  .addDecorator(getStory => <StoriesView>{getStory()}</StoriesView>)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <Text mb="sm">Switch / Marked / Default / Disabled</Text>

      <Switch onChange={() => undefined} value disabled />

      <Switch
        my="sm"
        value={boolean('value', false, 'default')}
        onChange={action('clicked!')}
      />
    </>
  ));
