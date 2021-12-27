import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { StoriesView } from '../../stories/StorieView';
import { COLORS } from '../../themes/tokens';
import Box from '../Box';
import Text from '../Text';
import Paper from './Paper';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bg: any;
};

export default {
  title: 'Elements/Pressable',
  component: Paper,
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
export const BasicPaper = ({ bg }: Props): React.ReactNode => (
  <Paper
    flexDirection="row"
    justifyContent="space-between"
    alignItems="baseline"
    bg="feedback-info-base"
  >
    <Box width={100} height={100} bg="black" />
    <Box width={100} height={100} ml="md" bg="black" />
  </Paper>
);

BasicPaper.parameters = {
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

      <Paper mt="lg" p="lg">
        <Text p="md">Clique-me!</Text>
      </Paper>
    </>
  ));
