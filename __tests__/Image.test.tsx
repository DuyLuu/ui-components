/**
 * Image Component Tests
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Image } from '../src/components';

describe('Image Component', () => {
  const mockImageSource = { uri: 'https://example.com/image.jpg' };

  it('should render image with source correctly', () => {
    const { getByTestId } = render(
      <Image testID="test-image" source={mockImageSource} />
    );
    
    expect(getByTestId('test-image')).toBeTruthy();
  });

  it('should apply width and height styles', () => {
    const { getByTestId } = render(
      <Image 
        testID="sized-image" 
        source={mockImageSource}
        width={200}
        height={150}
      />
    );
    
    const image = getByTestId('sized-image');
    expect(image.props.style).toMatchObject(
      expect.objectContaining({
        width: 200,
        height: 150,
      })
    );
  });

  it('should apply aspect ratio correctly', () => {
    const { getByTestId } = render(
      <Image 
        testID="aspect-image" 
        source={mockImageSource}
        aspectRatio={1.5}
      />
    );
    
    const image = getByTestId('aspect-image');
    expect(image.props.style).toMatchObject(
      expect.objectContaining({
        aspectRatio: 1.5,
      })
    );
  });

  it('should apply border radius correctly', () => {
    const { getByTestId } = render(
      <Image 
        testID="rounded-image" 
        source={mockImageSource}
        borderRadius={10}
      />
    );
    
    const image = getByTestId('rounded-image');
    expect(image.props.style).toMatchObject(
      expect.objectContaining({
        borderRadius: 10,
      })
    );
  });

  it('should show fallback text on error', () => {
    const { getByTestId, getByText } = render(
      <Image 
        testID="error-image" 
        source={mockImageSource}
        fallbackText="Failed to load"
      />
    );
    
    const image = getByTestId('error-image');
    fireEvent(image, 'error');
    
    expect(getByTestId('error-image-fallback')).toBeTruthy();
    expect(getByText('Failed to load')).toBeTruthy();
  });

  it('should show custom fallback component on error', () => {
    const CustomFallback = () => <Text>Custom Fallback</Text>;
    
    const { getByTestId, getByText } = render(
      <Image 
        testID="custom-fallback-image" 
        source={mockImageSource}
        fallback={<CustomFallback />}
      />
    );
    
    const image = getByTestId('custom-fallback-image');
    fireEvent(image, 'error');
    
    expect(getByText('Custom Fallback')).toBeTruthy();
  });

  it('should show loading state when enabled', () => {
    const { getByTestId, getByText } = render(
      <Image 
        testID="loading-image" 
        source={mockImageSource}
        showLoading
        loadingText="Loading image..."
      />
    );
    
    const image = getByTestId('loading-image');
    fireEvent(image, 'loadStart');
    
    expect(getByTestId('loading-image-loading')).toBeTruthy();
    expect(getByText('Loading image...')).toBeTruthy();
  });

  it('should handle onLoad callback', () => {
    const onLoad = jest.fn();
    const { getByTestId } = render(
      <Image 
        testID="callback-image" 
        source={mockImageSource}
        onLoad={onLoad}
      />
    );
    
    const image = getByTestId('callback-image');
    fireEvent(image, 'load');
    
    expect(onLoad).toHaveBeenCalledTimes(1);
  });

  it('should handle onError callback', () => {
    const onError = jest.fn();
    const { getByTestId } = render(
      <Image 
        testID="error-callback-image" 
        source={mockImageSource}
        onError={onError}
      />
    );
    
    const image = getByTestId('error-callback-image');
    fireEvent(image, 'error');
    
    expect(onError).toHaveBeenCalledTimes(1);
  });
}); 