/**
 * useTextStyles - Hook for generating Text component styles
 */

import { useMemo } from 'react';
import { TextStyle } from 'react-native';
import { TextProps } from '../../../types/components';

// Mock theme for now - will be replaced with actual theme integration
const mockTheme = {
  colors: {
    primary: '#F47D42',
    secondary: '#1a3154',
    background: '#F3F8FC',
    surface: '#ffffff',
    text: '#1A1C20',
    light: '#ffffff',
    dark: '#121212',
    gray: '#8E8E93',
    danger: '#FF3B30',
    success: '#34C759',
    warning: '#FF9500',
  },
  typography: {
    h1: { fontSize: 32, lineHeight: 40, fontWeight: 'bold' as const },
    h2: { fontSize: 28, lineHeight: 36, fontWeight: 'bold' as const },
    h3: { fontSize: 24, lineHeight: 32, fontWeight: 'bold' as const },
    h4: { fontSize: 20, lineHeight: 28, fontWeight: 'bold' as const },
    body1: { fontSize: 16, lineHeight: 24, fontWeight: 'regular' as const },
    body2: { fontSize: 14, lineHeight: 20, fontWeight: 'regular' as const },
    caption: { fontSize: 12, lineHeight: 16, fontWeight: 'regular' as const },
    button: { fontSize: 16, lineHeight: 20, fontWeight: 'medium' as const },
    overline: { fontSize: 10, lineHeight: 16, fontWeight: 'medium' as const },
  },
};

type TextStyleProps = Pick<TextProps, 
  | 'variant' 
  | 'color' 
  | 'weight' 
  | 'align' 
  | 'transform' 
  | 'center' 
  | 'bold' 
  | 'italic' 
  | 'underline' 
  | 'strikethrough'
>;

export const useTextStyles = (props: TextStyleProps): TextStyle => {
  return useMemo(() => {
    const styles: TextStyle = {};

    // Apply variant styles
    if (props.variant && mockTheme.typography[props.variant]) {
      const variantStyle = mockTheme.typography[props.variant];
      styles.fontSize = variantStyle.fontSize;
      styles.lineHeight = variantStyle.lineHeight;
      
      // Map font weight to React Native weight
      const weightMap = {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      } as const;
      
      styles.fontWeight = weightMap[variantStyle.fontWeight] || '400';
    }

    // Apply color
    if (props.color && mockTheme.colors[props.color]) {
      styles.color = mockTheme.colors[props.color];
    } else {
      styles.color = mockTheme.colors.text; // Default color
    }

    // Apply weight override
    if (props.weight) {
      const weightMap = {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      } as const;
      styles.fontWeight = weightMap[props.weight];
    }

    // Apply text alignment
    if (props.align) {
      styles.textAlign = props.align;
    }

    // Apply text transform
    if (props.transform && props.transform !== 'none') {
      styles.textTransform = props.transform;
    }

    // Convenience props
    if (props.center) {
      styles.textAlign = 'center';
    }
    if (props.bold) {
      styles.fontWeight = '700';
    }
    if (props.italic) {
      styles.fontStyle = 'italic';
    }
    if (props.underline) {
      styles.textDecorationLine = 'underline';
    }
    if (props.strikethrough) {
      styles.textDecorationLine = 'line-through';
    }
    if (props.underline && props.strikethrough) {
      styles.textDecorationLine = 'underline line-through';
    }

    return styles;
  }, [
    props.variant,
    props.color,
    props.weight,
    props.align,
    props.transform,
    props.center,
    props.bold,
    props.italic,
    props.underline,
    props.strikethrough,
  ]);
}; 