import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StoriesView } from '../../stories/StorieView';
// import { storiesOf } from '@storybook/react-native';
import RadioButton from './RadioButton';

export default {
  title: 'Componente/RadioButton',
  component: RadioButton,
};

// Stories
export const BasicRadioButton = (): React.ReactNode => (
  <RadioButton label="label" options={[]} />
);

// Add all stories to RN/Expo storybook
storiesOf('RadioButton-ds', module)
  .addDecorator(getStory => <StoriesView>{getStory()}</StoriesView>)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const radioButtonOptions = [
      { value: 0, label: 'zero' },
      { value: 1, label: 'um' },
      { value: 2, label: 'dois' },
    ];

    return (
      <>
        <RadioButton label="RadioButton Label" options={radioButtonOptions} />
      </>
    );
  });
