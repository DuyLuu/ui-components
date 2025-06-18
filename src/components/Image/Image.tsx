/**
 * Image - Enhanced image component with fallback support
 */

import React, { memo, useState } from 'react';
import { Image as RNImage, ImageStyle, ViewStyle } from 'react-native';
import { useImageStyles } from './hooks/useImageStyles';
import Box from '../Box';
import Text from '../Text';

export interface ImageProps {
  testID?: string;
  style?: ImageStyle | ViewStyle;
  
  // Image source
  source: { uri: string } | number;
  
  // Sizing
  width?: number;
  height?: number;
  aspectRatio?: number;
  
  // Display options
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  
  // Fallback
  fallback?: React.ReactNode;
  fallbackText?: string;
  
  // Loading
  showLoading?: boolean;
  loadingText?: string;
  
  // Border and styling
  borderRadius?: number;
  
  // Event handlers
  onLoad?: () => void;
  onError?: () => void;
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
}

const Image: React.FC<ImageProps> = ({
  testID,
  style,
  source,
  width,
  height,
  aspectRatio,
  resizeMode = 'cover',
  fallback,
  fallbackText = 'Image unavailable',
  showLoading = false,
  loadingText = 'Loading...',
  borderRadius,
  onLoad,
  onError,
  onLoadStart,
  onLoadEnd,
  ...rest
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const imageStyles = useImageStyles({
    width,
    height,
    aspectRatio,
    borderRadius,
  });

  const handleLoadStart = () => {
    setLoading(true);
    setError(false);
    onLoadStart?.();
  };

  const handleLoad = () => {
    setLoading(false);
    setError(false);
    onLoad?.();
  };

  const handleLoadEnd = () => {
    setLoading(false);
    onLoadEnd?.();
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
    onError?.();
  };

  // Show fallback if error occurred
  if (error) {
    if (fallback) {
      return <>{fallback}</>;
    }
    
    return (
      <Box 
        center 
        style={[imageStyles, style]}
        backgroundColor="gray"
        testID={`${testID}-fallback`}
      >
        <Text variant="caption" color="light" center>
          {fallbackText}
        </Text>
      </Box>
    );
  }

  // Show loading state
  if (loading && showLoading) {
    return (
      <Box 
        center 
        style={[imageStyles, style]}
        backgroundColor="gray"
        testID={`${testID}-loading`}
      >
        <Text variant="caption" color="light" center>
          {loadingText}
        </Text>
      </Box>
    );
  }

  return (
    <RNImage
      source={source}
      style={[imageStyles, style as ImageStyle]}
      resizeMode={resizeMode}
      testID={testID}
      onLoadStart={handleLoadStart}
      onLoad={handleLoad}
      onLoadEnd={handleLoadEnd}
      onError={handleError}
      {...rest}
    />
  );
};

export default memo(Image); 