import { PixelRatio, Platform, ViewStyle } from 'react-native';
import { Colors } from '.';

export const BORDER_DEFAULT_COLOR = '#D1D2D2';
export const BORDER_HEADER_COLOR = '#D1D2D2';
export const BORDER_INPUT_COLOR = Colors.border.primary;

export const BORDER_HALF_WIDTH = 0.5;
export const BORDER_DEFAULT_WIDTH = PixelRatio.roundToNearestPixel(
    <number>Platform.select({ android: 0.8, ios: 0.5 }),
);
export const BORDER_INPUT_WIDTH = 1;
export const BORDER_HEADER_WIDTH = 0;

const borderDefault: ViewStyle = {
    borderColor: BORDER_DEFAULT_COLOR,
    borderWidth: BORDER_DEFAULT_WIDTH,
    borderStyle: 'solid',
};

const borderInput: ViewStyle = {
    borderColor: BORDER_INPUT_COLOR,
    borderWidth: BORDER_INPUT_WIDTH,
    borderRadius: 7,
};

const borderActive: ViewStyle = {
    borderColor: Colors.border.valid,
    borderWidth: 4,
};

const borderLeft: ViewStyle = {
    borderLeftColor: BORDER_DEFAULT_COLOR,
    borderLeftWidth: BORDER_DEFAULT_WIDTH,
};

const borderRight: ViewStyle = {
    borderRightColor: BORDER_DEFAULT_COLOR,
    borderRightWidth: BORDER_DEFAULT_WIDTH,
};

const borderTop: ViewStyle = {
    borderTopColor: BORDER_DEFAULT_COLOR,
    borderTopWidth: BORDER_DEFAULT_WIDTH,
};

const borderBottom: ViewStyle = {
    borderBottomColor: BORDER_DEFAULT_COLOR,
    borderBottomWidth: BORDER_DEFAULT_WIDTH,
};

export {
    borderDefault,
    borderInput,
    borderLeft,
    borderBottom,
    borderRight,
    borderTop,
    borderActive,
};
