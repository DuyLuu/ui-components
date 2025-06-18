/**
 * GradientView Component Tests
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import { GradientView } from '../src/components';

describe('GradientView Component', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <GradientView colors={['#FF0000', '#0000FF']}>
        <Text>Gradient Content</Text>
      </GradientView>
    );
    
    expect(getByText('Gradient Content')).toBeTruthy();
  });

  it('should apply testID correctly', () => {
    const { getByTestId } = render(
      <GradientView testID="test-gradient" colors={['#FF0000', '#0000FF']} />
    );
    
    expect(getByTestId('test-gradient')).toBeTruthy();
  });

  it('should render with single color as solid background', () => {
    const { getByTestId } = render(
      <GradientView testID="solid-gradient" colors={['#FF0000']} />
    );
    
    const gradientView = getByTestId('solid-gradient');
    expect(gradientView.props.style).toMatchObject(
      expect.objectContaining({
        backgroundColor: '#FF0000',
      })
    );
  });

  it('should handle empty colors array', () => {
    const { getByTestId } = render(
      <GradientView testID="empty-gradient" colors={[]} />
    );
    
    const gradientView = getByTestId('empty-gradient');
    expect(gradientView.props.style).toMatchObject(
      expect.objectContaining({
        backgroundColor: 'transparent',
      })
    );
  });

  it('should apply custom styles', () => {
    const customStyle = { padding: 20, margin: 10 };
    const { getByTestId } = render(
      <GradientView 
        testID="styled-gradient" 
        colors={['#FF0000', '#0000FF']}
        style={customStyle}
      />
    );
    
    const gradientView = getByTestId('styled-gradient');
    expect(gradientView.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining(customStyle)
      ])
    );
  });

  it('should handle different directions', () => {
    const { getByTestId } = render(
      <GradientView 
        testID="vertical-gradient" 
        colors={['#FF0000', '#0000FF']}
        direction="vertical"
      />
    );
    
    expect(getByTestId('vertical-gradient')).toBeTruthy();
  });

  it('should handle start and end props', () => {
    const { getByTestId } = render(
      <GradientView 
        testID="custom-gradient" 
        colors={['#FF0000', '#0000FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
    );
    
    expect(getByTestId('custom-gradient')).toBeTruthy();
  });

  it('should handle locations prop', () => {
    const { getByTestId } = render(
      <GradientView 
        testID="location-gradient" 
        colors={['#FF0000', '#00FF00', '#0000FF']}
        locations={[0, 0.5, 1]}
      />
    );
    
    expect(getByTestId('location-gradient')).toBeTruthy();
  });
}); 