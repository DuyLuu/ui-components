/**
 * Text Component Tests
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from '../src/components';

describe('Text Component', () => {
  it('should render text content correctly', () => {
    const { getByText } = render(
      <Text testID="test-text">Hello World</Text>
    );
    
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('should apply variant styles correctly', () => {
    const { getByTestId } = render(
      <Text testID="h1-text" variant="h1">
        Heading Text
      </Text>
    );
    
    const text = getByTestId('h1-text');
    expect(text.props.style).toMatchObject(
      expect.objectContaining({
        fontSize: 32,
        lineHeight: 40,
        fontWeight: '700',
      })
    );
  });

  it('should apply color correctly', () => {
    const { getByTestId } = render(
      <Text testID="colored-text" color="primary">
        Colored Text
      </Text>
    );
    
    const text = getByTestId('colored-text');
    expect(text.props.style).toMatchObject(
      expect.objectContaining({
        color: '#F47D42', // primary color
      })
    );
  });

  it('should apply center prop correctly', () => {
    const { getByTestId } = render(
      <Text testID="centered-text" center>
        Centered Text
      </Text>
    );
    
    const text = getByTestId('centered-text');
    expect(text.props.style).toMatchObject(
      expect.objectContaining({
        textAlign: 'center',
      })
    );
  });

  it('should apply bold prop correctly', () => {
    const { getByTestId } = render(
      <Text testID="bold-text" bold>
        Bold Text
      </Text>
    );
    
    const text = getByTestId('bold-text');
    expect(text.props.style).toMatchObject(
      expect.objectContaining({
        fontWeight: '700',
      })
    );
  });

  it('should disable font scaling by default', () => {
    const { getByTestId } = render(
      <Text testID="scaled-text">
        Non-scaling Text
      </Text>
    );
    
    const text = getByTestId('scaled-text');
    expect(text.props.allowFontScaling).toBe(false);
  });
}); 