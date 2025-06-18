/**
 * useTextStyles - Hook for generating Text component styles
 */
import { TextStyle } from 'react-native';
import { TextProps } from '../../../types/components';
type TextStyleProps = Pick<TextProps, 'variant' | 'color' | 'weight' | 'align' | 'transform' | 'center' | 'bold' | 'italic' | 'underline' | 'strikethrough'>;
export declare const useTextStyles: (props: TextStyleProps) => TextStyle;
export {};
//# sourceMappingURL=useTextStyles.d.ts.map