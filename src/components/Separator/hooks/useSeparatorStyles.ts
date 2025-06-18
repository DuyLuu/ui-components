/**
 * useSeparatorStyles - Hook for generating Separator component styles
 */

import { useMemo } from 'react';
import { ViewStyle } from 'react-native';

// Mock theme for now
const mockTheme = {
  colors: {
    border: '#E1E5E9',
    gray: '#8E8E93',
  },
};

interface SeparatorStyleProps {
  orientation: 'horizontal' | 'vertical';
  thickness: number;
  length?: number | string;
  color?: string;
  marginHorizontal?: number;
  marginVertical?: number;
}

export const useSeparatorStyles = (props: SeparatorStyleProps): ViewStyle => {
  return useMemo(() => {
    const style: ViewStyle = {};

    // Base color
    style.backgroundColor = props.color || mockTheme.colors.border;

    // Orientation and sizing
    if (props.orientation === 'horizontal') {
      style.height = props.thickness;
      style.width = props.length || '100%';
    } else {
      style.width = props.thickness;
      style.height = props.length || '100%';
    }

    // Spacing
    if (props.marginHorizontal !== undefined) {
      style.marginHorizontal = props.marginHorizontal;
    }
    if (props.marginVertical !== undefined) {
      style.marginVertical = props.marginVertical;
    }

    return style;
  }, [
    props.orientation,
    props.thickness,
    props.length,
    props.color,
    props.marginHorizontal,
    props.marginVertical,
  ]);
}; 