/**
 * Button Component Tests
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../src/components';

describe('Button Component', () => {
  it('should render title correctly', () => {
    const { getByText } = render(
      <Button testID="test-button" title="Click Me" />
    );
    
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('should handle press events', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Button testID="pressable-button" title="Press Me" onPress={onPress} />
    );
    
    fireEvent.press(getByTestId('pressable-button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should show loading state', () => {
    const { getByTestId } = render(
      <Button testID="loading-button" title="Loading" loading />
    );
    
    expect(getByTestId('loading-button-loading')).toBeTruthy();
  });

  it('should be disabled when disabled prop is true', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Button testID="disabled-button" title="Disabled" disabled onPress={onPress} />
    );
    
    fireEvent.press(getByTestId('disabled-button'));
    expect(onPress).not.toHaveBeenCalled();
  });

  it('should be disabled when loading', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Button testID="loading-disabled-button" title="Loading" loading onPress={onPress} />
    );
    
    fireEvent.press(getByTestId('loading-disabled-button'));
    expect(onPress).not.toHaveBeenCalled();
  });

  it('should apply variant styles correctly', () => {
    const { getByTestId } = render(
      <Button testID="primary-button" title="Primary" variant="primary" />
    );
    
    const button = getByTestId('primary-button');
    expect(button.props.style).toMatchObject(
      expect.objectContaining({
        backgroundColor: '#F47D42', // primary color
      })
    );
  });

  it('should apply size styles correctly', () => {
    const { getByTestId } = render(
      <Button testID="large-button" title="Large" size="large" />
    );
    
    const button = getByTestId('large-button');
    expect(button.props.style).toMatchObject(
      expect.objectContaining({
        minHeight: 56, // large size height
      })
    );
  });

  it('should apply fullWidth correctly', () => {
    const { getByTestId } = render(
      <Button testID="full-width-button" title="Full Width" fullWidth />
    );
    
    const button = getByTestId('full-width-button');
    expect(button.props.style).toMatchObject(
      expect.objectContaining({
        width: '100%',
      })
    );
  });

  it('should render icon with title', () => {
    const { getByText } = render(
      <Button testID="icon-button" title="With Icon" icon="★" />
    );
    
    expect(getByText('With Icon')).toBeTruthy();
    expect(getByText('★')).toBeTruthy();
  });

  it('should render children when no title provided', () => {
    const { getByText } = render(
      <Button testID="children-button">
        <Text>Custom Content</Text>
      </Button>
    );
    
    expect(getByText('Custom Content')).toBeTruthy();
  });
}); 