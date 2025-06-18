/**
 * Separator - Simple divider component
 */

import React, { memo } from 'react';
import { View } from 'react-native';
import { useSeparatorStyles } from './hooks/useSeparatorStyles';

export interface SeparatorProps {
  testID?: string;
  style?: any;
  
  // Orientation
  orientation?: 'horizontal' | 'vertical';
  
  // Sizing
  thickness?: number;
  length?: number | string;
  
  // Theme
  color?: string;
  
  // Spacing
  marginHorizontal?: number;
  marginVertical?: number;
}

const Separator: React.FC<SeparatorProps> = ({
  testID,
  style,
  orientation = 'horizontal',
  thickness = 1,
  length,
  color,
  marginHorizontal,
  marginVertical,
}) => {
  const separatorStyle = useSeparatorStyles({
    orientation,
    thickness,
    length,
    color,
    marginHorizontal,
    marginVertical,
  });

  return (
    <View
      style={[separatorStyle, style]}
      testID={testID}
    />
  );
};

export default memo(Separator); 