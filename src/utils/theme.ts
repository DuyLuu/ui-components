/**
 * Theme integration utilities
 */

import { SpacingKey, ColorKey } from '../types/theme';

// Type guards for theme keys
export const isValidSpacingKey = (key: string): key is SpacingKey => {
  return ['xs', 's', 'm', 'l', 'xl', 'xxl'].includes(key);
};

export const isValidColorKey = (key: string): key is ColorKey => {
  return [
    'primary', 'secondary', 'background', 'surface', 'text',
    'light', 'dark', 'gray', 'danger', 'success', 'warning'
  ].includes(key);
};

// Utility to get theme value with fallback
export const getThemeValue = <T>(
  themeObject: Record<string, T>,
  key: string | undefined,
  fallback: T
): T => {
  if (!key || !(key in themeObject)) {
    return fallback;
  }
  return themeObject[key] as T;
};

// Responsive utility placeholder (can be enhanced later)
export const responsive = (value: number, isTablet = false): number => {
  return isTablet ? value * 1.2 : value;
}; 