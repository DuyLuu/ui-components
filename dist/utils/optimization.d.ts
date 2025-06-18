/**
 * Performance optimization utilities
 */
import { ViewStyle, TextStyle } from 'react-native';
export declare const useOptimizedStyle: <T extends ViewStyle | TextStyle>(styleFactory: () => T, dependencies: React.DependencyList) => T;
export declare const useOptimizedCallback: <T extends (...args: any[]) => any>(callback: T, dependencies: React.DependencyList) => T;
export declare const createStyleSheet: <T extends Record<string, ViewStyle | TextStyle>>(styles: T) => T;
export declare const mergeStyles: (baseStyle: ViewStyle | TextStyle, ...additionalStyles: (ViewStyle | TextStyle | undefined | null | false)[]) => ViewStyle | TextStyle;
//# sourceMappingURL=optimization.d.ts.map