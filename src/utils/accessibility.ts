/**
 * Accessibility utilities for UI components
 */

import { AccessibilityProps } from 'react-native';

export const createAccessibilityProps = (
  label?: string,
  hint?: string,
  role?: string
): AccessibilityProps => ({
  accessible: true,
  accessibilityLabel: label,
  accessibilityHint: hint,
  accessibilityRole: role as any,
});

export const mergeAccessibilityProps = (
  baseProps: AccessibilityProps,
  overrideProps: AccessibilityProps
): AccessibilityProps => ({
  ...baseProps,
  ...overrideProps,
});

export const disableAccessibility = (): AccessibilityProps => ({
  accessible: false,
  accessibilityElementsHidden: true,
}); 