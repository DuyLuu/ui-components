/**
 * Mock Theme for Development
 * This provides a complete theme structure for development and testing
 */

export interface ThemeColors {
  // Primary colors
  primary: string;
  primaryLight: string;
  primaryDark: string;
  
  // Secondary colors
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  
  // Status colors
  success: string;
  warning: string;
  error: string;
  info: string;
  
  // Text colors
  textPrimary: string;
  textSecondary: string;
  textDisabled: string;
  
  // Background colors
  background: string;
  backgroundSecondary: string;
  surface: string;
  
  // Border colors
  border: string;
  borderLight: string;
  
  // Other colors
  white: string;
  black: string;
  transparent: string;
}

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface ThemeTypography {
  h1: {
    fontSize: number;
    lineHeight: number;
    fontWeight: string;
  };
  h2: {
    fontSize: number;
    lineHeight: number;
    fontWeight: string;
  };
  h3: {
    fontSize: number;
    lineHeight: number;
    fontWeight: string;
  };
  h4: {
    fontSize: number;
    lineHeight: number;
    fontWeight: string;
  };
  body1: {
    fontSize: number;
    lineHeight: number;
    fontWeight: string;
  };
  body2: {
    fontSize: number;
    lineHeight: number;
    fontWeight: string;
  };
  caption: {
    fontSize: number;
    lineHeight: number;
    fontWeight: string;
  };
}

export interface Theme {
  colors: ThemeColors;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
}

export const mockTheme: Theme = {
  colors: {
    // Primary colors
    primary: '#007AFF',
    primaryLight: '#4DA3FF',
    primaryDark: '#0051CC',
    
    // Secondary colors
    secondary: '#5AC8FA',
    secondaryLight: '#8BD8FB',
    secondaryDark: '#2BA6F7',
    
    // Status colors
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#5AC8FA',
    
    // Text colors
    textPrimary: '#000000',
    textSecondary: '#666666',
    textDisabled: '#999999',
    
    // Background colors
    background: '#FFFFFF',
    backgroundSecondary: '#F8F9FA',
    surface: '#FFFFFF',
    
    // Border colors
    border: '#E1E5E9',
    borderLight: '#F1F3F5',
    
    // Other colors
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  typography: {
    h1: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 28,
      lineHeight: 36,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: '600',
    },
    h4: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: '600',
    },
    body1: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 'normal',
    },
    body2: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: 'normal',
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 'normal',
    },
  },
};

// Mock hook that returns the theme
export const useTheme = (): Theme => {
  return mockTheme;
};

// Type exports for convenience
export type ColorKey = keyof ThemeColors;
export type SpacingKey = keyof ThemeSpacing;
export type TypographyVariant = keyof ThemeTypography; 