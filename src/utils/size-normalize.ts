import { Dimensions, PixelRatio } from 'react-native';

export const { width: SCREEN_WIDTH } = Dimensions.get('window');

const viewWidthUnit = SCREEN_WIDTH / 100;

export function normalize(size: number, min: number, max: number) {
    const newSize = size * viewWidthUnit;
    if (newSize >= min && newSize <= max) {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
    if (newSize < min) {
        return min;
    }
    if (newSize > max) {
        return max;
    }
}

export function getViewWidth(size: number) {
    return size * viewWidthUnit;
}
