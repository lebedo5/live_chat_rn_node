import Svg, { Path } from 'react-native-svg';

interface PlusIconProps {
    width: number;
    height: number;
    color: string;
    strokeWidth?: number;
}

export const PlusIcon = ({
    width = 24,
    height = 24,
    color = 'white',
    strokeWidth = 2,
}: PlusIconProps) => {
    return (
        <Svg width={width} height={height} viewBox='0 0 8 8' fill='none'>
            <Path d='M4 0V8' stroke={color} strokeWidth={strokeWidth} />
            <Path
                d='M8 4L-3.57628e-07 4'
                stroke={color}
                strokeWidth={strokeWidth}
            />
        </Svg>
    );
};
