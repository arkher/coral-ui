/* eslint-disable arrow-body-style */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';
import { storiesOf } from '@storybook/react-native';
import { Alert, View } from 'react-native';
import Text from '../Text/Text';
import Button from './Button';
import { COLORS } from '../../themes/tokens';
import { StoriesView, StoriesViewInline } from '../../stories/StorieView';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bg: any;
};

export default {
  title: 'Componente/Button',
  component: Button,
  argTypes: {
    bg: {
      options: COLORS,
      control: { type: 'select' },
    },
  },
  decorators: [withDesign],
};

const urlHandoff =
  'https://www.figma.com/file/3raVfIADTUZCzFOOaQ9PMQ/HANDOFF-%7C-Core-Components-Mobile-%7C-Institucional?node-id=203%3A1636';

export const Primary = ({ bg }: Props): React.ReactNode => {
  return (
    <View style={{ width: 360, marginTop: 8, marginLeft: 8 }}>
      <Button variant="primary" bg={bg} onPress={action('clicked')}>
        <Text>Button text</Text>
      </Button>
    </View>
  );
};

Primary.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

export const Secondary = (): React.ReactNode => {
  return (
    <View style={{ width: 360, marginTop: 8, marginLeft: 8 }}>
      <Button variant="secondary" onPress={action('clicked')}>
        <Text color="primary-base">Button text</Text>
      </Button>
    </View>
  );
};

Secondary.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

export const Tertiary = (): React.ReactNode => {
  return (
    <View style={{ width: 360, marginTop: 8, marginLeft: 8 }}>
      <Button variant="tertiary" onPress={action('clicked')}>
        <Text color="primary-base">Button text</Text>
      </Button>
    </View>
  );
};

Tertiary.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

export const ButtonLoading = (): React.ReactNode => {
  return (
    <View style={{ width: 360, marginTop: 8, marginLeft: 8 }}>
      <Button
        onPress={action('loading')}
        loading
        bg="primary-base"
        alignItems="center"
      />
    </View>
  );
};

// Add all stories to RN/Expo storybook
storiesOf('Button-ds', module)
  .addDecorator(getStory => <StoriesView>{getStory()}</StoriesView>)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <>
      <Text mb="sm">Primary / Icon / Disabled / Loading</Text>

      <Button onPress={action('clicked!')}>
        <Text>{text('label', 'Button primary', 'primary')}</Text>
      </Button>

      <Button my="lg" onPress={() => Alert.alert('clicked!')}>
        <Text>Button with Emoji 👋</Text>
      </Button>

      <Button icon="check-circle" onPress={() => Alert.alert('clicked!')}>
        <Text>Button with Icon</Text>
      </Button>

      <Button disabled my="lg" onPress={() => Alert.alert('clicked!')}>
        <Text>Button primary disabled</Text>
      </Button>

      <Button loading onPress={() => Alert.alert('clicked!')}>
        <Text>Button primary loading</Text>
      </Button>
    </>
  ))
  .add('Secondary', () => (
    <>
      <Text mb="sm">Secondary / Icon / Disabled / Loading</Text>

      <Button variant="secondary" onPress={() => Alert.alert('clicked!')}>
        <Text>Button with Icon</Text>
      </Button>

      <Button
        my="sm"
        variant="secondary"
        onPress={() => Alert.alert('clicked!')}
      >
        <Text>Button with Emoji 👋</Text>
      </Button>

      <Button
        variant="secondary"
        icon="check-circle"
        onPress={() => Alert.alert('clicked!')}
      >
        <Text>Button primary</Text>
      </Button>

      <Button
        variant="secondary"
        disabled
        my="lg"
        onPress={() => Alert.alert('clicked!')}
      >
        <Text>Button primary disabled</Text>
      </Button>

      <Button
        variant="secondary"
        loading
        onPress={() => Alert.alert('clicked!')}
      >
        <Text>Button primary loading</Text>
      </Button>
    </>
  ))
  .add('Tertiary', () => (
    <>
      <Text mb="sm">Tertiary / Icon / Disabled / Loading</Text>

      <Button variant="tertiary" onPress={() => Alert.alert('clicked!')}>
        <Text>Button with Icon</Text>
      </Button>

      <Button
        my="sm"
        variant="tertiary"
        onPress={() => Alert.alert('clicked!')}
      >
        <Text>Button with Emoji 👋</Text>
      </Button>

      <Button
        variant="tertiary"
        icon="check-circle"
        onPress={() => Alert.alert('clicked!')}
      >
        <Text>Button primary</Text>
      </Button>

      <Button variant="tertiary" disabled my="lg" onPress={action('clicked!')}>
        <Text>Button primary disabled</Text>
      </Button>

      <Button
        variant="tertiary"
        loading
        onPress={() => Alert.alert('clicked!')}
      >
        <Text>Button primary loading</Text>
      </Button>
    </>
  ))
  .add('Inline', () => (
    <>
      <Text>Buttons Inline</Text>

      <StoriesViewInline>
        <Button variant="primary" mt="sm" onPress={() => undefined}>
          Primary
        </Button>
        <Button variant="secondary" mt="sm" ml="nano" onPress={() => undefined}>
          Secondary
        </Button>
      </StoriesViewInline>

      <StoriesViewInline>
        <Button variant="primary" mt="sm" mr="nano" onPress={() => undefined}>
          Entrar
        </Button>
        <Button variant="secondary" mt="sm" onPress={() => undefined}>
          Cancelar
        </Button>
      </StoriesViewInline>

      <StoriesViewInline>
        <Button variant="tertiary" mt="sm" mr="nano" onPress={() => undefined}>
          Primeiro acesso
        </Button>
        <Button variant="tertiary" mt="sm" onPress={() => undefined}>
          Ouvidoria
        </Button>
      </StoriesViewInline>
    </>
  ));
