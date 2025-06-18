/**
 * useBoxStyles - Hook for generating Box component styles
 */

import { useMemo } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { useTheme, ColorKey, SpacingKey } from '../../../theme/mock-theme';

interface BoxStyleProps {
  backgroundColor?: ColorKey;
  borderColor?: ColorKey;
  padding?: SpacingKey;
  margin?: SpacingKey;
  paddingHorizontal?: SpacingKey;
  paddingVertical?: SpacingKey;
  marginHorizontal?: SpacingKey;
  marginVertical?: SpacingKey;
  flex?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  center?: boolean;
  row?: boolean;
  column?: boolean;
}

export const useBoxStyles = (props: BoxStyleProps) => {
  const theme = useTheme();

  return useMemo(() => {
    const styles: ViewStyle = {};

    // Layout props
    if (props.flex !== undefined) {
      styles.flex = props.flex;
    }

    if (props.flexDirection) {
      styles.flexDirection = props.flexDirection;
    }

    if (props.justifyContent) {
      styles.justifyContent = props.justifyContent;
    }

    if (props.alignItems) {
      styles.alignItems = props.alignItems;
    }

    // Convenience props
    if (props.center) {
      styles.justifyContent = 'center';
      styles.alignItems = 'center';
    }

    if (props.row) {
      styles.flexDirection = 'row';
    }

    if (props.column) {
      styles.flexDirection = 'column';
    }

    // Spacing props
    if (props.padding) {
      styles.padding = theme.spacing[props.padding];
    }

    if (props.margin) {
      styles.margin = theme.spacing[props.margin];
    }

    if (props.paddingHorizontal) {
      styles.paddingHorizontal = theme.spacing[props.paddingHorizontal];
    }

    if (props.paddingVertical) {
      styles.paddingVertical = theme.spacing[props.paddingVertical];
    }

    if (props.marginHorizontal) {
      styles.marginHorizontal = theme.spacing[props.marginHorizontal];
    }

    if (props.marginVertical) {
      styles.marginVertical = theme.spacing[props.marginVertical];
    }

    // Color props
    if (props.backgroundColor) {
      styles.backgroundColor = theme.colors[props.backgroundColor];
    }

    if (props.borderColor) {
      styles.borderColor = theme.colors[props.borderColor];
    }

    return StyleSheet.create({ container: styles }).container;
  }, [theme, props]);
}; 