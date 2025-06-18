/**
 * Theme integration utilities
 */
import { SpacingKey, ColorKey } from '../types/theme';
export declare const isValidSpacingKey: (key: string) => key is SpacingKey;
export declare const isValidColorKey: (key: string) => key is ColorKey;
export declare const getThemeValue: <T>(themeObject: Record<string, T>, key: string | undefined, fallback: T) => T;
export declare const responsive: (value: number, isTablet?: boolean) => number;
//# sourceMappingURL=theme.d.ts.map