/**
 * Image - Enhanced image component with fallback support
 */
import React from 'react';
import { ImageStyle, ViewStyle } from 'react-native';
export interface ImageProps {
    testID?: string;
    style?: ImageStyle | ViewStyle;
    source: {
        uri: string;
    } | number;
    width?: number;
    height?: number;
    aspectRatio?: number;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
    fallback?: React.ReactNode;
    fallbackText?: string;
    showLoading?: boolean;
    loadingText?: string;
    borderRadius?: number;
    onLoad?: () => void;
    onError?: () => void;
    onLoadStart?: () => void;
    onLoadEnd?: () => void;
}
declare const _default: React.NamedExoticComponent<ImageProps>;
export default _default;
//# sourceMappingURL=Image.d.ts.map