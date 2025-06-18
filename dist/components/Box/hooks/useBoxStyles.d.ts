/**
 * useBoxStyles - Hook for generating Box component styles
 */
import { ViewStyle } from 'react-native';
import { ColorKey, SpacingKey } from '../../../theme/mock-theme';
interface BoxStyleProps {
    backgroundColor?: ColorKey;
    borderColor?: ColorKey;
    padding?: SpacingKey;
    margin?: SpacingKey;
    paddingHorizontal?: SpacingKey;
    paddingVertical?: SpacingKey;
    marginHorizontal?: SpacingKey;
    marginVertical?: SpacingKey;
    flex?: number;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    center?: boolean;
    row?: boolean;
    column?: boolean;
}
export declare const useBoxStyles: (props: BoxStyleProps) => ViewStyle;
export {};
//# sourceMappingURL=useBoxStyles.d.ts.map