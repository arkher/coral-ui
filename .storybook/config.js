import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "@shopify/restyle";
import theme from "../themes/default";
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

// Wrap all stories in Theme Provider
addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
addDecorator(withKnobs);
addDecorator(withNotes);

// automatically import all files ending in *.stories.js
configure(require.context("../components", true, /\.stories\.[tj]sx$/), module);
