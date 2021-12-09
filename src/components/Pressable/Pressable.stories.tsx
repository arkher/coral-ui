import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { StoriesView } from '../../stories/StorieView';
import { COLORS } from '../../themes/tokens';
import Text from '../Text';
import Pressable from './Pressable';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bg: any;
};

export default {
  title: 'Elements/Pressable',
  component: Pressable,
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

// Stories
export const BasicPressable = ({ bg }: Props): React.ReactNode => (
  <Pressable boxProps={{ bg }}>
    <Text>Olá mundo!</Text>
  </Pressable>
);

BasicPressable.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};

// Add all stories to RN/Expo storybook
storiesOf('Pressable-ds', module)
  .addDecorator(getStory => <StoriesView>{getStory()}</StoriesView>)
  .add('Default', () => (
    <>
      <Text mb="sm">Pressable </Text>

      <Pressable boxProps={{ bg: 'white' }}>
        <Text p="md">Clique-me!</Text>
      </Pressable>
    </>
  ));
