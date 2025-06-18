/**
 * Button - Interactive component with variants and states
 */

import React, { memo } from 'react';
import { TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { ButtonProps } from '../../types/components';
import { useButtonStyles } from './hooks/useButtonStyles';
import Text from '../Text';
import Box from '../Box';

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  testID,
  
  // Button props
  variant = 'primary',
  size = 'medium',
  title,
  icon,
  iconPosition = 'left',
  
  // States
  loading = false,
  disabled = false,
  
  // Styling
  fullWidth = false,
  rounded = false,
  
  // Event handlers
  onPress,
  
  ...rest
}) => {
  const { containerStyle, textStyle, iconStyle } = useButtonStyles({
    variant,
    size,
    loading,
    disabled,
    fullWidth,
    rounded,
  });

  const isDisabled = disabled || loading;

  const renderContent = () => {
    if (loading) {
      return (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? '#ffffff' : '#1A1C20'}
          testID={`${testID}-loading`}
        />
      );
    }

    if (title && icon) {
      return (
        <Box row center>
          {iconPosition === 'left' && (
            <Box marginRight="s">
              {/* Icon placeholder - will be implemented with Icon component */}
              <Text style={iconStyle}>{icon}</Text>
            </Box>
          )}
          <Text style={textStyle}>{title}</Text>
          {iconPosition === 'right' && (
            <Box marginLeft="s">
              {/* Icon placeholder - will be implemented with Icon component */}
              <Text style={iconStyle}>{icon}</Text>
            </Box>
          )}
        </Box>
      );
    }

    if (title) {
      return <Text style={textStyle}>{title}</Text>;
    }

    if (icon) {
      return (
        <Box center>
          {/* Icon placeholder - will be implemented with Icon component */}
          <Text style={iconStyle}>{icon}</Text>
        </Box>
      );
    }

    return children;
  };

  return (
    <TouchableOpacity
      style={[containerStyle, style]}
      onPress={isDisabled ? undefined : onPress}
      disabled={isDisabled}
      testID={testID}
      activeOpacity={0.8}
      {...rest}
    >
      <Box center padding="m">
        {renderContent()}
      </Box>
    </TouchableOpacity>
  );
};

export default memo(Button); 