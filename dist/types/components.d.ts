/**
 * Component types and interfaces
 */
import { ViewStyle, TouchableOpacityProps, ViewProps, TextProps as RNTextProps } from 'react-native';
import { PropsWithChildren } from 'react';
import { ColorKey, SpacingKey, TypographyVariant, FontWeight } from './theme';
export interface BaseComponentProps {
    testID?: string;
}
export interface BoxProps extends ViewProps, PropsWithChildren, BaseComponentProps {
    flex?: number;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    alignSelf?: 'auto' | 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
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
    backgroundColor?: ColorKey;
    borderColor?: ColorKey;
    center?: boolean;
    row?: boolean;
    column?: boolean;
    shadow?: boolean;
}
export interface TextProps extends RNTextProps, BaseComponentProps {
    variant?: TypographyVariant;
    color?: ColorKey;
    weight?: FontWeight;
    align?: 'left' | 'center' | 'right' | 'justify';
    transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
    center?: boolean;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
}
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';
export interface ButtonProps extends TouchableOpacityProps, BaseComponentProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    title?: string;
    icon?: string;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    rounded?: boolean;
}
export interface IconProps extends BaseComponentProps {
    name: string;
    size?: number;
    color?: ColorKey;
    style?: ViewStyle;
}
//# sourceMappingURL=components.d.ts.map