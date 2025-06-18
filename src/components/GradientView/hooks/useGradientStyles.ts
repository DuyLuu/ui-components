/**
 * useGradientStyles - Hook for generating GradientView component styles
 */

import { useMemo } from 'react';
import { ViewStyle } from 'react-native';

interface GradientStyleProps {
  colors: string[];
  direction?: 'horizontal' | 'vertical' | 'diagonal';
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
}

export const useGradientStyles = (props: GradientStyleProps): ViewStyle => {
  return useMemo(() => {
    const style: ViewStyle = {};

    // For now, use the first color as background
    // In a real implementation, this would generate proper gradient styles
    if (props.colors && props.colors.length > 0) {
      style.backgroundColor = props.colors[0];
    }

    // Add opacity overlay for gradient effect simulation
    if (props.colors && props.colors.length > 1) {
      // This is a simplified approach - real gradients would need LinearGradient
      // For now, we'll use the first color with some visual indication
      style.opacity = 0.9;
    }

    return style;
  }, [
    props.colors,
    props.direction,
    props.start,
    props.end,
    props.locations,
  ]);
}; 