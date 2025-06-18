/**
 * useSeparatorStyles - Hook for generating Separator component styles
 */
import { ViewStyle } from 'react-native';
interface SeparatorStyleProps {
    orientation: 'horizontal' | 'vertical';
    thickness: number;
    length?: number | string;
    color?: string;
    marginHorizontal?: number;
    marginVertical?: number;
}
export declare const useSeparatorStyles: (props: SeparatorStyleProps) => ViewStyle;
export {};
//# sourceMappingURL=useSeparatorStyles.d.ts.map