import Svg, { Path } from 'react-native-svg';
import themeValue from '../../../theme/default-theme';

interface CalendarIconProps {
    width: number;
    height: number;
    color: string;
    active?: boolean;
}

export const CalendarIcon = ({
    width = 24,
    height = 24,
    color = 'white',
    active,
}: CalendarIconProps) => {
    return (
        <Svg width={width} height={height} viewBox='0 0 16 20' fill='none'>
            <Path
                d='M0.5 5.96079C0.5 4.02779 2.067 2.46078 4 2.46078H15.1863V16C15.1863 17.933 13.6193 19.5 11.6863 19.5H0.5V5.96079Z'
                stroke={active ? themeValue.red : color}
            />
            <Path
                d='M4.31396 0V4.70588'
                stroke={active ? themeValue.red : color}
            />
            <Path
                d='M10.1963 0V4.70588'
                stroke={active ? themeValue.red : color}
            />
            <Path
                d='M0.39209 7.45099H15.6862'
                stroke={active ? themeValue.red : color}
            />
        </Svg>
    );
};
