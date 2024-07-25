import Svg, { Path, Circle } from 'react-native-svg';
import themeValue from '../../../theme/default-theme';

interface ClockIconProps {
    width: number;
    height: number;
    color: string;
    active?: boolean;
}

export const ClockIcon = ({
    width = 24,
    height = 24,
    color = 'white',
    active,
}: ClockIconProps) => {
    return (
        <Svg width={width} height={height} viewBox='0 0 20 20' fill='none'>
            <Path
                d='M10 3.5V10.5H16'
                stroke={active ? themeValue.red : color}
            />
            <Circle
                cx='10'
                cy='10'
                r='9.5'
                stroke={active ? themeValue.red : color}
            />
        </Svg>
    );
};
