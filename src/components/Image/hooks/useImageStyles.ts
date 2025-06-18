/**
 * useImageStyles - Hook for generating Image component styles
 */

import { useMemo } from 'react';
import { ImageStyle } from 'react-native';

interface ImageStyleProps {
  width?: number;
  height?: number;
  aspectRatio?: number;
  borderRadius?: number;
}

export const useImageStyles = (props: ImageStyleProps): ImageStyle => {
  return useMemo(() => {
    const style: ImageStyle = {};

    // Sizing
    if (props.width !== undefined) {
      style.width = props.width;
    }
    if (props.height !== undefined) {
      style.height = props.height;
    }
    if (props.aspectRatio !== undefined) {
      style.aspectRatio = props.aspectRatio;
    }

    // Border radius
    if (props.borderRadius !== undefined) {
      style.borderRadius = props.borderRadius;
    }

    return style;
  }, [
    props.width,
    props.height,
    props.aspectRatio,
    props.borderRadius,
  ]);
}; 