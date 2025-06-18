/**
 * Performance optimization utilities
 */

import { useMemo, useCallback } from 'react';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const useOptimizedStyle = <T extends ViewStyle | TextStyle>(
  styleFactory: () => T,
  dependencies: React.DependencyList
): T => {
  return useMemo(styleFactory, dependencies);
};

export const useOptimizedCallback = <T extends (...args: any[]) => any>(
  callback: T,
  dependencies: React.DependencyList
): T => {
  return useCallback(callback, dependencies);
};

export const createStyleSheet = <T extends Record<string, ViewStyle | TextStyle>>(
  styles: T
): T => {
  return StyleSheet.create(styles);
};

export const mergeStyles = (
  baseStyle: ViewStyle | TextStyle,
  ...additionalStyles: (ViewStyle | TextStyle | undefined | null | false)[]
): ViewStyle | TextStyle => {
  return [baseStyle, ...additionalStyles.filter(Boolean)];
}; 