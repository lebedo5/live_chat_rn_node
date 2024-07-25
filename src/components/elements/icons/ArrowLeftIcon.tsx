import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ArrowLeftIconProps {
    width?: number;
    height?: number;
    color?: string;
}

export const ArrowLeftIcon = ({
    width = 8,
    height = 13,
    color = '#586775',
}: ArrowLeftIconProps) => {
    return (
        <Svg width={width} height={height} viewBox='0 0 9 16' fill='none'>
            <Path d='M8 1L1 8L8 15' stroke={color} strokeWidth={2} />
        </Svg>
    );
};
