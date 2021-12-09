import React from 'react';
import { Box } from '../../components';

const StoriesView: React.FC = ({ children }) => (
  <Box p="sm" backgroundColor="white" flex={1}>
    {children}
  </Box>
);

const StoriesViewInline: React.FC = ({ children }) => (
  <Box flexDirection="row">{children}</Box>
);

export { StoriesView, StoriesViewInline };
