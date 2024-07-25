import { Dimensions, Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';

export const { width, height, scale } = Dimensions.get('window');

export const isSmallDevice = width <= 380;
export const ScreenWidthWithPadding = width - 40;
