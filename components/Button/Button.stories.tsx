import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import Text from '../Text/Text';
import Button from './Button';
import notes from './notes/notes.md';

export default {
  title: 'Button',
  component: Button
};

export const BasicButton = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    }}
  >
    <Button onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  </View>
);

BasicButton.story = {
  parameters: {
    notes: { markdown: notes }
  }
};

storiesOf('Button', module)
  .addDecorator((getStory) => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      }}
    >
      {getStory()}
    </View>
  ))
  .add('Basic button', BasicButton);
// .add(
//   "with some emoji",
//   () => (
//     <Button onPress={action("clicked-emoji")}>
//       <Text>😀 😎 👍 💯</Text>
//     </Button>
//   ),
//   {
//     notes: buttonWithEmojiNotes,
//   }
// )
// .add(
//   "loading",
//   () => (
//     <Button onPress={action("loading")} loading>
//       <Text>Test</Text>
//     </Button>
//   ),
//   {
//     notes: buttonLoadingNotes,
//   }
// );

// import React from "react";
// import { action } from "@storybook/addon-actions";
// import { storiesOf } from "@storybook/react-native";
// import Button from "./Button";

// Stories
// export const Basic = () =>
// <Button onPress={action("loading")} loading>
//   <Text>Test</Text>
// </Button>
// Add all stories to RN/Expo storybook
// storiesOf("Button", module).add("Basic", Basic);
