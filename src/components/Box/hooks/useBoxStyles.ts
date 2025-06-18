/**
 * useBoxStyles - Hook for generating Box component styles
 */

import { StyleSheet } from 'react-native';
import { mockTheme, useTheme } from '../../../theme/mock-theme';
import { BoxStyleProps } from '../../../types/components';

export const useBoxStyles = ({
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  alignSelf,
  padding,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  backgroundColor,
  borderColor,
  center,
  row,
  column,
  shadow,
}: BoxStyleProps) => {
  const theme = useTheme();
  const { spacing, colors } = theme;

  return StyleSheet.create({
    box: {
      flex: flex,
      flexDirection: row ? 'row' : column ? 'column' : flexDirection,
      justifyContent: center ? 'center' : justifyContent,
      alignItems: center ? 'center' : alignItems,
      alignSelf: alignSelf,
      padding: padding ? spacing[padding as keyof typeof spacing] : undefined,
      paddingHorizontal: paddingHorizontal ? spacing[paddingHorizontal as keyof typeof spacing] : undefined,
      paddingVertical: paddingVertical ? spacing[paddingVertical as keyof typeof spacing] : undefined,
      paddingTop: paddingTop ? spacing[paddingTop as keyof typeof spacing] : undefined,
      paddingBottom: paddingBottom ? spacing[paddingBottom as keyof typeof spacing] : undefined,
      paddingLeft: paddingLeft ? spacing[paddingLeft as keyof typeof spacing] : undefined,
      paddingRight: paddingRight ? spacing[paddingRight as keyof typeof spacing] : undefined,
      margin: margin ? spacing[margin as keyof typeof spacing] : undefined,
      marginHorizontal: marginHorizontal ? spacing[marginHorizontal as keyof typeof spacing] : undefined,
      marginVertical: marginVertical ? spacing[marginVertical as keyof typeof spacing] : undefined,
      marginTop: marginTop ? spacing[marginTop as keyof typeof spacing] : undefined,
      marginBottom: marginBottom ? spacing[marginBottom as keyof typeof spacing] : undefined,
      marginLeft: marginLeft ? spacing[marginLeft as keyof typeof spacing] : undefined,
      marginRight: marginRight ? spacing[marginRight as keyof typeof spacing] : undefined,
      backgroundColor: backgroundColor ? colors[backgroundColor as keyof typeof colors] : undefined,
      borderColor: borderColor ? colors[borderColor as keyof typeof colors] : undefined,
      ...(shadow ? {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
      } : {})
    }
  }).box;
}; 