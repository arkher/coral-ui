import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Input from '../../src/components/Input';
import CenterView from './CenterView';

export default {
  title: 'Input',
  component: Input,
};

export const BasicTextField = () => (
  <Input
    placeholder="Placeholder"
    borderColor="neutralDark"
    bw="hairline"
    padding="nano"
    borderRadius="sm"
    variant="medium"
    multiline={true}
    numberOfLines={20}
    style={{ height: 200, width: 300, textAlignVertical: 'top' }}
  />
);

storiesOf('Input', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Basic', BasicTextField);
