# @duyluu/ui-components

A foundational UI component library for React Native applications built with performance, accessibility, and customization in mind.

## Features

- 🔍 **Typesafe**: Built with TypeScript for reliable development
- 🎨 **Themeable**: Seamless integration with `@duyluu/ui-theme`
- 🚀 **Performant**: Optimized components with memoization
- ♿ **Accessible**: WCAG-compliant focus states and screen reader support
- 📱 **Cross-Platform**: Works on iOS and Android

## Installation

```bash
npm install @duyluu/ui-components @duyluu/ui-theme
```

## Usage

### Basic Components

```jsx
import React from 'react';
import { Box, Text, Button } from '@duyluu/ui-components';
import { ThemeProvider } from '@duyluu/ui-theme';

const App = () => (
  <ThemeProvider>
    <Box padding="md" backgroundColor="background">
      <Text variant="h1" color="textPrimary">
        Hello World
      </Text>
      <Button 
        variant="primary" 
        title="Press Me" 
        onPress={() => console.log('Button pressed')} 
      />
    </Box>
  </ThemeProvider>
);

export default App;
```

## Core Components

### Box

A foundational layout component for creating flexible container layouts.

```jsx
import { Box } from '@duyluu/ui-components';

// Basic usage
<Box padding="md" backgroundColor="surface">
  {/* Content */}
</Box>

// Flexbox layout
<Box 
  flex={1}
  flexDirection="row"
  justifyContent="space-between"
  alignItems="center"
>
  {/* Content */}
</Box>

// Convenience props
<Box center row>
  {/* Centered row content */}
</Box>
```

### Text

Typography component with theme-based styling.

```jsx
import { Text } from '@duyluu/ui-components';

// Typography variants
<Text variant="h1">Heading 1</Text>
<Text variant="h2">Heading 2</Text>
<Text variant="body1">Body text</Text>
<Text variant="caption">Caption</Text>

// Styling
<Text color="primary" weight="bold" align="center">
  Styled Text
</Text>

// Convenience props
<Text center bold italic>
  Centered, bold, and italic text
</Text>
```

### Button

Interactive button component with multiple variants and states.

```jsx
import { Button } from '@duyluu/ui-components';

// Variants
<Button variant="primary" title="Primary Button" onPress={handlePress} />
<Button variant="secondary" title="Secondary Button" onPress={handlePress} />
<Button variant="outline" title="Outline Button" onPress={handlePress} />
<Button variant="ghost" title="Ghost Button" onPress={handlePress} />

// Sizes
<Button size="small" title="Small Button" />
<Button size="medium" title="Medium Button" />
<Button size="large" title="Large Button" />

// States
<Button loading title="Loading..." />
<Button disabled title="Disabled" />

// With icon
<Button icon="star" title="With Icon" />
<Button icon="star" iconPosition="right" title="Icon Right" />
```

### Separator

Simple divider component for visual separation.

```jsx
import { Separator } from '@duyluu/ui-components';

// Horizontal separator (default)
<Separator />

// Vertical separator
<Separator orientation="vertical" height={100} />

// Custom styling
<Separator 
  color="primary"
  thickness={2}
  marginVertical={16}
/>
```

### Image

Enhanced image component with loading and error states.

```jsx
import { Image } from '@duyluu/ui-components';

// Basic usage
<Image 
  source={{ uri: 'https://example.com/image.jpg' }}
  width={200}
  height={150}
/>

// With aspect ratio
<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  aspectRatio={16/9}
/>

// With loading and error states
<Image
  source={{ uri: 'https://example.com/image.jpg' }}
  showLoading
  loadingText="Loading image..."
  fallbackText="Failed to load image"
/>
```

### GradientView

Gradient background component with customization options.

```jsx
import { GradientView } from '@duyluu/ui-components';

// Basic usage
<GradientView
  colors={['#FF0000', '#0000FF']}
  direction="horizontal"
>
  <Text>Content inside gradient</Text>
</GradientView>

// Custom direction and positions
<GradientView
  colors={['#FF0000', '#00FF00', '#0000FF']}
  direction="diagonal"
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  locations={[0, 0.5, 1]}
/>
```

## Customization

Components can be customized through the theme system:

```jsx
import { ThemeProvider, createTheme } from '@duyluu/ui-theme';

// Create custom theme
const customTheme = createTheme({
  colors: {
    primary: '#FF0000',
    // ...other color overrides
  },
  spacing: {
    md: 20,
    // ...other spacing overrides
  },
});

// Apply custom theme
const App = () => (
  <ThemeProvider theme={customTheme}>
    {/* Your app content */}
  </ThemeProvider>
);
```

## Development

For contributing to this library, see [DEVELOPMENT.md](./DEVELOPMENT.md).

## License

MIT 