/**
 * GradientView - Gradient background component
 */

import React, { memo } from 'react';
import { View, ViewStyle } from 'react-native';
import { useGradientStyles } from './hooks/useGradientStyles';

export interface GradientViewProps {
  testID?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
  
  // Gradient colors
  colors: string[];
  
  // Direction (simplified for now)
  direction?: 'horizontal' | 'vertical' | 'diagonal';
  
  // Advanced gradient props (for future LinearGradient integration)
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
}

const GradientView: React.FC<GradientViewProps> = ({
  testID,
  style,
  children,
  colors,
  direction = 'horizontal',
  start,
  end,
  locations,
  ...rest
}) => {
  const gradientStyle = useGradientStyles({
    colors,
    direction,
    start,
    end,
    locations,
  });

  // If only one color or no colors, render as solid color
  if (!colors || colors.length < 2) {
    return (
      <View
        style={[
          gradientStyle,
          style,
          { backgroundColor: colors?.[0] || 'transparent' }
        ]}
        testID={testID}
        {...rest}
      >
        {children}
      </View>
    );
  }

  // For now, render with first color as fallback
  // In a real implementation, this would use LinearGradient from expo-linear-gradient
  return (
    <View
      style={[gradientStyle, style]}
      testID={testID}
      {...rest}
    >
      {children}
    </View>
  );
};

export default memo(GradientView); 