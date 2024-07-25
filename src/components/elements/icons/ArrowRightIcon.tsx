import Svg, { Path } from 'react-native-svg';

interface ArrowRightIconProps {
    width?: number;
    height?: number;
    color: string;
}

export const ArrowRightIcon = ({
    width = 8,
    height = 15,
    color = 'blue',
}: ArrowRightIconProps) => {
    return (
        <Svg width={width} height={height} viewBox='0 0 10 18' fill='none'>
            <Path d='M1 1L9 9L1 17' stroke={color} strokeWidth={2} />
        </Svg>
    );
};
