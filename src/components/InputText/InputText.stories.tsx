import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import InputText from './InputText';

export default {
  title: 'Componente/InputText',
  component: InputText,
  decorators: [withDesign],
};

const urlHandoff =
  'https://www.figma.com/file/3raVfIADTUZCzFOOaQ9PMQ/HANDOFF-%7C-Core-Components-Mobile-%7C-Institucional?node-id=222%3A4012';

export const BasicInputText = (): React.ReactNode => <InputText />;

BasicInputText.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};
