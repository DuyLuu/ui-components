/**
 * useButtonStyles - Hook for generating Button component styles
 */
import { ViewStyle, TextStyle } from 'react-native';
import { ButtonProps } from '../../../types/components';
type ButtonStyleProps = Pick<ButtonProps, 'variant' | 'size' | 'loading' | 'disabled' | 'fullWidth' | 'rounded'>;
interface ButtonStyles {
    containerStyle: ViewStyle;
    textStyle: TextStyle;
    iconStyle: TextStyle;
}
export declare const useButtonStyles: (props: ButtonStyleProps) => ButtonStyles;
export {};
//# sourceMappingURL=useButtonStyles.d.ts.map