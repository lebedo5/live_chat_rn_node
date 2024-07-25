import Svg, { Path } from 'react-native-svg';

interface CheckIconProps {
    width: number;
    height: number;
    color: string;
}

export const CheckIcon = ({
    width = 24,
    height = 24,
    color = 'white',
}: CheckIconProps) => {
    return (
        <Svg width={width} height={height} fill='none' viewBox='0 0 18 13'>
            <Path
                fill={color}
                fillRule='evenodd'
                d='M17.717.697L6.655 12.066 0 5.226l.717-.697 5.938 6.103L17 0l.717.697z'
                clipRule='evenodd'
            />
            <Path d='M1 5L6.5 10.5L16 1' stroke={color} strokeWidth={2} />
        </Svg>
    );
};
