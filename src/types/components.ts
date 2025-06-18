/**
 * Component types and interfaces
 */

import { ViewStyle, TextStyle, TouchableOpacityProps, ViewProps, TextProps as RNTextProps } from 'react-native';
import { PropsWithChildren } from 'react';
import { ColorKey, SpacingKey, TypographyVariant, FontWeight } from './theme';

export interface BaseComponentProps {
  testID?: string;
}

// Box component types
export interface BoxProps extends ViewProps, PropsWithChildren, BaseComponentProps {
  // Layout props
  flex?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  alignSelf?: 'auto' | 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  
  // Spacing props
  padding?: SpacingKey;
  paddingHorizontal?: SpacingKey;
  paddingVertical?: SpacingKey;
  paddingTop?: SpacingKey;
  paddingBottom?: SpacingKey;
  paddingLeft?: SpacingKey;
  paddingRight?: SpacingKey;
  
  margin?: SpacingKey;
  marginHorizontal?: SpacingKey;
  marginVertical?: SpacingKey;
  marginTop?: SpacingKey;
  marginBottom?: SpacingKey;
  marginLeft?: SpacingKey;
  marginRight?: SpacingKey;
  
  // Theme colors
  backgroundColor?: ColorKey;
  borderColor?: ColorKey;
  
  // Convenience props
  center?: boolean;
  row?: boolean;
  column?: boolean;
  shadow?: boolean;
}

// BoxStyleProps is used by the useBoxStyles hook
export type BoxStyleProps = Omit<BoxProps, keyof BaseComponentProps | 'children' | 'style'>;

// Text component types
export interface TextProps extends RNTextProps, BaseComponentProps {
  variant?: TypographyVariant;
  color?: ColorKey;
  weight?: FontWeight;
  align?: 'left' | 'center' | 'right' | 'justify';
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  
  // Convenience props
  center?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
}

// Button component types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends TouchableOpacityProps, BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  
  // Content
  title?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  
  // States
  loading?: boolean;
  disabled?: boolean;
  
  // Styling
  fullWidth?: boolean;
  rounded?: boolean;
}

// Icon component types
export interface IconProps extends BaseComponentProps {
  name: string;
  size?: number;
  color?: ColorKey;
  style?: ViewStyle;
} 