/* eslint-disable arrow-body-style */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';
import { View } from 'react-native';
import Text from '../Text/Text';
import Button from './Button';
import { colors } from '../../themes/default';

export default {
  title: 'Componente/Button',
  component: Button,
  argTypes: {
    bg: {
      options: colors,
      control: { type: 'select' },
    },
  },
  decorators: [withDesign],
};

export const Primary = ({ bg }: any): React.ReactNode => {
  return (
    <View style={{ width: 360, marginTop: 8, marginLeft: 8 }}>
      <Button onPress={action('clicked')} bg={bg || 'primaryBase'}>
        <Text>Button text</Text>
      </Button>
    </View>
  );
};

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/aeyr4f8PsBOub352GVhfiN/HANDOFF-%7C-Core-Components-Web-%7C-Institucional?node-id=103%3A6476',
  },
};

export const Secondary = (): React.ReactNode => {
  return (
    <View style={{ width: 360, marginTop: 8, marginLeft: 8 }}>
      <Button onPress={action('clicked')} bg="primaryBase">
        <Text>Button text</Text>
      </Button>
    </View>
  );
};

export const Tertiary = (): React.ReactNode => {
  return (
    <View style={{ width: 360, marginTop: 8, marginLeft: 8 }}>
      <Button onPress={action('clicked')} bg="primaryBase">
        <Text>Button text</Text>
      </Button>
    </View>
  );
};

// export const ButtonLoading = (): React.ReactNode => {
//   return (
//     <View style={{ width: 360, marginTop: 8, marginLeft: 8 }}>
//       <Button
//         onPress={action('loading')}
//         loading
//         bg="primaryBase"
//         alignItems="center"
//       />
//     </View>
//   );
// };

// storiesOf('Button', module)
//   .add('Basic button', Primary)
//   .add('Loading', ButtonLoading);
