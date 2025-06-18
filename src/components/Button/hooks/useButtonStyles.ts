/**
 * useButtonStyles - Hook for generating Button component styles
 */

import { useMemo } from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { ButtonProps, ButtonVariant, ButtonSize } from '../../../types/components';

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
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },
};

type ButtonStyleProps = Pick<ButtonProps, 
  | 'variant' 
  | 'size' 
  | 'loading' 
  | 'disabled' 
  | 'fullWidth' 
  | 'rounded'
>;

interface ButtonStyles {
  containerStyle: ViewStyle;
  textStyle: TextStyle;
  iconStyle: TextStyle;
}

export const useButtonStyles = (props: ButtonStyleProps): ButtonStyles => {
  return useMemo(() => {
    const containerStyle: ViewStyle = {};
    const textStyle: TextStyle = {};
    const iconStyle: TextStyle = {};

    // Base button styles
    containerStyle.justifyContent = 'center';
    containerStyle.alignItems = 'center';
    containerStyle.borderRadius = props.rounded ? 25 : 8;
    containerStyle.overflow = 'hidden';

    // Size styles
    switch (props.size) {
      case 'small':
        containerStyle.minHeight = 36;
        containerStyle.paddingHorizontal = mockTheme.spacing.m;
        textStyle.fontSize = 14;
        textStyle.lineHeight = 20;
        break;
      case 'large':
        containerStyle.minHeight = 56;
        containerStyle.paddingHorizontal = mockTheme.spacing.l;
        textStyle.fontSize = 18;
        textStyle.lineHeight = 24;
        break;
      default: // medium
        containerStyle.minHeight = 48;
        containerStyle.paddingHorizontal = mockTheme.spacing.l;
        textStyle.fontSize = 16;
        textStyle.lineHeight = 20;
        break;
    }

    // Full width
    if (props.fullWidth) {
      containerStyle.width = '100%';
    }

    // Variant styles
    switch (props.variant) {
      case 'primary':
        containerStyle.backgroundColor = mockTheme.colors.primary;
        textStyle.color = mockTheme.colors.light;
        textStyle.fontWeight = '600';
        iconStyle.color = mockTheme.colors.light;
        // Add shadow for primary buttons
        containerStyle.shadowColor = '#000';
        containerStyle.shadowOffset = { width: 0, height: 2 };
        containerStyle.shadowOpacity = 0.1;
        containerStyle.shadowRadius = 4;
        containerStyle.elevation = 3;
        break;
      case 'secondary':
        containerStyle.backgroundColor = mockTheme.colors.surface;
        containerStyle.borderWidth = 1;
        containerStyle.borderColor = mockTheme.colors.gray;
        textStyle.color = mockTheme.colors.text;
        textStyle.fontWeight = '500';
        iconStyle.color = mockTheme.colors.text;
        break;
      case 'outline':
        containerStyle.backgroundColor = 'transparent';
        containerStyle.borderWidth = 1;
        containerStyle.borderColor = mockTheme.colors.primary;
        textStyle.color = mockTheme.colors.primary;
        textStyle.fontWeight = '500';
        iconStyle.color = mockTheme.colors.primary;
        break;
      case 'ghost':
        containerStyle.backgroundColor = 'transparent';
        textStyle.color = mockTheme.colors.primary;
        textStyle.fontWeight = '500';
        iconStyle.color = mockTheme.colors.primary;
        break;
      case 'danger':
        containerStyle.backgroundColor = mockTheme.colors.danger;
        textStyle.color = mockTheme.colors.light;
        textStyle.fontWeight = '600';
        iconStyle.color = mockTheme.colors.light;
        // Add shadow for danger buttons
        containerStyle.shadowColor = '#000';
        containerStyle.shadowOffset = { width: 0, height: 2 };
        containerStyle.shadowOpacity = 0.1;
        containerStyle.shadowRadius = 4;
        containerStyle.elevation = 3;
        break;
    }

    // Disabled state
    if (props.disabled || props.loading) {
      containerStyle.opacity = 0.6;
    }

    return {
      containerStyle,
      textStyle,
      iconStyle,
    };
  }, [
    props.variant,
    props.size,
    props.loading,
    props.disabled,
    props.fullWidth,
    props.rounded,
  ]);
}; 