/**
 * GradientView - Gradient background component
 */
import React from 'react';
import { ViewStyle } from 'react-native';
export interface GradientViewProps {
    testID?: string;
    style?: ViewStyle;
    children?: React.ReactNode;
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
declare const _default: React.NamedExoticComponent<GradientViewProps>;
export default _default;
//# sourceMappingURL=GradientView.d.ts.map