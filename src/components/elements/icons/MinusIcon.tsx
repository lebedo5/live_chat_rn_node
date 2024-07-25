import Svg, { Path } from 'react-native-svg';

interface MinusIconProps {
    width: number;
    height: number;
    color: string;
}

export const MinusIcon = ({
    width = 24,
    height = 24,
    color = 'white',
}: MinusIconProps) => {
    return (
        <Svg width={width} height={height} viewBox='0 0 14 2' fill='none'>
            <Path d='M14 1L0 0.999999' stroke={color} strokeWidth={8} />
        </Svg>
    );
};
