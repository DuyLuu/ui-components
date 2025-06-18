/**
 * Theme types for UI components
 */

export type ColorKey = 
  | 'primary' 
  | 'secondary' 
  | 'background' 
  | 'surface' 
  | 'text' 
  | 'light' 
  | 'dark' 
  | 'gray' 
  | 'danger' 
  | 'success' 
  | 'warning';

export type SpacingKey = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'body1' 
  | 'body2' 
  | 'caption' 
  | 'button' 
  | 'overline';

export type FontWeight = 
  | 'light' 
  | 'regular' 
  | 'medium' 
  | 'semibold' 
  | 'bold' 
  | 'extrabold';

export interface Theme {
  colors: Record<ColorKey, string>;
  spacing: Record<SpacingKey, number>;
  typography: Record<TypographyVariant, {
    fontSize: number;
    lineHeight: number;
    fontWeight: FontWeight;
    letterSpacing?: number;
  }>;
  borderRadius: {
    none: number;
    small: number;
    medium: number;
    large: number;
    full: number;
  };
} 