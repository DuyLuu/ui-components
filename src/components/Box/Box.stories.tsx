import React from 'react';
import { View } from 'react-native';
import { StoryObj, Meta } from '@storybook/react';

import Box from './Box';
import Text from '../Text/Text';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'background',
        'surface',
        'error',
        'success',
        'warning',
      ],
    },
    padding: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    margin: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    flex: {
      control: { type: 'number', min: 0, max: 1, step: 0.1 },
    },
    center: { control: 'boolean' },
    row: { control: 'boolean' },
  },
} as Meta<typeof Box>;

type BoxStory = StoryObj<typeof Box>;

/**
 * Basic Box component with content
 */
export const Default: BoxStory = {
  args: {
    backgroundColor: 'surface',
    padding: 'md',
  },
  render: (args) => (
    <Box {...args}>
      <Text>Box Content</Text>
    </Box>
  ),
};

/**
 * Centered content using the center prop
 */
export const Centered: BoxStory = {
  args: {
    backgroundColor: 'surface',
    padding: 'md',
    center: true,
    height: 100,
  },
  render: (args) => (
    <Box {...args}>
      <Text>Centered Content</Text>
    </Box>
  ),
};

/**
 * Row layout using the row prop
 */
export const Row: BoxStory = {
  args: {
    backgroundColor: 'surface',
    padding: 'md',
    row: true,
  },
  render: (args) => (
    <Box {...args}>
      <Box backgroundColor="primary" padding="sm" margin="sm">
        <Text>Item 1</Text>
      </Box>
      <Box backgroundColor="secondary" padding="sm" margin="sm">
        <Text>Item 2</Text>
      </Box>
      <Box backgroundColor="success" padding="sm" margin="sm">
        <Text>Item 3</Text>
      </Box>
    </Box>
  ),
};

/**
 * Nested boxes for complex layouts
 */
export const NestedBoxes: BoxStory = {
  render: () => (
    <Box backgroundColor="background" padding="lg">
      <Box backgroundColor="surface" padding="md" marginBottom="md">
        <Text variant="h3">Header Section</Text>
      </Box>
      
      <Box row justifyContent="space-between" marginBottom="md">
        <Box backgroundColor="primary" padding="sm" flex={1} marginRight="sm">
          <Text color="white">Sidebar</Text>
        </Box>
        
        <Box backgroundColor="surface" padding="md" flex={2}>
          <Text>Main Content Area</Text>
          <Box marginTop="md" row>
            <Box 
              backgroundColor="success" 
              padding="sm" 
              marginRight="sm"
              center
            >
              <Text>Card 1</Text>
            </Box>
            <Box 
              backgroundColor="warning" 
              padding="sm"
              center
            >
              <Text>Card 2</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      
      <Box backgroundColor="secondary" padding="sm">
        <Text color="white" center>Footer</Text>
      </Box>
    </Box>
  ),
}; 