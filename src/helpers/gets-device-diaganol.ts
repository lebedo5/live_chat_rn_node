import { Dimensions, PixelRatio } from 'react-native';

export const { width, height, scale } = Dimensions.get('window');
const pixelDensity = PixelRatio.get();

// Calculate the diagonal in logical pixels
const diagonalPixels = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

// Calculate the diagonal in inches using the pixel density (DPI)
export const diagonalInches =
    diagonalPixels / (pixelDensity * PixelRatio.get());
