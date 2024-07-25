import { createTheme } from '@rneui/themed';
import colors, { DefaultColorProps } from './colors';

export interface ThemeColorsProps extends DefaultColorProps {
    primeColor: string;
    thumbColor: string;
    mainBg: string;
}

export const themeColors = [
    {
        name: 'dark',
        primeColor: '#282727',
        thumbColor: '#5b5a5a',
        mainBg: '#ffffff',
    },
    {
        name: 'light',
        primeColor: '#cccbcb',
        mainBg: '#eaeaea',
    },
];

export type ThemeSignature = (typeof themeColors)[0];

const combineTheme = createTheme();

const themeValue = { ...combineTheme, ...themeColors[0], ...colors };

export default themeValue;
