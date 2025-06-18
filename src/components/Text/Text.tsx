/**
 * Text - Typography component with theme integration
 */

import React, { memo } from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { TextProps } from '../../types/components';
import { useTextStyles } from './hooks/useTextStyles';

const Text: React.FC<TextProps> = ({
  children,
  style,
  testID,
  
  // Typography props
  variant = 'body1',
  color,
  weight,
  align,
  transform,
  
  // Convenience props
  center,
  bold,
  italic,
  underline,
  strikethrough,
  
  ...rest
}) => {
  const textStyles = useTextStyles({
    variant,
    color,
    weight,
    align,
    transform,
    center,
    bold,
    italic,
    underline,
    strikethrough,
  });

  return (
    <RNText
      style={[textStyles, style]}
      testID={testID}
      allowFontScaling={false}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default memo(Text); 