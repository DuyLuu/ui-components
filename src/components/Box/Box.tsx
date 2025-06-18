/**
 * Box - Layout primitive component with theme integration
 */

import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { BoxProps } from '../../types/components';
import { useBoxStyles } from './hooks/useBoxStyles';

const Box: React.FC<BoxProps> = ({
  children,
  style,
  testID,
  
  // Layout props
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  alignSelf,
  
  // Spacing props
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
  
  // Theme colors
  backgroundColor,
  borderColor,
  
  // Convenience props
  center,
  row,
  column,
  shadow,
  
  ...rest
}) => {
  const boxStyles = useBoxStyles({
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
  });

  return (
    <View
      style={[boxStyles, style]}
      testID={testID}
      {...rest}
    >
      {children}
    </View>
  );
};

export default memo(Box); 