/**
 * useGradientStyles - Hook for generating GradientView component styles
 */
import { ViewStyle } from 'react-native';
interface GradientStyleProps {
    colors: string[];
    direction?: 'horizontal' | 'vertical' | 'diagonal';
    start?: {
        x: number;
        y: number;
    };
    end?: {
        x: number;
        y: number;
    };
    locations?: number[];
}
export declare const useGradientStyles: (props: GradientStyleProps) => ViewStyle;
export {};
//# sourceMappingURL=useGradientStyles.d.ts.map