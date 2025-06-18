/**
 * Core UI Components
 * 
 * This package provides foundational UI components for React Native applications.
 * All components are designed to be theme-aware and performance-optimized.
 */

// Layout Components
export { default as Box } from './Box';
export type { BoxProps } from './Box';

// Typography Components
export { default as Text } from './Text';
export type { TextProps } from './Text';

// Interactive Components
export { default as Button } from './Button';
export type { ButtonProps } from './Button';

// Media Components
// export { default as Icon } from './Icon';

// Utility Components
export { default as Separator } from './Separator';
export type { SeparatorProps } from './Separator';

// Image component
export { default as Image } from './Image';
export type { ImageProps } from './Image';

// GradientView component
export { default as GradientView } from './GradientView';
export type { GradientViewProps } from './GradientView';

// Export additional types
export type { 
  ButtonVariant, 
  ButtonSize 
} from '../types/components'; 