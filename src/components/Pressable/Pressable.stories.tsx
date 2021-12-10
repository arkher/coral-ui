import React from 'react';
import { withDesign } from 'storybook-addon-designs';
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
