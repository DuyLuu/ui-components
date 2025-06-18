/**
 * Mock Theme for Development
 * This provides a complete theme structure for development and testing
 */
export interface ThemeColors {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    textPrimary: string;
    textSecondary: string;
    textDisabled: string;
    background: string;
    backgroundSecondary: string;
    surface: string;
    border: string;
    borderLight: string;
    white: string;
    black: string;
    transparent: string;
}
export interface ThemeSpacing {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
}
export interface ThemeTypography {
    h1: {
        fontSize: number;
        lineHeight: number;
        fontWeight: string;
    };
    h2: {
        fontSize: number;
        lineHeight: number;
        fontWeight: string;
    };
    h3: {
        fontSize: number;
        lineHeight: number;
        fontWeight: string;
    };
    h4: {
        fontSize: number;
        lineHeight: number;
        fontWeight: string;
    };
    body1: {
        fontSize: number;
        lineHeight: number;
        fontWeight: string;
    };
    body2: {
        fontSize: number;
        lineHeight: number;
        fontWeight: string;
    };
    caption: {
        fontSize: number;
        lineHeight: number;
        fontWeight: string;
    };
}
export interface Theme {
    colors: ThemeColors;
    spacing: ThemeSpacing;
    typography: ThemeTypography;
}
export declare const mockTheme: Theme;
export declare const useTheme: () => Theme;
export type ColorKey = keyof ThemeColors;
export type SpacingKey = keyof ThemeSpacing;
export type TypographyVariant = keyof ThemeTypography;
//# sourceMappingURL=mock-theme.d.ts.map