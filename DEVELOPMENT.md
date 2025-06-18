# Development Guide

This guide provides instructions for developers who want to contribute to or use the `@duyluu/ui-components` library.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/luubui/fonos-components.git
cd fonos-components/packages/ui-components
```

2. Install dependencies:
```bash
npm install
```

## Development Workflow

### Directory Structure

```
@duyluu/ui-components/
├── src/
│   ├── components/
│   │   ├── Component/
│   │   │   ├── Component.tsx            # Main component implementation
│   │   │   ├── hooks/                  
│   │   │   │   └── useComponentStyles.ts # Styling logic
│   │   │   ├── index.ts                 # Export file
│   │   │   └── constants.ts             # (optional) Component-specific constants
│   │   └── index.ts                     # Main export file
│   ├── utils/                           # Shared utilities
│   ├── theme/                           # Theme integration
│   ├── types/                           # TypeScript types
│   └── index.ts                         # Package entry point
├── __tests__/                           # Test files
├── dist/                                # Build output (generated)
├── package.json
├── tsconfig.json
└── rollup.config.js
```

### Commands

```bash
# Build the package
npm run build

# Watch mode for development
npm run build:watch

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Watch tests during development
npm run test:watch

# TypeScript checks
npm run type-check

# Lint code
npm run lint
```

## Component Development Guidelines

### Component Architecture

Each component follows a consistent architecture pattern:

1. **Component File (Component.tsx)**: Contains the main React component implementation
2. **Styling Hook (useComponentStyles.ts)**: Contains the styling logic and leverages the theme
3. **Index File (index.ts)**: Exports the component and its types
4. **Tests (Component.test.tsx)**: Unit tests for the component

### Creating a New Component

1. Create a new directory in `src/components/` for your component
2. Create the component files following the architecture pattern
3. Add tests for your component in `__tests__/` or alongside your component
4. Export the component in `src/components/index.ts`

### Example Component

```tsx
// Box.tsx
import React, { memo } from 'react';
import { View } from 'react-native';
import { useBoxStyles } from './hooks/useBoxStyles';

export interface BoxProps {
  // Define your component props...
}

const Box: React.FC<BoxProps> = ({ children, style, ...props }) => {
  const boxStyles = useBoxStyles(props);
  
  return (
    <View style={[boxStyles, style]} {...props}>
      {children}
    </View>
  );
};

export default memo(Box);

// hooks/useBoxStyles.ts
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../../../theme/mock-theme';

export const useBoxStyles = (props) => {
  const theme = useTheme();
  return useMemo(() => {
    // Return styles based on props and theme
  }, [props, theme]);
};

// index.ts
export { default } from './Box';
export type { BoxProps } from './Box';
```

## Testing Guidelines

### Unit Tests

Each component should have thorough unit tests covering:

1. Component rendering
2. Props behavior
3. User interactions
4. Accessibility features

### Example Test

```tsx
// Box.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import Box from '../src/components/Box';

describe('Box Component', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <Box>
        <Text>Test Content</Text>
      </Box>
    );
    
    expect(getByText('Test Content')).toBeTruthy();
  });
});
```

## Theme Integration

Components should use the theme system for styling:

```tsx
const useComponentStyles = (props) => {
  const theme = useTheme();
  
  return useMemo(() => {
    return StyleSheet.create({
      container: {
        backgroundColor: theme.colors[props.backgroundColor],
        padding: theme.spacing[props.padding],
        // other styles based on theme
      },
    });
  }, [theme, props]);
};
```

## Performance Optimization

1. **Memoize Components**: Use `React.memo()` for pure components
2. **Optimize Styles**: Use `useMemo` for style calculations
3. **Avoid Unnecessary Renders**: Optimize dependent arrays for hooks
4. **Lazy Loading**: Consider lazy loading for complex components

## Accessibility

1. **WCAG Compliance**: Follow WCAG 2.1 AA standards
2. **Screen Reader Support**: Use proper roles and labels
3. **Focus Management**: Ensure proper keyboard navigation
4. **Color Contrast**: Maintain 4.5:1 contrast ratio for text
5. **Touch Targets**: Ensure touch targets are at least 44x44px

## Building for Production

```bash
# Build for production
npm run build

# Test the production build
npm run test:coverage

# Pack the library for local testing
npm pack
```

## Release Process

1. Update version in package.json
2. Run tests and build: `npm test && npm run build`
3. Commit changes with version bump
4. Tag the release: `git tag v1.0.0`
5. Push changes and tags: `git push && git push --tags`
6. Publish to npm: `npm publish`

## Documentation

Document components using standard JSDoc comments:

```typescript
/**
 * Box component - A flexible layout primitive
 * @param {BoxProps} props - The component props
 * @returns {React.ReactElement} The rendered component
 */
const Box: React.FC<BoxProps> = (props) => {
  // Implementation
};
```

## Troubleshooting

### Common Issues

1. **Styling Inconsistencies**: Ensure theme is properly connected
2. **Type Errors**: Run `npm run type-check` to identify and fix type issues
3. **Test Failures**: Check for snapshot updates or mock issues
4. **Build Errors**: Verify import paths and file exports

## License

MIT 